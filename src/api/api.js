import instance from "./axios";

export async function getProductList({ id, count, sort, query = "" }) {
  try {
    const params = new URLSearchParams({
      page: id,
      pageSize: count,
      orderBy: sort,
      keyword: query,
    });

    const res = await instance.get(`/products?${params.toString()}`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
}
