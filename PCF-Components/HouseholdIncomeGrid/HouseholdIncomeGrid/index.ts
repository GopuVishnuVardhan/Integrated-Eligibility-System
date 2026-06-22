import { IInputs, IOutputs } from "./generated/ManifestTypes";

interface Member {
  name: string;
  relation: string;
  income: number;
}

export class HouseholdIncomeGrid implements ComponentFramework.StandardControl<IInputs, IOutputs> {
  private _container: HTMLDivElement;
  private _notifyOutputChanged: () => void;
  private _members: Member[] = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ): void {
    this._container = container;
    this._notifyOutputChanged = notifyOutputChanged;
    this.updateData(context);
    this.renderControl();
  }

  public updateView(context: ComponentFramework.Context<IInputs>): void {
    this.updateData(context);
    this.renderControl();
  }

  private updateData(context: ComponentFramework.Context<IInputs>) {
    const rawData = context.parameters.householdData.raw;
    try {
      this._members = rawData ? JSON.parse(rawData) : [];
    } catch {
      this._members = [];
    }
  }

  private renderControl(): void {
    this._container.innerHTML = "";
    
    const wrapper = document.createElement("div");
    wrapper.style.fontFamily = "Segoe UI, sans-serif";
    wrapper.style.border = "1px solid #e2e8f0";
    wrapper.style.borderRadius = "8px";
    wrapper.style.overflow = "hidden";

    const headerRow = document.createElement("div");
    headerRow.style.display = "flex";
    headerRow.style.backgroundColor = "#f8fafc";
    headerRow.style.padding = "10px 16px";
    headerRow.style.borderBottom = "1px solid #e2e8f0";
    headerRow.style.fontWeight = "bold";
    headerRow.style.fontSize = "14px";
    headerRow.style.color = "#334155";

    const createCell = (text: string, flex: string) => {
      const cell = document.createElement("div");
      cell.innerText = text;
      cell.style.flex = flex;
      return cell;
    };

    headerRow.appendChild(createCell("Name", "2"));
    headerRow.appendChild(createCell("Relation", "2"));
    headerRow.appendChild(createCell("Income", "1"));
    headerRow.appendChild(createCell("", "0.5")); // Delete button column
    wrapper.appendChild(headerRow);

    this._members.forEach((member, index) => {
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.padding = "10px 16px";
      row.style.borderBottom = "1px solid #f1f5f9";
      row.style.alignItems = "center";
      row.style.fontSize = "14px";

      row.appendChild(createCell(member.name, "2"));
      row.appendChild(createCell(member.relation, "2"));
      row.appendChild(createCell(`$${member.income}`, "1"));

      const delCell = document.createElement("div");
      delCell.style.flex = "0.5";
      delCell.style.textAlign = "right";
      
      const delBtn = document.createElement("button");
      delBtn.innerText = "✖";
      delBtn.style.background = "none";
      delBtn.style.border = "none";
      delBtn.style.color = "#ef4444";
      delBtn.style.cursor = "pointer";
      delBtn.onclick = () => {
        this._members.splice(index, 1);
        this._notifyOutputChanged();
        this.renderControl();
      };

      delCell.appendChild(delBtn);
      row.appendChild(delCell);
      wrapper.appendChild(row);
    });

    const addRow = document.createElement("div");
    addRow.style.display = "flex";
    addRow.style.padding = "10px 16px";
    addRow.style.backgroundColor = "#f8fafc";
    addRow.style.gap = "8px";

    const nameInput = document.createElement("input");
    nameInput.placeholder = "Name";
    nameInput.style.flex = "2";
    nameInput.style.padding = "4px 8px";

    const relInput = document.createElement("input");
    relInput.placeholder = "Relation";
    relInput.style.flex = "2";
    relInput.style.padding = "4px 8px";

    const incInput = document.createElement("input");
    incInput.type = "number";
    incInput.placeholder = "Income";
    incInput.style.flex = "1";
    incInput.style.padding = "4px 8px";

    const addBtn = document.createElement("button");
    addBtn.innerText = "Add";
    addBtn.style.flex = "0.5";
    addBtn.style.backgroundColor = "#4f46e5";
    addBtn.style.color = "white";
    addBtn.style.border = "none";
    addBtn.style.borderRadius = "4px";
    addBtn.style.cursor = "pointer";
    
    addBtn.onclick = () => {
      if (nameInput.value) {
        this._members.push({
          name: nameInput.value,
          relation: relInput.value || "Self",
          income: parseFloat(incInput.value) || 0
        });
        this._notifyOutputChanged();
        this.renderControl();
      }
    };

    addRow.appendChild(nameInput);
    addRow.appendChild(relInput);
    addRow.appendChild(incInput);
    addRow.appendChild(addBtn);

    wrapper.appendChild(addRow);
    this._container.appendChild(wrapper);
  }

  public getOutputs(): IOutputs {
    return {
      householdData: JSON.stringify(this._members)
    };
  }

  public destroy(): void {
    this._container.innerHTML = "";
  }
}
