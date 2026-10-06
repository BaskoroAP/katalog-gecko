import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <div className="group rounded-2xl border border-neutral-200 bg-white p-3 transition hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute top-2 left-2 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-medium text-neutral-800 backdrop-blur-md dark:bg-black/80 dark:text-neutral-200">
          {product.category}
        </span>
      </div>

      <div className="mt-3 flex flex-col justify-between">
        <div>
          <h3 className="line-clamp-1 font-semibold text-neutral-900 dark:text-neutral-100">
            {product.name}
          </h3>
          <p className="mt-1 font-bold text-emerald-600 dark:text-emerald-400">
            {formattedPrice}
          </p>
        </div>

        <Link
          href={`/produk/${product.slug}`}
          className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
}