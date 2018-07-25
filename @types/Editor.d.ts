import {mxEventSource} from "./mxClient";

export declare class Editor extends mxEventSource {
  actualSizeLargeImage;
  appName;
  autosave;
  cancelFirst;
  chromeless;
  closeLargeImage;
  ctrlKey;
  editable;
  editBlankUrl;
  editLargeImage;
  editorWindow;
  enabled;
  execut;
  extendCanvas;
  filename;
  graph;
  helpImage;
  initialTopSpacing;
  layersImage;
  layersLargeImage;
  maximizeImage;
  modified;
  nextImage;
  nextLargeImage;
  originalNoForeignObject;
  pageCounter;
  previousImage;
  previousLargeImage;
  printLargeImage;
  status;
  transparentImage;
  undoManager;
  useLocalStorage;
  zoomFitImage;
  zoomInImage;
  zoomInLargeImage;
  zoomOutImage;
  zoomOutLargeImage;
  
  constructor(chromeless?, themes?, model?, graph?, editable?)
  
  init()
  
  createGraph(themes, model)
  
  createUndoManager()
  
  destroy()
  
  editAsNew(xml, title)
  
  getEditBlankUrl(params)
  
  getFilename();
  
  getGraphXml(ignoreSelection: boolean);
  
  getOrCreateFilename();
  
  getStatus();
  
  graphChangeListener(sender: any, eventObject: any): void;
  
  initStencilRegistry()
  
  readGraphState(node)
  
  resetGraph(): void;
  
  setAutosave(value)
  
  setFilename(value)
  
  setGraphXml(node)
  
  setModified(value)
  
  setStatus(value): void;
  
  undoListener(sender: any, evt: any): void;
  
  updateGraphComponents(): void;
}
