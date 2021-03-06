import {Sidebar} from "./Sidebar";
import {mxEventSource} from "./mxClient";
import {Editor} from "./Editor";

export declare class EditorUi extends mxEventSource {
  actions: any;
  /**
   * Specifies if animations are allowed in <executeLayout>. Default is true.
   */
  allowAnimation: boolean;
  chromelessResize: any;
  chromelessToolbar: any;
  chromelessWindowResize: any;
  /**
   * Global config that specifies if the compact UI elements should be used.
   */
  compactUi: boolean;
  container: HTMLDivElement;
  currentMenu: any;
  currentMenuElt: any;
  destroyFunctions: any;
  diagramContainer: any;
  dialog: any;
  dialogs: any;
  /**
   * Specifies the link for the edit button in chromeless mode.
   */
  editButtonLink: string | null;
  editor: Editor;
  footerContainer: HTMLDivElement;
  /**
   * Specifies the height of the footer. Default is 28.
   */
  footerHeight: number;
  format;
  formatContainer: HTMLDivElement;
  /**
   * Specifies the width of the format panel should be enabled. Default is true.
   */
  formatEnabled: boolean;
  /**
   * Specifies the width of the format panel. Default is 240.
   */
  formatWidth: number;
  gestureHandler: any;
  hoverIcons: any;
  hsplit: any;
  /**
   * Specifies the position of the horizontal split bar. Default is 208 or 118 for
   * screen widths <= 640px.
   */
  hsplitPosition: number;
  keydownHandler: any;
  keyHandler: any;
  keyupHandler: any;
  layersDialog: any;
  /**
   * Specifies if animations are allowed in <executeLayout>. Default is true.
   */
  lightboxMaxFitScale: number;
  
  /**
   * Specifies if animations are allowed in <executeLayout>. Default is true.
   */
  lightboxVerticalDivider: number;
  menubar: any;
  menubarContainer: HTMLDivElement;
  /**
   * Specifies the height of the menubar. Default is 34.
   */
  menubarHeight: number;
  menus: any;
  orientationChangeHandler: any;
  resizeHandler: any;
  scrollHandler: any;
  sidebar: Sidebar;
  sidebarContainer: HTMLDivElement;
  sidebarFooterContainer: HTMLDivElement;
  /**
   * Specifies the height of the optional sidebarFooterContainer. Default is 34.
   */
  sidebarFooterHeight: number;
  /**
   * Specifies the size of the split bar.
   */
  splitSize: number;
  statusContainer: HTMLDivElement;
  tabContainer: HTMLDivElement;
  toolbar;
  toolbarContainer: HTMLDivElement;
  /**
   * Specifies the height of the toolbar. Default is 36.
   */
  toolbarHeight: number;
  translate;
  ui;
  updateZoomTimeout;
  usePopupTrigger;
  zoom;
  
  constructor(editor?: any, container?: any, lightbox?: any);
  
  createSidebar(container: any): void;
  
  refresh(sizeDidChange?: any): void;
  
  /**
   * Installs the listeners to update the action states.
   */
  init(): void;
  
  
  /**
   * Returns true if the given event should start editing. This implementation returns true.
   */
  onKeyDown(evt: Event): boolean;
  
  
  /**
   * Returns true if the given event should start editing. This implementation returns true.
   */
  onKeyPress(evt: Event): boolean;
  
  
  /**
   * Returns true if the given event should start editing. This implementation returns true.
   */
  isImmediateEditingEvent(evt: Event): boolean;
  
  /**
   * Private helper method.
   */
  getCssClassForMarker(prefix, shape, marker, fill);
  
  
  /**
   * Overridden in Menus.js
   */
  createMenus();
  
  
  /**
   * Hook for allowing selection and context menu for certain events.
   */
  updatePasteActionStates();
  
  
  /**
   * Hook for allowing selection and context menu for certain events.
   */
  initClipboard();
  
  
  /**
   * Initializes the infinite canvas.
   */
  initCanvas();
  
  
  /**
   * Creates a temporary graph instance for rendering off-screen content.
   */
  addChromelessToolbarItems(addButton): void;
  
  
  /**
   * Creates a temporary graph instance for rendering off-screen content.
   */
  createTemporaryGraph(stylesheet);
  
  
  /**
   *
   */
  addChromelessClickHandler(): void;
  
  
  /**
   *
   */
  toggleFormatPanel(forceHide);
  
  
  /**
   * Adds support for placeholders in labels.
   */
  lightboxFit(maxHeight);
  
  isDiagramEmpty();
  
  /**
   * Hook for allowing selection and context menu for certain events.
   */
  isSelectionAllowed(evt);
  
  
  /**
   * Installs dialog if browser window is closed without saving
   * This must be disabled during save and image export.
   */
  addBeforeUnloadListener(): void;
  
  
  /**
   * Sets the onbeforeunload for the application
   */
  onBeforeUnload();
  
  
  /**
   * Opens the current diagram via the window.opener if one exists.
   */
  open();
  
  
  /**
   * Sets the current menu and element.
   */
  setCurrentMenu(menu, elt);
  
  
  /**
   * Resets the current menu and element.
   */
  resetCurrentMenu();
  
  
  /**
   * Hides and destroys the current menu.
   */
  hideCurrentMenu();
  
  
  /**
   * Updates the document title.
   */
  updateDocumentTitle();
  
  
  /**
   * Updates the document title.
   */
  createHoverIcons();
  
  
  /**
   * Returns the URL for a copy of this editor with no state.
   */
  redo();
  
  
  /**
   * Returns the URL for a copy of this editor with no state.
   */
  undo();
  
  
  /**
   * Returns the URL for a copy of this editor with no state.
   */
  canRedo();
  
  
  /**
   * Returns the URL for a copy of this editor with no state.
   */
  canUndo();
  
  
  /**
   *
   */
  getEditBlankXml();
  
  
  /**
   * Returns the URL for a copy of this editor with no state.
   */
  getUrl(pathname);
  
  
  /**
   * Specifies if the graph has scrollbars.
   */
  setScrollbars(value);
  
  
  /**
   * Returns true if the graph has scrollbars.
   */
  hasScrollbars();
  
  
  /**
   * Resets the state of the scrollbars.
   */
  resetScrollbars();
  
  
  /**
   * Loads the stylesheet for this graph.
   */
  setPageVisible(value);
  
  
  /**
   * Change Page Setup
   */
  ChangePageSetup(ui, color, image, format)
  
  
  /**
   * Loads the stylesheet for this graph.
   */
  setBackgroundColor(value);
  
  
  /**
   * Loads the stylesheet for this graph.
   */
  setFoldingEnabled(value);
  
  
  /**
   * Loads the stylesheet for this graph.
   */
  setPageFormat(value);
  
  
  /**
   * Loads the stylesheet for this graph.
   */
  setPageScale(value);
  
  
  /**
   * Loads the stylesheet for this graph.
   */
  setGridColor(value);
  
  
  /**
   * Updates the states of the given undo/redo items.
   */
  addUndoListener();
  
  
  /**
   * Updates the states of the given toolbar items based on the selection.
   */
  updateActionStates();
  
  
  /**
   * Refreshes the viewport.
   */
  refresh(sizeDidChange: boolean);
  
  
  /**
   * Creates the required containers.
   */
  createTabContainer();
  
  
  /**
   * Creates the required containers.
   */
  createDivs();
  
  
  /**
   * Hook for sidebar footer container. This implementation returns null.
   */
  createSidebarFooterContainer();
  
  
  /**
   * Creates the required containers.
   */
  createUi();
  
  
  /**
   * Creates a new toolbar for the given container.
   */
  createStatusContainer();
  
  
  /**
   * Creates a new toolbar for the given container.
   */
  setStatusText(value);
  
  
  /**
   * Creates a new toolbar for the given container.
   */
  createToolbar(container: HTMLDivElement);
  
  
  /**
   * Creates a new sidebar for the given container.
   */
  createSidebar(container: HTMLDivElement);
  
  
  /**
   * Creates a new sidebar for the given container.
   */
  createFormat(container: HTMLDivElement);
  
  
  /**
   * Creates and returns a new footer.
   */
  createFooter();
  
  
  /**
   * Creates the actual toolbar for the toolbar container.
   */
  createDiv(classname: string);
  
  
  addSplitHandler(elt: HTMLElement, horizontal: boolean, dx: number, onChange: Function);
  
  /**
   * Displays a print dialog.
   */
  showDialog(elt, w, h, modal, closable, onClose, noScroll);
  
  
  /**
   * Displays a print dialog.
   */
  hideDialog(cancel);
  
  
  /**
   * Display a color dialog.
   */
  pickColor(color, apply);
  
  
  /**
   * Adds the label menu items to the given menu and parent.
   */
  openFile();
  
  
  /**
   * Extracs the graph model from the given HTML data from a data transfer event.
   */
  extractGraphModelFromHtml(data);
  
  
  /**
   * Opens the given files in the editor.
   */
  extractGraphModelFromEvent(evt);
  
  
  /**
   * Hook for subclassers to return true if event data is a supported format.
   * This implementation always returns false.
   */
  isCompatibleString(data);
  
  
  /**
   * Adds the label menu items to the given menu and parent.
   */
  saveFile(forceDialog);
  
  
  /**
   * Saves the current graph under the given filename.
   */
  save(name);
  
  
  /**
   * Executes the given layout.
   */
  executeLayout(exec, animate, post);
  
  
  /**
   * Hides the current menu.
   */
  showImageDialog(title, value, fn, ignoreExisting);
  
  
  /**
   * Hides the current menu.
   */
  showLinkDialog(value, btnLabel, fn);
  
  
  /**
   * Hides the current menu.
   */
  showBackgroundImageDialog(apply);
  
  
  /**
   * Loads the stylesheet for this graph.
   */
  setBackgroundImage(image);
  
  
  /**
   * Creates the keyboard event handler for the current graph and history.
   */
  confirm(msg, okFn, cancelFn);
  
  
  /**
   * Creates the keyboard event handler for the current graph and history.
   */
  createOutline(wnd);
  
  
  /**
   * Creates the keyboard event handler for the current graph and history.
   */
  createKeyHandler(editor);
  
  
  /**
   * Creates the keyboard event handler for the current graph and history.
   */
  destroy();
}
