import Link from "next/link";
import { articles } from "@/data/articles";

export default function GuideIndexPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center pb-10">
      <header className="w-full bg-slate-900 text-white p-8 text-center shadow-lg">
        <h1 className="text-4xl font-extrabold tracking-tight">คู่มือเจาะลึก & รีวิวอุปกรณ์</h1>
        <p className="mt-3 text-slate-400 text-lg">อ่านก่อนซื้อ จะได้ไม่เจ็บตัว โดนฟันหัวแบะ</p>
        <Link href="/" className="text-blue-400 hover:text-blue-300 mt-4 inline-block text-sm">
          &larr; กลับหน้าหลัก
        </Link>
      </header>

      {/* พื้นที่โฆษณา AdSense */}
      <div className="w-full max-w-4xl h-24 bg-gray-200 my-8 flex items-center justify-center border-2 border-dashed border-gray-400 rounded">
        <span className="text-gray-500 font-semibold">[พื้นที่โฆษณา AdSense Leaderboard]</span>
      </div>

      <div className="w-full max-w-4xl p-8 bg-white shadow-xl rounded-xl border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">📚 บทความล่าสุด</h2>

        {/* ลูปสร้างการ์ดบทความอัตโนมัติ */}
        <div className="grid grid-cols-1 gap-6">
          {articles.map((article) => (
            <Link href={`/guide/${article.slug}`} key={article.slug} className="block group">
              <div className="bg-slate-50 border border-gray-200 rounded-xl p-6 shadow-sm group-hover:shadow-md group-hover:border-blue-300 transition-all group-hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-blue-700 mb-2 group-hover:text-blue-600">{article.title}</h3>
                <p className="text-gray-600">{article.excerpt}</p>
                <div className="mt-4 text-sm font-bold text-red-500 group-hover:text-red-600">
                  อ่านต่อ &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}