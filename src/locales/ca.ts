import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "Cancel.la el dibuix",
    text: "Cancel.la",
  },
  finish: {
    title: "Acaba el dibuix",
    text: "Acaba",
  },
  undo: {
    title: "Elimina l'últim punt dibuxat",
    text: "Elimina l'últim punt",
  },
  buttons: {
    polyline: "Dibuixa una polilínia",
    polygon: "Dibuixa un polígon",
    rectangle: "Dibuixa un rectangle",
    circle: "Dibuixa un cercle",
    marker: "Dibuixa un marcador",
    circlemarker: "Dibuixa un marcador circular",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "Clic y arrosega per dibuxar un cercle",
    },
    radius: "Radi",
  },
  circlemarker: {
    tooltip: {
      start: "Fes un clic al mapa per situar el marcador circular",
    },
  },
  marker: {
    tooltip: {
      start: "Fes un clic al mapa para situar el marcador",
    },
  },
  polygon: {
    tooltip: {
      start: "Fes un clic per començar a dibuixar la forma",
      cont: "Fes un clic per continuar dibuixant la forma",
      end: "Fes un clic al primer punt per tancar la forma",
    },
  },
  polyline: {
    error: "<strong>Error:</strong> les línies no es poden creuar",
    tooltip: {
      start: "Fes un clic per començar a dibuixar la línia",
      cont: "Fes un clic per continuar dibuixant la línia",
      end: "Fes un clic a l'últim punt per acabar la línia",
    },
  },
  rectangle: {
    tooltip: {
      start: "Fes clic i arrossega per dibuixar un rectàngle",
    },
  },
  simpleshape: {
    tooltip: {
      end: "Acaba el clic per finalitzar el dibuix",
    },
  },
};

const editToolbar: EditToolbar = {
  actions: {
    save: {
      title: "Guarda els canvis",
      text: "Guarda",
    },
    cancel: {
      title: "Cancel.la l'edició, descarta tots els canvis",
      text: "Cancel.la",
    },
    clearAll: {
      title: "Neteja totes les capes",
      text: "Netejar tot",
    },
  },
  buttons: {
    edit: "Editar capes",
    editDisabled: "No hi han capes per editar",
    remove: "Eliminar capes",
    removeDisabled: "No hi han capes per eliminar",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "Arrossega el marcador per editar la forma",
      subtext: "Fes clic a 'Cancel.la' per retrocedir els canvis",
    },
  },
  remove: {
    tooltip: {
      text: "Fes clic a una forma per eliminar-la",
    },
  },
};

export default {
  draw: {
    toolbar: drawToolbar,
    handlers: drawHandlers,
  },
  edit: {
    toolbar: editToolbar,
    handlers: editHandlers,
  },
};
