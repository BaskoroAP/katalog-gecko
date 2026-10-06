// Ganti dengan nomor WhatsApp Admin Anda (awali kode negara 62 tanpa tanda + atau 0)
const WA_PHONE_NUMBER = "6282116361315";

export function generateWhatsAppLink(productName: string, productUrl: string, price: number) {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);

  const message = 
    `Halo Admin, saya tertarik untuk membeli produk berikut:\n\n` +
    `*Produk:* ${productName}\n` +
    `*Harga:* ${formattedPrice}\n` +
    `*Link Katalog:* ${productUrl}\n\n` +
    `Apakah produk ini masih tersedia?`;

  return `https://wa.me/${WA_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}