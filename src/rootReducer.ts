import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

import client from "./graphqlClient";
import { IRouterReducer } from "./interfaces";
import { default as cart, ICartReducer } from "./modules/cart/reducer";
import { default as catalog, ICatalogReducer } from "./modules/catalog/reducer";
import { default as product, IProductReducer } from "./modules/product/reducer";

export interface IRootReducer {
  apollo: {};
  router: IRouterReducer;
  catalog: ICatalogReducer;
  product: IProductReducer;
  cart: ICartReducer;
}

const apollo = client.reducer();
const router = routerReducer;

const rootReducers = combineReducers({
  apollo,
  catalog,
  product,
  cart,
  router
});

export default rootReducers;
