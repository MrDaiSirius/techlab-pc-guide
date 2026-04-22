import SpecCard from "./components/SpecCard";
import Link from "next/link";
import { pcSpecs } from "@/data/specs"; // Import ข้อมูลจากไฟล์ data

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center pb-10">
      <header className="w-full bg-slate-900 text-white p-8 text-center shadow-lg">
        <h1 className="text-4xl font-extrabold tracking-tight">TechLab & Custom PC Guide</h1>
        <p className="mt-3 text-slate-400 text-lg">สุดยอดคู่มือจัดสเปกคอมสำหรับ Dev, Hacker และ Pro Gamer</p>
      </header>

      <div className="w-full max-w-4xl h-24 bg-gray-200 my-8 flex items-center justify-center border-2 border-dashed border-gray-400 rounded">
        <span className="text-gray-500 font-semibold">[พื้นที่โฆษณา AdSense Leaderboard - 728x90]</span>
      </div>

      <div className="w-full max-w-4xl p-8 bg-white shadow-xl rounded-xl border border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 border-b pb-4 gap-4">
          <h2 className="text-3xl font-bold text-gray-800">🔥 สเปกคอมแนะนำประจำเดือน</h2>
          <Link href="/guide" className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-2 px-6 rounded-lg shadow-md animate-pulse">
            📖 อ่านคู่มือเจาะลึก (ก่อนซื้อ)
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {pcSpecs.map((spec) => (
            <SpecCard 
              key={spec.id}
              title={spec.title}
              cpu={spec.cpu}
              gpu={spec.gpu}
              ram={spec.ram}
              storage={spec.storage}
              price={spec.price}
              affiliateLink={spec.affiliateLink} // ส่งลิงก์เข้าไปด้วย
            />
          ))}
        </div>
        
        <button className="bg-red-600 hover:bg-red-700 transition-colors text-white font-bold py-4 px-6 rounded-lg w-full text-xl shadow-md">
          🔥 เช็คราคาอะไหล่ชิ้นอื่นๆ ทั้งหมด [คลิกเลย]
        </button>
      </div>

      <div className="w-full max-w-4xl h-24 bg-gray-200 mt-8 flex items-center justify-center border-2 border-dashed border-gray-400 rounded">
        <span className="text-gray-500 font-semibold">[พื้นที่โฆษณา AdSense Leaderboard - 728x90]</span>
      </div>
    </main>
  );
}