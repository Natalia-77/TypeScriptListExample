import { Product, ProductList } from "../../types/product";


  const ProductItem = ( id:number , name:string, description:string, onstock:boolean, price : Product) => {
    const res: boolean = onstock.valueOf();
    const result :string=res?"stock":"unstock;"
    return
    <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{description}</td>                  
                  <td>{result}</td>
                  <td>{price}</td>
                </tr>
};
export default ProductItem;