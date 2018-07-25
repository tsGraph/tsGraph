//fields
import {mxCell, mxCellState, mxGraph, mxLayoutManager, mxMouseEvent, mxRectangle, mxEventSource} from "mxClient";

export declare class Graph extends mxGraph {
  absoluteUrlPattern: RegExp;
  allowAutoPanning: boolean;
  alternateEdgeStyle: string;
  baseUrl: string;
  connectionArrowsEnabled: boolean;
  constrainChildren: boolean;
  constrainRelativeChildren: boolean;
  currentEdgeStyle: any;
  currentVertexStyle: any;
  dateFormatCache: any;
  defaultEdgeLength: number;
  defaultEdgeStyle:any;
  defaultGraphBackground: string;
  defaultJumpSize: number;
  defaultPageBackgroundColor: string;
  defaultPageBorderColor: string;
  defaultPageVisible: boolean;
  defaultScrollbars: boolean;
  defaultThemeName: string;
  defaultThemes: any;
  defaultVertexStyle: any;
  domainPathUrl: string;
  domainUrl: string;
  edgeMode: boolean;
  fileSupport: any;
  firstClickSource: any;
  firstClickState: any;
  gridSize: number;
  layoutManager: mxLayoutManager;
  lightbox: boolean;
  lineJumpsEnabled: boolean;
  linkPolicy: string; //TODO Create enum
  linkTarget: string; //TODO create enum
  maxFitScale: any | null;
  minFitScale: any | null;
  placeholderPattern: RegExp;
  resetEdgesOnConnect: boolean;
  scrollTileSize: mxRectangle;
  start: any;
  themes: any;
  tolerance: number;
  touchStyle: any;
  transparentBackground: boolean;
  
  constructor(container, model, renderHint, stylesheet, themes)
  
  addClickHandler(highlight, beforeClick, onClick): void;
  addText(x: number, y: number, state: any);
  bytesToString(arr: any[]);
  cellLabelChanged(cell: mxCell, value: any, autoSize): void;
  cellsRemoved(cells: mxCell[])
  click(me): void;
  compress(data);
  connectVertex(source, direction, length, evt, forceClone, ignoreCellAt);
  convertValueToString(cell: mxCell);
  createCurrentEdgeStyle();
  createGroupCell();
  createLayersDialog();
  createLinkForHint(link: string, label: string);
  createPreviewShape(bounds: mxRectangle);
  createSvgCanvas(node: HTMLElement);
  createSvgImage(w: number, h: number, data: any);
  createSvgImageExport();
  createTargetVertex(evt: any, source: any)
  dblClick(evt, cell: mxCell);
  decompress(data: any);
  deleteColumn(table: any, index: number): void;
  deleteRow(table: any, index: number): void;
  distributeCells(horizontal: boolean, cells?: mxCell[])
  duplicateCells(cells?: mxCell[], append?: boolean);
  encodeCells(cells: mxCell[]);
  fireMouseEvent(evtName: string, me: any, sender: any);
  flipEdge(edge: mxCell): void;
  foldCells(collapse: boolean, recurse: boolean, cells: mxCell[], checkFoldable, evt)
  formatDate(date: Date, mask: any, utc: any);
  getAbsoluteUrl(url: string);
  getAllCells(x: number, y:number, width: number, height: number, parent: mxCell, result: any);
  getAllConnectionConstraints(terminal: any, source: any);
  getCells(initialCell: any);
  getCellStyle(cell: mxCell);
  getCursorForCell(cell: mxCell);
  getDropTarget(cells: mxCell[], evt: any, cell: mxCell, clone: boolean);
  getFreeInsertPoint();
  getGlobalVariable(name: string);
  getGuideStates();
  getIndexableText();
  getInsertPoint()
  getLabel(cell: mxCell);
  getLabelValue(state: mxCellState);
  getLinkForCell(cell: mxCell);
  getLinksForState(state: mxCellState);
  getPageLayout();
  getPagePadding()
  getPageSize()
  getParentByName(node: any, name: string, stopAt: any);
  getPreferredSizeForCell(cell: mxCell);
  getRubberband()
  getSelectedElement()
  getSvg(background: any, scale: any, border: any, nocrop: any, crisp: any, ignoreSelection: boolean, showText: boolean);
  getSwimlaneAt(x,y, parent: mxCell);
  getTooltipForCell(cell: mxCell);
  importGraphModel(node, dx: number, dy: number, crop: boolean);
  init(container: any);
  initLayoutManager();
  initTouch();
  insertColumn(table: any, index: number);
  insertImage(newValue: any, w: number, h: number);
  insertLink(value: any);
  insertRow(table:any, index: number);
  isBlankLink(href: string);
  isCellConnectable(cell: mxCell);
  isCellFoldable(cell: mxCell);
  isCellLocked(cell: mxCell);
  isCellResizable(cell: mxCell);
  isCloneEvent(evt: Event);
  isContainer(cell: mxCell);
  isExtendParentsOnAdd(cell: mxCell);
  isExternalProtocol(href: string);
  isHtmlLabel(cell: mxCell);
  isIgnoreTerminalEvent(evt: Event);
  isLabelMovable(cell: mxCell);
  isMouseInsertPoint(): boolean;
  isMoveCellsEvent()
  isOutlineConnectEvent(me: any);
  isPageLink(href: string): boolean;
  isRelativeUrl(url: string);
  isReplacePlaceholders(cell: mxCell);
  isSelectOnPopup(me: any);
  isSplitTarget(target: any, cells: mxCell[], evt: Event);
  isStateIgnored(state: mxCellState, source: any);
  isToggleEvent(evt: Event);
  isTransparentClickEvent(evt: Event);
  isValidDropTarget(cell: mxCell);
  isValidRoot(cell: mxCell);
  isValidSource(cell: mxCell, me?: mxEventSource): any;
  labelLinkClicked(state: mxCellState, elt: HTMLElement, evt: Event);
  loadStylesheet();
  mouseDown(sender: any, me: any);
  mouseMove(): void;
  moveSiblings(state: mxCellState, parent: mxCell, dx: number, dy: number);
  pasteHtmlAtCaret(html: any);
  processChange(change: any);
  removeCellsAfterUngroup(cells: mxCell[])
  replacePlaceholders(cell: mxCell, str: string);
  reset();
  resizeParentStacks(parent: mxCell, layout: any, dx: number, dy: number);
  sanitizeHtml(value: any, editing: boolean);
  selectAll(parent: mxCell);
  selectCells(verticies: mxCell[], edges: mxCell[], parent: mxCell)
  selectCellsForConnectVertex(cells: mxCell[], evt: Event, hoverIcons: any);
  selectNode(node: any);
  selectRegion(rect: mxRectangle, evt: Event);
  setAttributeForCell(cell: mxCell, attributeNmae: string, attributeValue: any): void;
  setGridSize(value: number): void;
  setLinkForCell(cell: mxCell, link: string);
  setTooltipForCell(cell: mxCell, link: string);
  shouldRemoveCellsFromParent(parent: mxCell, cells: mxCell[], evt: Event): boolean;
  stringToBytes(str: string);
  turnShapes(cells: mxCell[]);
  updateAlternateBounds(cell: mxCell, geo: any, willCollapse: boolean): void;
  updateMouseEvent(me: any);
  updatePlaceholders();
  zapGremlins(text: string);
  zoom(factor: any, center: any);
  zoomIn(): void;
  zoomOut(): void;
}