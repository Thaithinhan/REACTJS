import { axiosClient } from "./AxiosClient";

class ProductAPI {
  static getAllProducts() {
    const url = "products";
    return axiosClient.get(url, {});
  }

  //  static createProduct(params){

  //  }

  // static editProduct(id){

  // }

  //   static deleteProduct(id) {}
}

export default ProductAPI;
