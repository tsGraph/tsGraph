import {EditorUi} from "../EditorUi";

export declare class BaseFormatPanel {
  buttonBackgroundColor: string;
  container: HTMLDivElement;
  editorUi: EditorUi;
  format: any;
  listeners: any;
  
  constructor(format: any, editorUi: EditorUi, container: HTMLDivElement);
  
  addArrow(elt: HTMLElement, height: number)
  addKeyHandler(input: string, listener: any)
  addLabel(div: HTMLDivElement, title: string, right: number, width: number);
  addUnitInput(container: HTMLElement, unit: string, right: number, width: number, update, step: any, marginTop: number, disableFocus: boolean );
  createCellColorOption(label: string, colorKey: string, defaultColor: string, callbackFN: Function, setStyleFn: Function);
  createCellOption(label: string, key: string, defaultValue: string, enabledValue: string, disabledValue: string, fn: Function, action: any, stopEditing: boolean);
  createColorOption(label: string, getColorFn: Function, defaultColor: string, listener: any, callbackFn: Function, hideCheckbox: boolean);
  createOption(label: string, isCheckedFn: Function, setCheckedFn: Function, listener: any);
  createPanel();
  createRelativeOption(label: string, key: string, width: number, handler: any, init: Function)
  createStepper(input: HTMLInputElement, update: any, step: any, height: number, disableFocus: boolean, defaultValue: any)
  createTitle(title: string);
  destroy(): void;
  getSelectionState()
  installInputHandler(input: HTMLInputElement, key: string, defaultValue: any, min: number, max: number, unit: string, textEditFallback: any, isFloat: boolean);
  styleButtons(elts: HTMLElement[]);
}