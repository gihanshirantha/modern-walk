"use client";
import Link from "next/link";
import Header from "../Components/Header";
import ProductCard from "../Components/ProductCard";

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
      <section>
        <div className="container mx-auto pb-10">
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
      {/* Category section */}
      <section>
        <div className="container mx-auto pb-10">
          <h1 className="font-bold text-3xl pb-10">Categories</h1>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-[30px]
        max-w-sm mx-auto md:max-w-none md:mx-0"
          >
            <Link href="/mensclothing">
              <div className="bg-[#2BD9AF] shadow-xl  h-[200px] rounded-3xl pt-20 ">
                <h1 className=" text-3xl font-bold text-white text-center ">
                  Men's Clothing
                </h1>
              </div>
            </Link>
            <Link href="/womensclothing">
              <div className="bg-[#FF5E84] shadow-xl h-[200px] rounded-3xl pt-20 ">
                <h1 className=" text-3xl font-bold text-white text-center ">
                  Women's Clothing
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
