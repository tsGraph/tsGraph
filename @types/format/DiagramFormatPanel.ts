import {BaseFormatPanel} from "./BaseFormatPanel";
import {EditorUi} from "../EditorUi";

export declare class DiagramFormatPanel extends BaseFormatPanel {
  gridEnabledListener: any;
  showBackgroundImageOption: boolean;
  showPageView: boolean;
  
  constructor(format: any, editorUi: EditorUi, container: HTMLDivElement);
  init();
  addDocumentProperties(div: HTMLDivElement);
  addGridOption(container: HTMLElement);
  addOptions(div: HTMLDivElement);
  addPaperSize(div: HTMLDivElement);
  addStyleOps(div: HTMLDivElement);
  addView(div: HTMLDivElement);
  destroy(): void;
}