import Control from './Control';
import rectGroupHover from '../../img/rect_grouphover.png';
import rectHover from '../../img/rect_hover.png';
import rectPressed from '../../img/rect_pressed.png';
import rectRest from '../../img/rect_rest.png';

export default class Rectangle extends Control {
  constructor() {
    super({
      Tooltip: 'Rectangle',
      srcRest: rectRest,
      srcGroup: rectGroupHover,
      srcHover: rectHover,
      srcDown: rectPressed,
    });
  }
}