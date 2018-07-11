import {Sidebar} from "./Sidebar";

export declare class EditorUi {
  sidebar: Sidebar;
  sidebarContainer: HTMLDivElement;
  
  constructor(editor?, container?, lightbox?);
  
  createSidebar(container): void;
  
  refresh(sizeDidChange?): void;
}