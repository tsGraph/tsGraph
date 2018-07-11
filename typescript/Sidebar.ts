
  export declare class Sidebar {
    constructor(editorUi, container?)
  
    init(): void;
  
    addClickHandler(elt: HTMLElement, ds, cells): void;
  
    addPaletteFunctions(id: string, title: string, expanded: boolean, fns: Function[])
  
    addSearchPalette(visible?): void;
  
    addPalette(id?: string, title?: string, expanded?: boolean, onInit?)
  
    createVertexTemplateEntry(style?, width?, height?, value?, title?, showlabel?, showtitle?, tags?)
    
  }