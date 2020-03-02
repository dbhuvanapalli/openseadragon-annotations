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
  getRect(x, y, width, height) {
    return [
      'rect',
      {
        'fill': 'none',
        'x': `${x}`,
        'y': `${y}`,
        'width': `${width}`,
        'height': `${height}`,
        'stroke': 'red',
        'stroke-width': 3,
        'stroke-linejoin': 'round',
        'stroke-linecap': 'round',
        'vector-effect': 'non-scaling-stroke',
      },
    ];
  },
  getCircle(x, y, radius) {
    return [
      'circle',
      {
        'fill': 'none',
        'cx': `${x}`,
        'cy': `${y}`,
        'r': `${radius}`,
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
        'r': '1px',
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
    case 'RECTANGLE':
      Dispatcher.dispatch({
        type: 'ACTIVITY_UPDATE',
        inProgress: true,
      });
      Dispatcher.dispatch({
        type: 'ANNOTATIONS_CREATE',
        annotation: shapesFactory.getRect(x, y, width, height),
      });
    case 'CIRCLE':
      Dispatcher.dispatch({
        type: 'ACTIVITY_UPDATE',
        inProgress: true,
      });
      Dispatcher.dispatch({
        type: 'ANNOTATIONS_CREATE',
        annotation: shapesFactory.getCircle(x, y, radius),
      });
    case 'POINT':
      Dispatcher.dispatch({
        type: 'ACTIVITY_UPDATE',
        inProgress: true,
      });
      Dispatcher.dispatch({
        type: 'ANNOTATIONS_CREATE',
        annotation: shapesFactory.getpoint(x, y),
      });
      break;

    default:
      break;

  }
}
