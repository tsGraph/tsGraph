import {BaseFormatPanel} from "./BaseFormatPanel";
import {EditorUi} from "../EditorUi";

export declare class ArrangePanel extends BaseFormatPanel {
  constructor(format: any, editorUi: EditorUi, container: HTMLDivElement);
  init();
  addFont(container: HTMLElement);
}