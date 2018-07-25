import {mxCell, mxRectangle} from "./mxClient";


export declare class Sidebar {
    constructor(editorUi: any, container?: any);
    
    init(): void;
    
    container: HTMLDivElement;
    /**
     * sets the image displayed when collapsed
     */
    collapsedImage: string;
    
    /**
     * sets the image displayed when expanded
     */
    expandedImage: string;
    
    /**
     * Sets the tooltip image.
     */
    tooltipImage: string;
    
    /**
     *
     */
    searchImage: string;
    
    /**
     * set the border size for the drag preview
     */
    dragPreviewBorder: number;
    
    /**
     * Specifies if tooltips should be visible. Default is true.
     */
    enableTooltips: boolean;
    
    /**
     * Specifies the delay for the tooltip. Default is 16 px.
     */
    tooltipBorder: number;
    
    /**
     * Specifies the delay for the tooltip. Default is 300 ms.
     */
    tooltipDelay: number;
    
    /**
     * Specifies the delay for the drop target icons. Default is 200 ms.
     */
    dropTargetDelay: number;
    
    /**
     * Specifies the URL of the gear image.
     */
    gearImage: string;
    
    /**
     * Specifies the width of the thumbnails.
     */
    thumbWidth: number;
    
    /**
     * Specifies the height of the thumbnails.
     */
    thumbHeight: number;
    
    /**
     * Specifies the padding for the thumbnails. Default is 3.
     */
    thumbPadding: number;
    
    /**
     * Specifies the delay for the tooltip. Default is 2 px.
     */
    thumbBorder: number;
    
    /**
     * Specifies the size of the sidebar titles.
     */
    sidebarTitleSize: number;
    
    /**
     * Specifies if titles in the sidebar should be enabled.
     */
    sidebarTitles: boolean;
    
    /**
     * Specifies if titles in the tooltips should be enabled.
     */
    tooltipTitles: boolean;
    
    /**
     * Specifies max width of the tooltips
     */
    maxTooltipWidth: number;
    
    /**
     * Specifies max height of the tooltips
     */
    maxTooltipHeight: number;
    
    /**
     * Specifies if stencil files should be loaded and added to the search index
     * when stencil palettes are added. If this is false then the stencil files
     * are lazy-loaded when the palette is shown.
     */
    addStencilsToIndex: boolean;
    
    /**
     * Specifies the width for clipart images. Default is 80.
     */
    defaultImageWidth;
    
    /**
     * Specifies the height for clipart images. Default is 80.
     */
    defaultImageHeight: number;
    triangleUp: string;
    triangleRight: string;
    triangleDown: string;
    triangleLeft: string;
    refreshTarget: string;
    roundDrop: string;
    
    /**
     * Adds all palettes to the sidebar.
     */
    getTooltipOffset()
    
    
    /**
     * Adds all palettes to the sidebar.
     */
    showTooltip(elt: HTMLElement, cells: mxCell[], w: number, h: number, title: string, showLabel: boolean): void;
    
    /**
     * Hides the current tooltip.
     */
    hideTooltip()
    
    
    /**
     * Hides the current tooltip.
     */
    addDataEntry(tags: string[], width: number, height: number, title: string, data: any)
    
    
    /**
     * Hides the current tooltip.
     */
    addEntry(tags: string[], fn: Function)
    
    
    /**
     * Adds shape search UI.
     */
    searchEntries(searchTerms: string, count: number, page: any, success: Function, error: Function)
    
    
    /**
     * Adds shape search UI.
     */
    filterTags(tags: string[]);
    
    
    /**
     * Adds the general palette to the sidebar.
     */
    cloneCell(cell: mxCell, value: any)
    
    
    /**
     * Adds shape search UI.
     */
    addSearchPalette(expand: boolean)
    
    
    /**
     * Adds the general palette to the sidebar.
     */
    insertSearchHint(div: HTMLDivElement, searchTerm: string, count: number, page: number, results: string, len: number, more: boolean, terms: string[])
    
    
    /**
     * Adds the general palette to the sidebar.
     */
    addGeneralPalette(expand: boolean)
    
    
    /**
     * Adds the general palette to the sidebar.
     */
    addBasicPalette(dir: string)
    
    
    /**
     * Adds the general palette to the sidebar.
     */
    addMiscPalette(expand: boolean)
    
    /**
     * Adds the container palette to the sidebar.
     */
    addAdvancedPalette(expand: boolean)
    
    
    /**
     * Adds the container palette to the sidebar.
     */
    createAdvancedShapes();
    
    
    /**
     * Adds the general palette to the sidebar.
     */
    addUmlPalette(expand: boolean)
    
    
    /**
     * Adds the BPMN library to the sidebar.
     */
    addBpmnPalette(dir: string, expand: boolean)
    
    
    /**
     * Creates and returns the given title element.
     */
    createTitle(label: string)
    
    
    /**
     * Creates a thumbnail for the given cells.
     */
    createThumb(cells: mxCell, width: number, height: number, parent: any, title: string, showLabel: boolean, showTitle: boolean, realWidth: number, realHeight: number);
    
    
    /**
     * Creates and returns a new palette item for the given image.
     */
    createItem(cells: mxCell[], title: string, showLabel: boolean, showTitle: boolean, width: number, height: number, allowCellsInserted: boolean);
    
    
    /**
     * Creates a drop handler for inserting the given cells.
     */
    updateShapes(source: any, targets: any)
    
    
    /**
     * Creates a drop handler for inserting the given cells.
     */
    createDropHandler(cells: mxCell[], allowSplit: boolean, allowCellsInserted: boolean, bounds: mxRectangle)
    
    
    /**
     * Creates and returns a preview element for the given width and height.
     */
    createDragPreview(width, height)
    
    
    /**
     * Creates a drag source for the given element.
     */
    dropAndConnect(source, targets, direction, dropCellIndex)
    
    
    /**
     * Creates a drag source for the given element.
     */
    getDropAndConnectGeometry(source, target, direction, targets)
    
    
    /**
     * Creates a drag source for the given element.
     */
    createDragSource(elt, dropHandler, preview, cells, bounds)
    
    
    /**
     * Adds a handler for inserting the cell with a single click.
     */
    itemClicked(cells, ds, evt, elt)
    
    
    /**
     * Adds a handler for inserting the cell with a single click.
     */
    addClickHandler(elt, ds, cells)
    
    
    /**
     * Creates a drop handler for inserting the given cells.
     */
    createVertexTemplateEntry(style, width, height, value, title, showLabel, showTitle, tags)
    
    
    /**
     * Creates a drop handler for inserting the given cells.
     */
    createVertexTemplate(style, width, height, value, title, showLabel, showTitle, allowCellsInserted)
    
    
    /**
     * Creates a drop handler for inserting the given cells.
     */
    createVertexTemplateFromData(data, width, height, title, showLabel, showTitle, allowCellsInserted)
    
    
    /**
     * Creates a drop handler for inserting the given cells.
     */
    createVertexTemplateFromCells(cells, width, height, title, showLabel, showTitle, allowCellsInserted)
    
    
    /**
     *
     */
    createEdgeTemplateEntry(style, width, height, value, title, showLabel, tags, allowCellsInserted)
    
    
    /**
     * Creates a drop handler for inserting the given cells.
     */
    createEdgeTemplate(style, width, height, value, title, showLabel, allowCellsInserted)
    
    
    /**
     * Creates a drop handler for inserting the given cells.
     */
    createEdgeTemplateFromCells(cells, width, height, title, showLabel, allowCellsInserted)
    
    
    /**
     * Adds the given palette.
     */
    addPaletteFunctions(id, title, expanded, fns)
    
    
    /**
     * Adds the given palette.
     */
    addPalette(id, title, expanded, onInit)
    
    
    /**
     * Create the given title element.
     */
    addFoldingHandler(title, content, funct)
    
    
    /**
     * Removes the palette for the given ID.
     */
    removePalette(id)
    
    
    /**
     * Adds the given image palette.
     */
    addImagePalette(id, title, prefix, postfix, items, titles, tags)
    
    
    /**
     * Creates the array of tags for the given stencil. Duplicates are allowed and will be filtered out later.
     */
    getTagsForStencil(packageName, stencilName, moreTags)
    
    
    /**
     * Adds the given stencil palette.
     */
    addStencilPalette(id, title, stencilFile, style, ignore, onInit, scale, tags, customFns)
    
    destroy()
  }

