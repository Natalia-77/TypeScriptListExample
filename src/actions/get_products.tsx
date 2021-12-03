import { ProductList, ProductTypes } from "../types/product";
import { Dispatch } from "redux";

export const GetProdlist = () => async (dispatch: Dispatch<ProductList>) => {
    dispatch({
        type: ProductTypes.GET_PRODUCTS, payload: [
            {
                id: 1,
                name:'Apple',
                description: 'Apple green',
                onstock: true,
                price: 21
            },
            {
                id: 2,
                name:'Banana',
                description: 'Banana baby',
                onstock: true,
                price: 68
            },
            {
                id: 3,
                name:'Tomato',
                description: 'Tomato cherry',
                onstock: false,
                price: 35
            },
            {
                id: 4,
                name:'Onion',
                description: 'Onion white',
                onstock: false,
                price: 8
            }
        ]
    });
}