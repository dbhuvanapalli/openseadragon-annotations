const shapesFactory = {
  getPath(x, y) {
    return [
      'path',
      {
        'fill': 'none',
        'd': `M${x} ${y}`,
        'stroke': 'red',
        'stroke-width': 3,
        'stroke-linejoin': 'round',
        'stroke-linecap': 'round',
        'vector-effect': 'non-scaling-stroke',
      },
    ];
  },
  getRect(x, y) {
    return [
      'rect',
      {
        'fill': 'none',
        'x': `${x}`,
        'y': `${y}`,
        'stroke': 'red',
        'stroke-width': 3,
        'stroke-linejoin': 'round',
        'stroke-linecap': 'round',
        'vector-effect': 'non-scaling-stroke',
      },
    ];
  },
  getCircle(x, y) {
    return [
      'circle',
      {
        'fill': 'none',
        'cx': `${x}`,
        'cy': `${y}`,
        'stroke': 'red',
        'stroke-width': 3,
        'stroke-linejoin': 'round',
        'stroke-linecap': 'round',
        'vector-effect': 'non-scaling-stroke',
      },
    ];
  },
  getPoint(x, y) {
    return [
      'circle',
      {
        'fill': 'none',
        'cx': `${x}`,
        'cy': `${y}`,
        'radius': '1px',
        'stroke': 'red',
        'stroke-width': 3,
        'stroke-linejoin': 'round',
        'stroke-linecap': 'round',
        'vector-effect': 'non-scaling-stroke',
      },
    ];
  },
};

export default function press(x, y, Dispatcher, Store) {
  switch (Store.getMode()) {

    case 'FREEHAND':
      Dispatcher.dispatch({
        type: 'ACTIVITY_UPDATE',
        inProgress: true,
      });
      Dispatcher.dispatch({
        type: 'ANNOTATIONS_CREATE',
        annotation: shapesFactory.getPath(x, y),
      });
      break;
    case 'RECTANGLE':
      Dispatcher.dispatch({
        type: 'ACTIVITY_UPDATE',
        inProgress: true,
      });
      Dispatcher.dispatch({
        type: 'ANNOTATIONS_CREATE',
        annotation: shapesFactory.getRect(x, y),
      });
      break;
    case 'CIRCLE':
      Dispatcher.dispatch({
        type: 'ACTIVITY_UPDATE',
        inProgress: true,
      });
      Dispatcher.dispatch({
        type: 'ANNOTATIONS_CREATE',
        annotation: shapesFactory.getCircle(x, y),
      });
      break;
    case 'POINT':
      Dispatcher.dispatch({
        type: 'ACTIVITY_UPDATE',
        inProgress: true,
      });
      Dispatcher.dispatch({
        type: 'ANNOTATIONS_CREATE',
        annotation: shapesFactory.getCircle(x, y),
      });
      Dispatcher.dispatch({
        type: 'ACTIVITY_UPDATE',
        inProgress: false,
      });
      break;

    default:
      break;

  }
}
