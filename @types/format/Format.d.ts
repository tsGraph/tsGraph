import {EditorUi} from "../EditorUi";
import {mxCell} from "../mxClient";

export declare class Format {
//fields
  container: HTMLDivElement;
  currentIndex: number;
  editorUi: EditorUi;
  inactiveTabBackgroundColor: string;
  labelIndex: number;
  panels: HTMLDivElement[];
  selectionState: any | null;
  showCloseButton: boolean;
  
//Methods
  constructor(editorUi: EditorUi, container: HTMLDivElement);
  init();
  clear(): void
  clearSelectionState()
  createSelectionState()
  getSelectionState()
  initSelectionState();
  isAutoSizeState(state: any): boolean;
  isComicState(state: any): boolean;
  isFillState(state: any): boolean;
  isGlassState(state: any): boolean;
  isImageState(state: any): boolean;
  isLineJumpState(state: any): boolean;
  isRoundedState(state: any): boolean;
  isShadowState(state: any): boolean;
  refresh(): void;
  update(): void;
  updateSelectionStateForCell(result, cell: mxCell, cells: mxCell[])
}



