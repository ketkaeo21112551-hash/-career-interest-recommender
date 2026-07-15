export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Career Interest Recommender 🚀
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          บอกความสนใจของคุณ แล้วให้ AI ช่วยแนะนำอาชีพที่ใช่!
        </p>
        
        <textarea 
          className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none mb-4"
          placeholder="เช่น ฉันชอบวาดรูป สนใจงานออกแบบ 3D และชอบใช้โปรแกรม Blender..." 
        />
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300">
          วิเคราะห์อาชีพ
        </button>
      </div>
    </div>
  )
}
