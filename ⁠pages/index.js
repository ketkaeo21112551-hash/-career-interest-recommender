export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Career Interest Recommender</h1>
      <p>บอกเราเกี่ยวกับความสนใจของคุณ เพื่อให้ AI แนะนำอาชีพที่ใช่สำหรับคุณ!</p>
      
      <textarea 
        placeholder="เช่น ฉันชอบวาดรูป สนใจงานออกแบบ 3D และชอบใช้โปรแกรม Blender..." 
        style={{ width: '100%', height: '150px', padding: '10px', fontSize: '16px' }}
      />
      <br /><br />
      <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>
        วิเคราะห์อาชีพ
      </button>
    </div>
  )
}
