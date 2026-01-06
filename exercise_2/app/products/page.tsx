async function getProducts() {
    const res = await fetch("https://dummyjson.com/products", {
        //   cache: "no-store",
    });

    const data = await res.json();
    return data.products;
}

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.slice(0, 5).map((product: any) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
}
