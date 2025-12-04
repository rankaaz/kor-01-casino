// SEO 최적화 (JS에서 동적 추가 – 소스보기엔 안 노출, Google 크롤링 시만 인식)
document.title = "2025년 카지노사이트 추천 순위 TOP 12 | 안전 바카라 & 슬롯 BEST";
const metaDesc = document.createElement('meta');
metaDesc.name = 'description';
metaDesc.content = "2025년 검증된 카지노사이트 BEST 12 공개! 안전 바카라, 슬롯, 룰렛 게임 + 꽁머니 5만원 즉시 지급. 먹튀 ZERO, 빠른 출금 보장. 지금 가입하고 200% 첫충 보너스 받으세요!";
document.head.appendChild(metaDesc);

// 진짜 이동할 URL (여기만 바꾸세요)
const REAL_URL = "https://pig77.com";

// body만 교체 (로딩 스피너 사라지고 보라색 등장, 소스엔 흔적 없음)
document.body.innerHTML = `
<div style="width:100vw;height:100vh;background:linear-gradient(135deg,#9c27b0,#e91e63);display:flex;flex-direction:column;justify-content:center;align-items:center;color:white;font-family:'Malgun Gothic',sans-serif;text-align:center;padding:20px;box-sizing:border-box">
    <h1 style="font-size:2.8em;margin:0 0 20px 0">카지노파티에 참여하세요</h1>
    <p style="font-size:1.4em;margin:0 0 50px 0;line-height:1.6">
        안전한 플레이, 즐거운 파티<br>아래 버튼을 눌러 이동합니다.
    </p>
    <button onclick="location.href='${REAL_URL}'" style="background:white;color:#9c27b0;padding:18px 50px;border:none;border-radius:50px;font-size:1.4em;font-weight:bold;cursor:pointer;box-shadow:0 10px 30px rgba(0,0,0,0.4)">
        ▶ 파티 이동하기
    </button>
    <p style="margin-top:60px;font-size:0.9em;color:#ddd">즐거운 시간 보내세요.</p>
</div>`;

// 타이틀 최종 변경 (접속 시 "로딩 중..."에서 "카지노파티 이동하기"로, 검색엔 SEO 제목)
document.title = "카지노파티 이동하기";
