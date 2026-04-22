import Link from "next/link";

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center pb-10">
      {/* Header */}
      <header className="w-full bg-slate-900 text-white p-6 text-center shadow-md">
        <h1 className="text-3xl font-extrabold">คู่มือจัดสเปกคอม ปี 2026</h1>
        <Link href="/" className="text-blue-400 hover:text-blue-300 mt-2 inline-block text-sm">
          &larr; กลับหน้าหลัก
        </Link>
      </header>

      {/* AdSense Top Article */}
      <div className="w-full max-w-3xl h-24 bg-gray-200 my-6 flex items-center justify-center border-2 border-dashed border-gray-400 rounded">
        <span className="text-gray-500 font-semibold">[โฆษณา AdSense - แบนเนอร์บนบทความ]</span>
      </div>

      {/* Article Content */}
      <article className="w-full max-w-3xl p-8 bg-white shadow-lg rounded-xl border border-gray-100 prose prose-slate lg:prose-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">เจาะลึก: ทำไม Dev ถึงต้องใช้ RAM 32GB ขึ้นไป?</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          ยุคนี้รัน Docker, รัน VM, เปิด Chrome 50 แท็บ พร้อมกับรันเซิร์ฟเวอร์จำลองในเครื่อง... ถ้า RAM มึงแค่ 16GB บอกเลยว่าคอขวดแน่นอน! 
          การลงทุนกับ RAM สมัยนี้ถือว่าคุ้มค่ามาก เพราะราคา DDR5 เริ่มจับต้องได้แล้ว...
        </p>

        {/* Affiliate In-Text Link (เนียนๆ) */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
          <p className="font-semibold text-blue-800 m-0">
            💡 ชี้เป้า: <a href="#" className="underline text-blue-600 hover:text-blue-800">อัปเกรด RAM DDR5 32GB ราคาพิเศษ คลิกเลย! (Affiliate)</a>
          </p>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3">สรุป</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          อย่าขี้เหนียวกับ RAM ถ้ามึงไม่อยากนั่งหัวเสียตอนเครื่องค้างระหว่างเขียนโค้ด กดสั่งผ่านลิงก์ด้านบนไปเลย จบๆ
        </p>
      </article>

      {/* AdSense Bottom Article */}
      <div className="w-full max-w-3xl h-64 bg-gray-200 mt-8 flex items-center justify-center border-2 border-dashed border-gray-400 rounded">
        <span className="text-gray-500 font-semibold">[โฆษณา AdSense - สี่เหลี่ยมจตุรัสท้ายบทความ]</span>
      </div>
    </main>
  );
}