import UI from 'sketch/ui';
import upperCaseFirst from 'upper-case-first';

const upcaseFirst = () => {
  UI.message(upperCaseFirst('hello world!'));
};

export default upcaseFirst;
