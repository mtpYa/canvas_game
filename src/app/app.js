import '../style/style.scss';
import { setInvisible, setVisible } from './utils';
import { startGame } from './event-handlers';
import elements from './dom-elements';

setInvisible(elements.preloader);
setVisible(elements.gameMenu);

elements.menu_buttons
  .forEach((btn) => btn.addEventListener('click', startGame));
