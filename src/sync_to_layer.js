import { getSelectedDocument } from 'sketch/dom';
import UI from 'sketch/ui';
import camelCase from 'camelcase';

const loopLayer = (object, func) => {
  func(object);

  if (!object.layers) {
    return;
  }

  object.layers.forEach(child => {
    loopLayer(child, func);
  });
};

const syncToLayer = context => {
  const document = getSelectedDocument();

  if (!document) {
    return;
  }

  document.pages.forEach(page => {
    loopLayer(page, object => {
      if (object.type === 'SymbolInstance') {
        const symbolMaster = document.getSymbolMasterWithID(object.symbolId);
        object.name = symbolMaster.name;
      }
    });
  });

  UI.message('Finished!');
};

export default syncToLayer;
