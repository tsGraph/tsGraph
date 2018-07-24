import {mxEventSource} from "./mxClient";

declare module 'tsgraph' {
  export class Editor extends mxEventSource {
    actualSizeLargeImage;
    appName;
    args;
    autosave;
    backgroundPageShape;
    bg;
    cancefalse;
    cancelFirst;
    cancetrue;
    checkmarkImage;
    chromeless;
    closeLargeImage;
    consumer;
    container;
    createSvgGrigridColor;
    createditorUi;
    ctrlKey;
    dialect;
    dialogImg;
    done;
    editBlankUrl;
    editLargeImage;
    editable;
    editorWindow;
    enabled;
    execut;
    extendCanvas;
    filename;
    getBackgroundPageBound;
    getFilename;
    getGraphBound;
    getOrCreateFilename;
    getPositioleft;
    getStatus;
    graph;
    graphChangeListener;
    gridColor;
    gridImage;
    gridSize;
    gridSteps;
    helpImage;
    horizontalPageBreaks;
    ini;
    initStencilRegistr;
    initialTopSpacing;
    isExternalProtocohref;
    layersImage;
    layersLargeImage;
    maximizeImage;
    message;
    minGridSize;
    minPageBreakDist;
    modified;
    nextImage;
    nextLargeImage;
    onDialogCloscancel;
    onDialogClose;
    originalNoForeignObject;
    pageBreakColor;
    pageBreakDashed;
    pageCounter;
    pageFormat;
    pageScale;
    previousImage;
    previousLargeImage;
    printLargeImage;
    producer;
    readGraphStatnode;
    resetGrap;
    resizeListener;
    scale;
    setModifietrue;
    setStatus;
    shiftPreview1;
    status;
    transparentImage;
    undoListener;
    undoManager;
    updateGraphComponent;
    useLocalStorage;
    useScrollbarsForPanning;
    validateBackgroundStyle;
    verticalPageBreaks;
    view;
    zIndex;
    zoomFitImage;
    zoomInImage;
    zoomInLargeImage;
    zoomOutImage;
    zoomOutLargeImage;
    
    constructor(chromeless?, themes?, model?, graph?, editable?)
    
    init()
    
    setAutosave(value)
    
    getEditBlankUrl(params)
    
    editAsNew(xml, title)
    
    createGraph(themes, model)
    
    resetGraph()
    
    readGraphState(node)
    
    setGraphXml(node)
    
    getGraphXml(ignoreSelection)
    
    updateGraphComponents()
    
    setModified(value)
    
    setFilename(value)
    
    createUndoManager()
    
    initStencilRegistry()
    
    destroy()
  }
}