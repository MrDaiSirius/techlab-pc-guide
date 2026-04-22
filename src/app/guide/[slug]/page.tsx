import { articles } from "@/data/articles";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // ค้นหาบทความที่ตรงกับ slug ใน URL
  const article = articles.find((a) => a.slug === slug);

  // ถ้าหาไม่เจอ ให้โยนไปหน้า 404
  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center pb-10">
      <header className="w-full bg-slate-900 text-white p-6 text-center shadow-md">
        <h1 className="text-2xl font-bold">{article.title}</h1>
        <Link href="/guide" className="text-blue-400 hover:text-blue-300 mt-2 inline-block text-sm">
          &larr; กลับไปหน้ารวมคู่มือ
        </Link>
      </header>

      <article className="w-full max-w-3xl p-8 bg-white shadow-lg rounded-xl border border-gray-100 mt-8">
        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          {article.content}
        </p>

        {/* ช่องทางทำมาหากิน ห้ามลืม! */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg shadow-sm">
          <p className="font-bold text-blue-900 mb-2">🔥 ข้อเสนอพิเศษสำหรับมึง:</p>
          <a href={article.affiliateLink} className="text-xl underline text-blue-600 hover:text-blue-800 font-extrabold">
            {article.affiliateText}
          </a>
        </div>

        <div className="w-full h-64 bg-gray-200 mt-8 flex items-center justify-center border-2 border-dashed border-gray-400 rounded">
            <span className="text-gray-500 font-semibold">[โฆษณา AdSense ตรงนี้แหละเงิน!]</span>
        </div>
      </article>
    </main>
  );
}