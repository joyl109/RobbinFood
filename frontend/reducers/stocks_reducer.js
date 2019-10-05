import { RECEIVE_ONE_STOCK, RECEIVE_MANY_STOCKS, RECEIVE_ALL_STOCKS } from "../actions/stock_actions";

export default (state = {}, action) => {
  debugger 
  switch (action.type) {
    case RECEIVE_ONE_STOCK:
      return Object.assign({}, state, action.stock);
    case RECEIVE_MANY_STOCKS:
      return Object.assign({}, state, action.stocks)
    case RECEIVE_ALL_STOCKS:
      return Object.assign({}, state, action.stocks)
    default:
      return state;
  }
};