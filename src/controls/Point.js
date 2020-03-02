import Control from './Control';
import pointGroupHover from '../../img/point_grouphover.png';
import pointHover from '../../img/point_hover.png';
import pointPressed from '../../img/point_pressed.png';
import pointRest from '../../img/point_rest.png';

export default class Point extends Control {
  constructor() {
    super({
      Tooltip: 'Point',
      srcRest: pointRest,
      srcGroup: pointGroupHover,
      srcHover: pointHover,
      srcDown: pointPressed,
    });
  }
}