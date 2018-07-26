import {mxEventSource, mxUndoManager} from "./mxClient";
import {Graph} from "./Graph";

export declare class Editor extends mxEventSource {
  actualSizeLargeImage: string;
  appName: string;
  autosave: boolean;
  cancelFirst: boolean;
  checkmarkImage: string;
  chromeless: boolean;
  closeLargeImage: string;
  ctrlKey: string; //Enum 'Cmd, Ctrl'
  editable: boolean;
  editBlankUrl: string;
  editLargeImage: string;
  editorWindow: any;
  enabled: boolean;
  extendCanvas: boolean;
  filename: string | null;
  graph: Graph;
  helpImage: string;
  initialTopSpacing: number;
  layersImage: string;
  layersLargeImage: string;
  maximizeImage: string;
  modified: boolean;
  nextImage: string;
  nextLargeImage: string;
  originalNoForeignObject: any;
  pageCounter: number;
  previousImage: string;
  previousLargeImage: string;
  printLargeImage: string;
  status: string;
  transparentImage:string;
  undoManager: mxUndoManager;
  useLocalStorage: boolean;
  zoomFitImage: string;
  zoomInImage: string;
  zoomInLargeImage: string;
  zoomOutImage: string;
  zoomOutLargeImage: string;
  
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
