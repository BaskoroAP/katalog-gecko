export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  description: string;
  images: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "adidas-terrex-anylander",
    name: "Adidas Terrex Anlander",
    category: "Sepatu",
    price: 1200000,
    description: "Sepatu running yang cocok untuk kegiatan hiking dan trekking ringan. Didesain dengan bahan yang kuat dan nyaman digunakan di berbagai medan.",
    images: ["/images/products/adidas-terrex-anylander.jpg"],
    inStock: true,
  },
  {
    id: "2",
    slug: "asics-gt-2000-15",
    name: "Asics GT 2000 15",
    category: "Sepatu",
    price: 2100000,
    description: "Sepatu running yang cocok untuk kegiatan road running, Daily Training, long run hingga tempo run. Dengan bantalan teknologi FLYTEFOAM™ dan FF BLAST™ , sepatu ini mampu meredam benturan sekaligus memberikan pantulan yang responsif.",
    images: [
      "/images/products/asics-gt-2000-15.jpg",
    ],
    inStock: true,
  },
  {
    id: "3",
    slug: "nikecourt-zoom-lite-4",
    name: "Nikecourt Zoom Lite 4",
    category: "Sepatu",
    price: 1450000,
    description: "Zoom Lite 4 hadir dengan desain minimalis dan modern, dibuat untuk menawarkan kontrol responsif yang sangat dibutuhkan di lapangan. Sepatu ini ringan, fleksibel, dan tahan lama, menjadikannya pilihan ideal untuk permainan cepat dan agresif.",
    images: [
      "/images/products/nikecourt-lite-4.jpg",
    ],
    inStock: true,
  },
];