import instance from "./api";


export async function getProducts() {
    const {data} = await instance.get("/products");

    return data;
}

export async function getProductById(id: string) {
    const {data} = await instance.get(`/products/${id}`);

    return data;
}


