import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class BudgetAllocator implements ComponentFramework.StandardControl<IInputs, IOutputs> {
  private _container: HTMLDivElement;
  private _notifyOutputChanged: () => void;
  
  private _totalAmount = 0;
  private _tuitionAlloc = 0;
  private _housingAlloc = 0;
  private _booksAlloc = 0;

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
    this._totalAmount = context.parameters.totalAmount.raw || 1000;
    
    // Only update local allocs if they aren't initialized or if context has newer values
    if (context.parameters.tuitionAlloc.raw !== null) this._tuitionAlloc = context.parameters.tuitionAlloc.raw;
    if (context.parameters.housingAlloc.raw !== null) this._housingAlloc = context.parameters.housingAlloc.raw;
    if (context.parameters.booksAlloc.raw !== null) this._booksAlloc = context.parameters.booksAlloc.raw;
  }

  private renderControl(): void {
    this._container.innerHTML = "";
    
    const wrapper = document.createElement("div");
    wrapper.style.fontFamily = "Segoe UI, sans-serif";
    wrapper.style.padding = "20px";
    wrapper.style.backgroundColor = "#ffffff";
    wrapper.style.border = "1px solid #e2e8f0";
    wrapper.style.borderRadius = "12px";

    const remaining = this._totalAmount - (this._tuitionAlloc + this._housingAlloc + this._booksAlloc);

    const header = document.createElement("div");
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.style.marginBottom = "20px";

    const title = document.createElement("h4");
    title.innerText = "Budget Allocator";
    title.style.margin = "0";

    const remainBadge = document.createElement("div");
    remainBadge.innerText = `Remaining: $${remaining}`;
    remainBadge.style.fontWeight = "bold";
    remainBadge.style.color = remaining < 0 ? "#ef4444" : (remaining === 0 ? "#10b981" : "#f59e0b");
    
    header.appendChild(title);
    header.appendChild(remainBadge);
    wrapper.appendChild(header);

    const createSlider = (label: string, value: number, max: number, onChange: (val: number) => void) => {
      const row = document.createElement("div");
      row.style.marginBottom = "12px";

      const labelRow = document.createElement("div");
      labelRow.style.display = "flex";
      labelRow.style.justifyContent = "space-between";
      labelRow.style.fontSize = "14px";
      labelRow.style.marginBottom = "4px";

      const name = document.createElement("span");
      name.innerText = label;
      const valText = document.createElement("span");
      valText.innerText = `$${value}`;
      valText.style.fontWeight = "bold";

      labelRow.appendChild(name);
      labelRow.appendChild(valText);
      row.appendChild(labelRow);

      const input = document.createElement("input");
      input.type = "range";
      input.min = "0";
      input.max = max.toString();
      input.value = value.toString();
      input.step = "50";
      input.style.width = "100%";
      input.style.accentColor = "#4f46e5";

      input.addEventListener("input", (e) => {
        const newVal = parseInt((e.target as HTMLInputElement).value, 10);
        onChange(newVal);
      });

      row.appendChild(input);
      return row;
    };

    wrapper.appendChild(createSlider("Tuition", this._tuitionAlloc, this._totalAmount, (v) => { this._tuitionAlloc = v; this._notifyOutputChanged(); this.renderControl(); }));
    wrapper.appendChild(createSlider("Housing", this._housingAlloc, this._totalAmount, (v) => { this._housingAlloc = v; this._notifyOutputChanged(); this.renderControl(); }));
    wrapper.appendChild(createSlider("Books & Supplies", this._booksAlloc, this._totalAmount, (v) => { this._booksAlloc = v; this._notifyOutputChanged(); this.renderControl(); }));

    this._container.appendChild(wrapper);
  }

  public getOutputs(): IOutputs {
    return {
      tuitionAlloc: this._tuitionAlloc,
      housingAlloc: this._housingAlloc,
      booksAlloc: this._booksAlloc
    };
  }

  public destroy(): void {
    this._container.innerHTML = "";
  }
}
