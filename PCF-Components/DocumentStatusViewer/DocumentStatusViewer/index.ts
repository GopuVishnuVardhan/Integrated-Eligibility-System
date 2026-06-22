import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class DocumentStatusViewer implements ComponentFramework.StandardControl<IInputs, IOutputs> {
  private _container: HTMLDivElement;
  private _idStatus = false;
  private _transcriptStatus = false;
  private _incomeProofStatus = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ): void {
    this._container = container;
    this.updateData(context);
    this.renderControl();
  }

  public updateView(context: ComponentFramework.Context<IInputs>): void {
    this.updateData(context);
    this.renderControl();
  }

  private updateData(context: ComponentFramework.Context<IInputs>) {
    this._idStatus = context.parameters.idStatus.raw === "1" || context.parameters.idStatus.raw === "true";
    this._transcriptStatus = context.parameters.transcriptStatus.raw === "1" || context.parameters.transcriptStatus.raw === "true";
    this._incomeProofStatus = context.parameters.incomeProofStatus.raw === "1" || context.parameters.incomeProofStatus.raw === "true";
  }

  private renderControl(): void {
    this._container.innerHTML = "";
    
    const wrapper = document.createElement("div");
    wrapper.style.fontFamily = "Segoe UI, sans-serif";
    wrapper.style.padding = "16px";
    wrapper.style.backgroundColor = "#ffffff";
    wrapper.style.border = "1px solid #e2e8f0";
    wrapper.style.borderRadius = "12px";

    const title = document.createElement("h4");
    title.innerText = "Required Documents";
    title.style.margin = "0 0 16px 0";
    title.style.color = "#334155";
    wrapper.appendChild(title);

    const createRow = (docName: string, isVerified: boolean) => {
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.justifyContent = "space-between";
      row.style.alignItems = "center";
      row.style.padding = "8px 0";
      row.style.borderBottom = "1px solid #f1f5f9";

      const name = document.createElement("span");
      name.innerText = docName;
      name.style.fontSize = "14px";
      name.style.color = "#475569";
      name.style.fontWeight = "500";

      const badge = document.createElement("span");
      badge.style.padding = "4px 8px";
      badge.style.borderRadius = "16px";
      badge.style.fontSize = "12px";
      badge.style.fontWeight = "bold";

      if (isVerified) {
        badge.innerText = "Verified";
        badge.style.backgroundColor = "#dcfce7";
        badge.style.color = "#166534";
      } else {
        badge.innerText = "Pending";
        badge.style.backgroundColor = "#fef08a";
        badge.style.color = "#854d0e";
      }

      row.appendChild(name);
      row.appendChild(badge);
      return row;
    };

    wrapper.appendChild(createRow("Student ID / Government ID", this._idStatus));
    wrapper.appendChild(createRow("Official Transcripts", this._transcriptStatus));
    wrapper.appendChild(createRow("Proof of Income", this._incomeProofStatus));

    this._container.appendChild(wrapper);
  }

  public getOutputs(): IOutputs {
    return {};
  }

  public destroy(): void {
    this._container.innerHTML = "";
  }
}
