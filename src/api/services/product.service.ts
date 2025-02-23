import { ProductDto } from "../@types/api";
import { api } from "../instance";

class ProductService {
  private static readonly URL_SEGMENT = "/products";

  async getProducts(limit: number, offset: number) {
    const res = await api.get(
      `${ProductService.URL_SEGMENT}?limit=${limit}&offset=${offset}`
    );
    return res.data;
  }

  async getProductById(id: number) {
    const res = await api.get(`${ProductService.URL_SEGMENT}/${id}`);
    return res.data;
  }

  async postProduct({ params, config }: AxiosRequestConfig<ProductDto>) {
    const res = await api.post(ProductService.URL_SEGMENT, params, config);
    return res.data;
  }

  async updateProduct(
    id: number,
    { params, config }: AxiosRequestConfig<ProductDto>
  ) {
    const res = await api.patch(
      `${ProductService.URL_SEGMENT}/${id}`,
      params,
      config
    );
    return res.data;
  }

  async deleteProduct(id: number) {
    const res = await api.delete(`${ProductService.URL_SEGMENT}/${id}`);
    return res.data;
  }
}

export default new ProductService();
