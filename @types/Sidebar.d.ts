import { mxCell } from "../@types/index";
export declare class Sidebar {
    constructor(editorUi: any, container?: any);
    init(): void;
    addAdvancedPalette(expand: boolean): void;
    addBasicPalette(dir: string): void;
    addBpmnPalette(dir: string, expand: boolean): void;
    addClickHandler(elt: HTMLElement, ds: any, cells: mxCell[]): any;
    addDataEntry: any;
    addClickHandler(elt: HTMLElement, ds: any, cells: any): void;
    addPaletteFunctions(id: string, title: string, expanded: boolean, fns: Function[]): any;
    addSearchPalette(visible?: any): void;
    addPalette(id?: string, title?: string, expanded?: boolean, onInit?: any): any;
    createVertexTemplateEntry(style?: any, width?: any, height?: any, value?: any, title?: any, showlabel?: any, showtitle?: any, tags?: any): any;
}
