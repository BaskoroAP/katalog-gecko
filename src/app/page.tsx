"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["Semua", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "Semua" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-8 sm:px-8 lg:px-16 dark:bg-black">
      {/* Header Banner */}
      <section className="mx-auto max-w-5xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
          Katalog Produk Resmi
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Pilih produk favorit Anda dan hubungi kami langsung via WhatsApp untuk pemesanan cepat.
        </p>
      </section>

      {/* Filter & Search Bar */}
      <section className="mx-auto mt-8 flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                  : "bg-white text-neutral-600 hover:bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Cari nama produk..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
        />
      </section>

      {/* Grid Produk */}
      <section className="mx-auto mt-6 max-w-5xl">
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center text-neutral-500">
            Produk tidak ditemukan.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}