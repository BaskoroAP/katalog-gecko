import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { generateWhatsAppLink } from "@/lib/whatsapp";

// SSG: Generate static params untuk performa & SEO maksimal
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(product.price);

  // URL absolut produk untuk disertakan ke WhatsApp
  const currentUrl = `https://namadomainanda.com/produk/${product.slug}`;
  const whatsappUrl = generateWhatsAppLink(product.name, currentUrl, product.price);

  return (
    <div className="min-h-screen bg-neutral-50 px-4 py-8 sm:px-8 dark:bg-black">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
        >
          ← Kembali ke Katalog
        </Link>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Foto Produk */}
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Info & Tombol Order */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="rounded-md bg-neutral-200 px-2.5 py-1 text-xs font-semibold text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300">
                {product.category}
              </span>
              <h1 className="mt-3 text-2xl font-bold text-neutral-900 sm:text-3xl dark:text-white">
                {product.name}
              </h1>
              <p className="mt-2 text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
                {formattedPrice}
              </p>

              <div className="mt-6 border-t border-neutral-200 pt-4 dark:border-neutral-800">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  Deskripsi Produk
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Tombol Call to Action ke WhatsApp */}
            <div className="mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white shadow-md transition hover:bg-emerald-500 active:scale-[0.99]"
              >
                {/* SVG Icon WhatsApp Sederhana */}
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.082-2.12-.507-1.423-.589-2.316-2.029-2.387-2.12-.07-.092-.571-.762-.571-1.455 0-.693.364-1.034.494-1.175.13-.141.283-.177.377-.177.094 0 .188.001.271.005.088.005.206-.033.322.247.12.289.412 1.003.447 1.075.035.071.059.153.012.247-.047.094-.071.153-.141.235-.071.082-.148.184-.212.247-.071.07-.145.147-.062.289.082.141.367.607.787.981.541.482.997.632 1.139.702.141.07.224.059.306-.035.082-.094.353-.412.447-.553.094-.141.188-.118.318-.07.13.047.824.388.965.459.141.071.235.106.271.165.035.059.035.342-.109.747z" />
                </svg>
                Pesan via WhatsApp
              </a>
              <p className="mt-2 text-center text-xs text-neutral-400">
                Pemesanan diproses langsung oleh tim kami melalui WhatsApp chat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}