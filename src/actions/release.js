export default function release(Dispatcher, Store) {
  switch (Store.getMode()) {

    case 'FREEHAND':
      Dispatcher.dispatch({
        type: 'ACTIVITY_UPDATE',
        inProgress: false,
      });
      break;
    case 'RECTANGLE':
      Dispatcher.dispatch({
        type: 'ACTIVITY_UPDATE',
        inProgress: false,
      });
      break;
    case 'CIRCLE':
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
