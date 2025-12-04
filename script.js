const REAL_URL = "https://google.com";  // ← 여기만 변경!

document.getElementById('root').innerHTML = `
<div style="width:100vw;height:100vh;background:linear-gradient(135deg,#9c27b0,#e91e63);display:flex;flex-direction:column;justify-content:center;align-items:center;color:white;font-family:'Malgun Gothic',sans-serif;text-align:center;padding:20px;box-sizing:border-box;">
    <h1 style="font-size:2.8em;margin:0 0 20px 0;">카지노파티에 참여하세요</h1>
    <p style="font-size:1.4em;margin:0 0 50px 0;line-height:1.6;">
        안전한 플레이, 즐거운 파티<br>아래 버튼을 눌러 이동합니다.
    </p>
    <button onclick="location.href=REAL_URL" style="background:white;color:#9c27b0;padding:18px 50px;border:none;border-radius:50px;font-size:1.4em;font-weight:bold;cursor:pointer;box-shadow:0 10px 30px rgba(0,0,0,0.4);">
        ▶ 파티 이동하기
    </button>
    <p style="margin-top:60px;font-size:0.9em;color:#ddd;">즐거운 시간 보내세요.</p>
</div>
`;
