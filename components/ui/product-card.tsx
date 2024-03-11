import Image from "next/image";
import Link from "next/link";

const ProductCard: React.FC<Products> = ({ title, thumbnail, price, id }) => {
  return (
    <Link
      href={`/catalog/${id}`}
      className="flex flex-col items-center gap-y-6 rounded-2xl bg-white pb-7 transition-all hover:scale-95 lg:w-60"
    >
      <div className="relative h-[186px] w-full overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="rounded-t-2xl object-cover"
          sizes="(max-width: 768px) 100vw, (min-width: 768px) width: 220px"
        />
      </div>
      <div className="text-center">
        <h2 className="max-w-60 px-1 text-xl">{title}</h2>
        <p>${price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
