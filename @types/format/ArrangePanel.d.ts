import {EditorUi} from "../EditorUi";
import {BaseFormatPanel} from "./BaseFormatPanel";

export declare class ArrangePanel extends BaseFormatPanel {
  constructor(format: any, editorUi: EditorUi, container: HTMLDivElement);
  init(): void;
  addAlign(div: HTMLDivElement);
  addAngle(div: HTMLDivElement);
  addDistribute(div: HTMLDivElement);
  addEdgeGeometry(div: HTMLDivElement);
  addEdgeGeometryHandler(input: any, fn: Function);
  addFlip(div: HTMLDivElement);
  addGeometry(container: HTMLDivElement): void;
  addGeometryHandler(input: any, fn: Function);
  addGroupOps(div: HTMLDivElement);
  addLayerOps(div: HTMLDivElement);
}