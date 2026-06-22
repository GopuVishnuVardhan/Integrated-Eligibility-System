import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class EligibilityCalculator implements ComponentFramework.StandardControl<IInputs, IOutputs> {
  private _container: HTMLDivElement;
  private _income = 0;
  private _householdSize = 1;
  private _requestedAmount = 0;

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
    this._income = context.parameters.householdIncome.raw || 0;
    this._householdSize = context.parameters.householdSize.raw || 1;
    this._requestedAmount = context.parameters.requestedAmount.raw || 0;
    
    if (this._householdSize < 1) this._householdSize = 1;
  }

  private renderControl(): void {
    this._container.innerHTML = "";
    
    const wrapper = document.createElement("div");
    wrapper.style.fontFamily = "Segoe UI, sans-serif";
    wrapper.style.padding = "16px";
    wrapper.style.border = "1px solid #e2e8f0";
    wrapper.style.borderRadius = "12px";
    wrapper.style.backgroundColor = "#ffffff";
    wrapper.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";

    const title = document.createElement("h4");
    title.innerText = "Eligibility Projection";
    title.style.margin = "0 0 12px 0";
    title.style.color = "#334155";
    title.style.fontSize = "14px";
    title.style.textTransform = "uppercase";
    title.style.fontWeight = "bold";

    wrapper.appendChild(title);

    const perCapita = this._income / this._householdSize;
    let score = 0;
    let category = "Ineligible";
    let color = "#ef4444"; // red
    let bg = "#fee2e2";

    if (perCapita < 10000) {
      score = 100;
      category = "Highly Eligible";
      color = "#10b981"; // emerald
      bg = "#d1fae5";
    } else if (perCapita <= 25000) {
      score = 75;
      category = "Moderately Eligible";
      color = "#f59e0b"; // amber
      bg = "#fef3c7";
    } else {
      score = 20;
    }

    const statGrid = document.createElement("div");
    statGrid.style.display = "grid";
    statGrid.style.gridTemplateColumns = "1fr 1fr";
    statGrid.style.gap = "8px";
    statGrid.style.marginBottom = "16px";

    const createStat = (label: string, value: string) => {
      const d = document.createElement("div");
      d.innerHTML = `<div style="font-size:12px;color:#64748b;">${label}</div><div style="font-size:16px;font-weight:600;color:#0f172a;">${value}</div>`;
      return d;
    };

    statGrid.appendChild(createStat("Income Per Capita", `$${perCapita.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}`));
    statGrid.appendChild(createStat("Requested", `$${this._requestedAmount.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}`));
    
    wrapper.appendChild(statGrid);

    const resultBox = document.createElement("div");
    resultBox.style.padding = "12px";
    resultBox.style.borderRadius = "8px";
    resultBox.style.backgroundColor = bg;
    resultBox.style.color = color;
    resultBox.style.display = "flex";
    resultBox.style.alignItems = "center";
    resultBox.style.justifyContent = "space-between";

    const catDiv = document.createElement("div");
    catDiv.style.fontWeight = "bold";
    catDiv.innerText = category;
    resultBox.appendChild(catDiv);

    const scoreDiv = document.createElement("div");
    scoreDiv.style.fontSize = "20px";
    scoreDiv.style.fontWeight = "bold";
    scoreDiv.innerText = `${score}/100`;
    resultBox.appendChild(scoreDiv);

    wrapper.appendChild(resultBox);
    this._container.appendChild(wrapper);
  }

  public getOutputs(): IOutputs {
    return {};
  }

  public destroy(): void {
    this._container.innerHTML = "";
  }
}
