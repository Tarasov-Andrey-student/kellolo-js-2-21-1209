import Basket from './basket';
import Catalog from './Catalog';
import SearchController from './search.js';

export default () => {
    let SearchController = new SearchController();
    let basket = new Basket();
    let catalog = new Catalog(basket, searchController);
}