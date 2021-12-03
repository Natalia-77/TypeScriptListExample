import { ProductList, ProductTypes, ProdState } from "../../types/product";

const initialState : ProdState = 
{
    products: [],
}

export const prodReducer = (state = initialState, action:ProductList) : ProdState => 
{
    switch(action.type) 
    {
        case ProductTypes.GET_PRODUCTS: 
        {
            return {
                products: [...action.payload]
            }
        }
        default : 
        {
            return state;
        }
    }
}