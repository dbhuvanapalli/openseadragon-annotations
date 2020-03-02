export default function release(Dispatcher, Store) {
  switch (Store.getMode()) {

    case 'FREEHAND':
      Dispatcher.dispatch({
        type: 'ACTIVITY_UPDATE',
        inProgress: false,
      });
      break;
    case 'RECTANGLE':
      if (Store.isActivityInProgress()) {
        const last = Store.getLast();
        if (last && last[0] === 'rect') {
          const width = Math.abs(last[1].x -  `${x}`);
          const height = Math.abs(last[1].y - `${y}`);
          Dispatcher.dispatch({
            type: 'ANNOTATIONS_UPDATE_LAST',
            update: {width: `${width}`, height: `${height}`},
          });
        }
      };
      Dispatcher.dispatch({
        type: 'ACTIVITY_UPDATE',
        inProgress: false,
      });
      break;
    case 'CIRCLE':
      if (Store.isActivityInProgress()) {
        const last = Store.getLast();
        if (last && last[0] === 'circle') {
          const cx = Math.round((last[1].cx +  `${x}`)/2);
          const cy = Math.round((last[1].cy + `${y}`)/2);
          const r = Math.abs(last[1].cx - cx);
          Dispatcher.dispatch({
            type: 'ANNOTATIONS_UPDATE_LAST',
            update: {cx: `${cx}`, cy: `${cy}`, r: `${r}`},
          });
        }
      };
      Dispatcher.dispatch({
        type: 'ACTIVITY_UPDATE',
        inProgress: false,
      });
      break;
    case 'POINT':
      Dispatcher.dispatch({
        type: 'ACTIVITY_UPDATE',
        inProgress: false,
      });
      break;
    
    default:
      break;

  }
}
