import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class ApprovalTimeline implements ComponentFramework.StandardControl<IInputs, IOutputs> {
  private _container: HTMLDivElement;
  private _currentStage = 1;
  private readonly _stages = ["Intake", "Under Review", "Finance", "Approved"];

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
    this._currentStage = context.parameters.currentStage.raw || 1;
  }

  private renderControl(): void {
    this._container.innerHTML = "";
    
    const wrapper = document.createElement("div");
    wrapper.style.fontFamily = "Segoe UI, sans-serif";
    wrapper.style.padding = "20px";
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.justifyContent = "space-between";
    wrapper.style.backgroundColor = "#ffffff";
    wrapper.style.borderRadius = "12px";
    wrapper.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";

    this._stages.forEach((stage, index) => {
      const stepNum = index + 1;
      const isCompleted = stepNum < this._currentStage;
      const isActive = stepNum === this._currentStage;

      const stepContainer = document.createElement("div");
      stepContainer.style.display = "flex";
      stepContainer.style.flexDirection = "column";
      stepContainer.style.alignItems = "center";
      stepContainer.style.flex = "1";
      stepContainer.style.position = "relative";

      const circle = document.createElement("div");
      circle.style.width = "28px";
      circle.style.height = "28px";
      circle.style.borderRadius = "50%";
      circle.style.display = "flex";
      circle.style.alignItems = "center";
      circle.style.justifyContent = "center";
      circle.style.fontWeight = "bold";
      circle.style.zIndex = "1";
      circle.style.fontSize = "12px";

      if (isCompleted) {
        circle.style.backgroundColor = "#10b981"; // emerald
        circle.style.color = "white";
        circle.innerHTML = "✓";
      } else if (isActive) {
        circle.style.backgroundColor = "#6366f1"; // indigo
        circle.style.color = "white";
        circle.innerHTML = stepNum.toString();
        circle.style.boxShadow = "0 0 0 4px rgba(99, 102, 241, 0.2)";
      } else {
        circle.style.backgroundColor = "#e2e8f0"; // slate 200
        circle.style.color = "#64748b"; // slate 500
        circle.innerHTML = stepNum.toString();
      }

      const label = document.createElement("div");
      label.innerText = stage;
      label.style.marginTop = "8px";
      label.style.fontSize = "11px";
      label.style.fontWeight = isActive ? "bold" : "normal";
      label.style.color = isActive ? "#1e293b" : "#64748b";
      label.style.textTransform = "uppercase";
      label.style.letterSpacing = "0.5px";
      label.style.textAlign = "center";

      stepContainer.appendChild(circle);
      stepContainer.appendChild(label);
      wrapper.appendChild(stepContainer);

      if (index < this._stages.length - 1) {
        const line = document.createElement("div");
        line.style.flex = "1";
        line.style.height = "2px";
        line.style.backgroundColor = isCompleted ? "#10b981" : "#e2e8f0";
        line.style.marginTop = "-24px"; // Align with circle center
        wrapper.appendChild(line);
      }
    });

    this._container.appendChild(wrapper);
  }

  public getOutputs(): IOutputs {
    return {};
  }

  public destroy(): void {
    this._container.innerHTML = "";
  }
}
