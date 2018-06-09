import { getSelectedDocument } from 'sketch/dom';
import UI from 'sketch/ui';
import camelCase from 'camelcase';

const toUpperCamel = context => {
  const document = getSelectedDocument();

  if (!document) {
    return;
  }

  const symbols = document.getSymbols();
  symbols.forEach(symbol => {
    // スラッシュで区切る
    const words = symbol.name.split('/');
    const newWords = words.map(word => {
      return camelCase(word, { pascalCase: true });
    });
    symbol.name = newWords.join('/');
  });

  UI.message('Finished!');
};

export default toUpperCamel;
