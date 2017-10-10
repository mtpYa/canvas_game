import mainloop from './main-loop';
import { setVisible, setInvisible } from './utils';
import elements from './dom-elements';

export function startGame (event) {
  // setInvisible(elements.gameMenu);
  // setVisible(elements.gameField);
  // mainloop(event.target.classList.contains('one-player') ? 1 : 2);
  mainloop();
}