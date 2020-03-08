export default function release(x, y, Dispatcher, Store) {
  switch (Store.getMode()) {

    case 'FREEHAND':
      if (Store.isActivityInProgress()) {
        const last = Store.getLast();
        if (last && last[0] === 'path') {
          const d = last[1].d;
          Dispatcher.dispatch({
            type: 'ANNOTATIONS_UPDATE_LAST',
            update: { d: `${d}Z` },
          });
        }
      };
      Dispatcher.dispatch({
        type: 'ACTIVITY_UPDATE',
        inProgress: false,
      });
      break;
      
    case 'RECTANGLE':
      if (Store.isActivityInProgress()) {
        const last = Store.getLast();
        if (last && last[0] === 'rect') {
          const width = Math.abs(parseFloat(last[1].x) -  parseFloat(`${x}`));
          const height = Math.abs(parseFloat(last[1].y) - parseFloat(`${y}`));
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
          const r = Math.abs(parseFloat(last[1].cx) - parseFloat(`${x}`));
          Dispatcher.dispatch({
            type: 'ANNOTATIONS_UPDATE_LAST',
            update: {r: `${r}`},
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
