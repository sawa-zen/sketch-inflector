import { getSelectedDocument } from 'sketch/dom';
import UI from 'sketch/ui';
import camelCase from 'camelcase';

const syncToLayer = context => {
  const document = getSelectedDocument();

  const renameLayer = object => {
    if (object.type === 'SymbolInstance') {
      const symbolMaster = document.getSymbolMasterWithID(object.symbolId);
      object.name = symbolMaster.name;
    }

    if (!object.layers) {
      return;
    }

    object.layers.forEach(child => {
      renameLayer(child);
    });
  };

  document.pages.forEach(page => {
    renameLayer(page);
  });

  UI.message('Finished!');
};

export default syncToLayer;
