import { getSelectedDocument } from 'sketch/dom';
import UI from 'sketch/ui';
import { plural } from 'pluralize';

const pluralizeParent = context => {
  const document = getSelectedDocument();

  if (!document) {
    return;
  }

  const symbols = document.getSymbols();
  symbols.forEach(symbol => {
    // スラッシュで区切る
    const words = symbol.name.split('/');
    const newWords = words.map((word, index) => {
      const isParent = words.length - index > 1;
      if (isParent) {
        return plural(word);
      }
      return word;
    });
    symbol.name = newWords.join('/');
  });

  UI.message('Finished!');
};

export default pluralizeParent;
