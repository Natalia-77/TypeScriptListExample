export enum ProductActionTypes{

    FETCH_PRODUCTS="FETCH_PRODUCTS",
    FETCH_ERROR="FETCH_ERROR"
}

export interface IProductModel{
    id:number,
    name:string,
    description:string
}

export interface ISearchProduct{
    page:number|string,
    name?:string,
    description?:string
}

export interface IResponseServer{
    current_page:number,
    last_page:number,
    total:number,
    data:Array<IProductModel>
}

export interface ProductState{   
    current_page:number,
    last_page:number,
    total:number,
    product:Array<IProductModel>
}

export interface IFetchProductErrorResponse {
    errors:string 
}

export interface FetchProductAction{
    type: ProductActionTypes.FETCH_PRODUCTS,
    payload:ProductState
}

export interface FetchErrorsAction {
    type: ProductActionTypes.FETCH_ERROR;
    payload: string
  }

export type ProductAction =FetchProductAction | FetchErrorsAction ;

