export default function FloatingWhatsApp() {
  const adminWa = "https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20ingin%20bertanya%20tentang%20produk%20di%20katalog";

  return (
    <a
      href={adminWa}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 font-semibold text-white shadow-xl hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all"
    >
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.082-2.12-.507-1.423-.589-2.316-2.029-2.387-2.12-.07-.092-.571-.762-.571-1.455 0-.693.364-1.034.494-1.175.13-.141.283-.177.377-.177.094 0 .188.001.271.005.088.005.206-.033.322.247.12.289.412 1.003.447 1.075.035.071.059.153.012.247-.047.094-.071.153-.141.235-.071.082-.148.184-.212.247-.071.07-.145.147-.062.289.082.141.367.607.787.981.541.482.997.632 1.139.702.141.07.224.059.306-.035.082-.094.353-.412.447-.553.094-.141.188-.118.318-.07.13.047.824.388.965.459.141.071.235.106.271.165.035.059.035.342-.109.747z" />
      </svg>
      <span className="hidden sm:inline text-sm">Chat Kami</span>
    </a>
  );
}