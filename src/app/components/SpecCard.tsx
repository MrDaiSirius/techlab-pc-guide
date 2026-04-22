interface SpecProps {
  title: string;
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
  price: string;
}

export default function SpecCard({ title, cpu, gpu, ram, storage, price }: SpecProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
      <h3 className="text-xl font-bold text-slate-800 mb-4">{title}</h3>
      <ul className="text-gray-700 text-sm space-y-2 mb-4">
        <li><strong className="text-slate-900">CPU:</strong> {cpu}</li>
        <li><strong className="text-slate-900">GPU:</strong> {gpu}</li>
        <li><strong className="text-slate-900">RAM:</strong> {ram}</li>
        <li><strong className="text-slate-900">Storage:</strong> {storage}</li>
      </ul>
      <div className="text-xl font-extrabold text-red-600 mb-5">{price}</div>
      {/* ปุ่มกดไปรับเงินค่าคอมมิชชันของเรา */}
      <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-2 px-4 rounded-lg w-full shadow-md text-sm">
        🛒 ดูเซ็ตนี้ใน Shopee/Lazada [Affiliate]
      </button>
    </div>
  );
}