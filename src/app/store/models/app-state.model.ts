import { ShoppingItem } from './shopping-item.model';
import { ShoppingState } from './../reducers/shopping.reducer';

export interface AppState {
    // store only
    // readonly shopping: Array<ShoppingItem>;

    // with efects
    readonly shopping: ShoppingState;
}

