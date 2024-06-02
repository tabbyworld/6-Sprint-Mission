import instance from "./axios";

export async function getProductList(id) {
  try {
    const res = await instance.get(`/products?page=${id}&pageSize=10`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
}
