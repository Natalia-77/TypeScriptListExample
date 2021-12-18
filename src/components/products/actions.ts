import { ProductActionTypes, ISearchProduct, ProductAction, IResponseServer, IFetchProductErrorResponse } from "./types";
import { Dispatch } from "react";
import http_common from "../../http_common";
import axios, { AxiosError } from "axios";

export const ProductFetchActions = (searchData: ISearchProduct) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            const responce = await http_common.get<IResponseServer>("/api/products", { params: searchData });
            const { current_page, last_page, total, data } = responce.data;
            
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCTS,
                payload: {
                    current_page: current_page,
                    last_page: last_page,
                    total: total,
                    product: data
                    

                }
            });
            
            return Promise.resolve();
        }
        catch (errors) {
            if (axios.isAxiosError(errors)) {

                const servererror = errors as AxiosError<IFetchProductErrorResponse>;
                if (servererror && servererror.response) {
                    dispatch({
                        type: ProductActionTypes.FETCH_ERROR,
                        payload: servererror.response.data.errors
                    })
                    return Promise.reject(servererror.response.data);
                }
            }
            return Promise.reject(errors);
        }
    }
}