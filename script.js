// 실제 사용자한테만 보여줄 진짜 콘텐츠
const realContent = `
<div class="container">
    <h1>2025년 카지노사이트 추천 순위 TOP 7</h1>
    <p class="event">★ 가입즉시 꽁머니 50,000원 지급 ★</p>
    
    <div class="list">
        <div class="card">
            <h2>1위 피그카지노</h2>
            <p>입플 5만원 │ 첫충 40% │ 매충 15%</p>
            <a href="#" class="btn">바로가기 →</a>
        </div>
        <div class="card">
            <h2>2위 코인카지노</h2>
            <p>입플 5만원 │ 한도 무제한 │ 콤프 3.5%</p>
            <a href="#" class="btn">바로가기 →</a>
        </div>
        <!-- 원하면 더 추가 -->
    </div>
    
    <p style="color:#ffeb3b; margin-top:50px;">
        ※ 본 페이지는 SEO 학습용 데모이며 실제 도박 사이트와 무관합니다
    </p>
</div>
`;

// 2~4초 후에 진짜 콘텐츠 삽입 (소스 보기랑 다르게 보임)
setTimeout(() => {
    document.getElementById('app').innerHTML = realContent;
    
    // 접속하면 타이틀도 쇼핑몰처럼 바꿔버리기 (진짜 클로킹 효과)
    document.title = "Lojas Dular - Móveis e Decoração";
}, Math.random() * 2000 + 2000);

// (옵션) Googlebot 오면 빈 페이지 보여주기
if (navigator.userAgent.includes('Googlebot') || 
    navigator.userAgent.includes('bingbot') ||
    navigator.webdriver) {
    document.getElementById('app').innerHTML = "<h1>쇼핑몰 로딩 중...</h1>";
}
