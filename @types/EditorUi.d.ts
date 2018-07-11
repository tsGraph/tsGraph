import { Sidebar } from "./Sidebar";
export declare class EditorUi {
    sidebar: Sidebar;
    sidebarContainer: HTMLDivElement;
    constructor(editor?: any, container?: any, lightbox?: any);
    createSidebar(container: any): void;
    refresh(sizeDidChange?: any): void;
}
