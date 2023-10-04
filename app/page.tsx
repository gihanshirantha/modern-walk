"use client";

import Header from "./Components/Header";
import ProductCard from "./Components/ProductCard";

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
    <main className="bg-[#F5F5F5] ">
      <section className="flex flex-col pb-24 ">
        <Header />
      </section>
      <section className="">
        <div className="container mx-auto">
          <div>
            <h1 className="font-bold text-3xl pb-10">Flash Sale</h1>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[30px]
        max-w-sm mx-auto md:max-w-none md:mx-0"
          >
            {filterProducts.map((products) => (
              <ProductCard product={products} key={products.id} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
