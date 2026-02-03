import { useState } from 'react'

function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#2ecc71' }}>🎾 TennisMate</h1>
      <p style={{ fontSize: '1.2rem', color: '#34495e' }}>
        최적의 테니스장을 찾고, 함께할 메이트를 만나보세요!
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        {/* 테니스장 정보 카드 (기존에 구현한 Court 기능 기반) */}
        <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', width: '300px' }}>
          <h3>🏟️ 테니스장 찾기</h3>
          <p>내 주변 테니스장의 시설과 평점을 확인하세요.</p>
          <button style={{ backgroundColor: '#2ecc71', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
            자세히 보기
          </button>
        </div>

        {/* 리뷰 관리 카드 (최근에 완성한 Review 기능 기반) */}
        <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', width: '300px' }}>
          <h3>📝 생생한 이용 후기</h3>
          <p>사용자들이 남긴 실시간 평점과 후기를 확인하세요.</p>
          <button style={{ backgroundColor: '#3498db', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
            리뷰 읽기
          </button>
        </div>
      </div>

      <footer style={{ marginTop: '50px', color: '#95a5a6', fontSize: '0.9rem' }}>
        © 2026 TennisMate Project. All rights reserved.
      </footer>
    </div>
  )
}

export default App