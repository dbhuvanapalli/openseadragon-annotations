import Control from './Control';
import circleGroupHover from '../../img/circle_grouphover.png';
import circleHover from '../../img/circle_hover.png';
import circlePressed from '../../img/circle_pressed.png';
import circleRest from '../../img/circle_rest.png';

export default class Circle extends Control {
  constructor() {
    super({
      Tooltip: 'Circle',
      srcRest: circleRest,
      srcGroup: circleGroupHover,
      srcHover: circleHover,
      srcDown: circlePressed,
    });
  }
}