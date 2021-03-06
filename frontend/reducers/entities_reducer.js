import { combineReducers } from "redux";

import users from "./user_reducer";
import stocks from "./stocks_reducer";
import news from "./news_reducer"
import watchlists from "./watchlist_reducer"
import transactions from "./transaction_reducer"
import ownedstocks from "./owned_stocks_reducer"
import charts from "./charts_reducer"
export default combineReducers({
  users,
  stocks,
  news,
  watchlists,
  transactions,
  ownedstocks,
  charts
});
