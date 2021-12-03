export interface Product 
{
    id: number;
    name:string;
    description: string;
    onstock: boolean;
    price: number;
}

export interface ProdState {   
    products : Product [];
}

export enum ProductTypes {
    GET_PRODUCTS = 'GET_PRODUCTS'    
}

interface GetProductsAction {
    type: ProductTypes.GET_PRODUCTS;
    payload : Product [];    
}

export type ProductList = GetProductsAction;