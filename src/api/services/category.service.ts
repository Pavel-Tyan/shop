import { CategoryDto } from "../@types/api";
import { api } from "../instance";

class CategoryService {
  private static readonly URL_SEGMENT = "/categories";

  async getCategories() {
    const res = await api.get(CategoryService.URL_SEGMENT);
    return res.data;
  }

  async getCategoryById(id: number) {
    const res = await api.get(`${CategoryService.URL_SEGMENT}/${id}`);
    return res.data;
  }

  async postCategory({ params, config }: AxiosRequestConfig<CategoryDto>) {
    const res = await api.post(CategoryService.URL_SEGMENT, params, config);
    return res.data;
  }

  async updateCategory({ params, config }: AxiosRequestConfig<CategoryDto>) {
    const res = await api.patch(CategoryService.URL_SEGMENT, params, config);
    return res.data;
  }

  async deleteCategoryById(id: number) {
    const res = await api.delete(`${CategoryService.URL_SEGMENT}/${id}`);
    return res.data;
  }
}

export default new CategoryService();
