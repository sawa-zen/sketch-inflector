import { getSelectedDocument } from 'sketch/dom';
import UI from 'sketch/ui';
import upperCaseFirst from 'upper-case-first';

const upcaseFirst = context => {
  const document = getSelectedDocument();

  if (!document) {
    return;
  }

  const symbols = document.getSymbols();
  symbols.forEach(symbol => {
    // スラッシュで区切る
    const words = symbol.name.split('/');
    const newWords = words.map(word => {
      return upperCaseFirst(word);
    });
    symbol.name = newWords.join('/');
  });

  UI.message('Finished!');
};

export default upcaseFirst;
