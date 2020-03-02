import Control from './Control';
import freehandGroupHover from '../../img/freehand_grouphover.png';
import freehandHover from '../../img/freehand_hover.png';
import freehandPressed from '../../img/freehand_pressed.png';
import freehandRest from '../../img/freehand_rest.png';

export default class Freehand extends Control {
  constructor() {
    super({
      Tooltip: 'Freehand',
      srcRest: freehandRest,
      srcGroup: freehandGroupHover,
      srcHover: freehandHover,
      srcDown: freehandPressed,
    });
  }
}
