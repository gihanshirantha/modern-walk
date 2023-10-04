"use client";

import Header from "./Components/Header";

export default async function Home() {
  //fetch products

  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  //filter only fashion products
  const filterProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });


  return (
    <main>
      <section className="flex flex-col pb-44">
        <Header />
      </section>
      <section>
        {filterProducts.map((product) => (
          <div key={product.id}>
            <h1>{product.title}</h1>
          </div>
        ))}
      </section>
    </main>
  );
}
