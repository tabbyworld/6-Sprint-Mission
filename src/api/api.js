import instance from "./axios";

export async function getProductList(id, count, sort) {
  try {
    const res = await instance.get(
      `/products?page=${id}&pageSize=${count}&orderBy=${sort}`
    );
    return res.data;
  } catch (e) {
    console.error(e);
  }
}
