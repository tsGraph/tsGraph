import {BaseFormatPanel} from "./BaseFormatPanel";
import {EditorUi} from "../EditorUi";

export declare class StyleFormatPanel extends BaseFormatPanel {
  defaultStrokeColor: string;
  
  constructor(format: any, editorUi: EditorUi, container: HTMLDivElement);
  init(): void;
  addEditOps(div: HTMLDivElement)
  addEffects(div: HTMLDivElement)
  addFill(container: HTMLElement)
  addLineJumps(container: HTMLElement)
  addStroke(container: HTMLElement)
  addStyleOps(div: HTMLDivElement)
}