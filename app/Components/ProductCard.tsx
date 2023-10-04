import Link from "next/link";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, image, description, title, price,category } = product;
  return (
    <div className="rounded-3xl border-[e4e4e4] bg-white ">
      <div
        className=" h-[300px] p-6 mb-4 relative overflow-hidden group transition rounded-md"
      >
        <Link href={`/products/${id}`}>
          <h2 className="font-semibold  text-center">{title}</h2>
        </Link>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200] mx-auto flex justify-center items-center">
            <img
              src={image}
              alt=""
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
            />
          </div>
        </div>
      </div>
      <div className={`text-center rounded-3xl p-6 ${category === "men's clothing" ? 'bg-[#2BD9AF]' : 'bg-[#FF5E84]'}`}>
        
        <div className="font-bold text-2xl text-[#0E42FD]">$ {price}</div>
        <div className="text-sm capitalize h-16 font-medium  overflow-hidden ">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
