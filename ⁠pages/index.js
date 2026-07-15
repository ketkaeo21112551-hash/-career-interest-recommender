<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 flex flex-col items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 class="text-2xl font-bold text-gray-800 mb-4">Career Interest Recommender 🚀</h1>
        <p class="text-gray-600 mb-6">บอกความสนใจของคุณ แล้วให้ AI ช่วยแนะนำอาชีพที่ใช่!</p>
        <textarea id="interest" class="w-full h-32 p-4 border border-gray-300 rounded-lg mb-4" placeholder="เช่น ฉันชอบวาดรูป สนใจงานออกแบบ 3D..."></textarea>
        <button onclick="alert('ระบบวิเคราะห์กำลังมาเร็วๆ นี้!')" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">วิเคราะห์อาชีพ</button>
    </div>
</body>
</html>
