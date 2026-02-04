// src/components/Weather.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    // 🌟 숭실대 좌표로 백엔드 API 호출 (추후 위치 정보 연동 필요)
    axios.get('http://localhost:8080/api/weather', {
      params: {
        latitude: 37.496,  // 숭실대 위도
        longitude: 126.957 // 숭실대 경도
      }
    })
    .then(res => {
      console.log("백엔드 데이터 수신 성공:", res.data);
      setWeatherData(res.data); // 받아온 JSON 데이터를 상태에 저장
    })
    .catch(err => {
      console.error("데이터 호출 에러:", err);
    });
  }, []);

  // 데이터 로딩 중 표시
  if (!weatherData) return <div className="weather-card">날씨 정보를 가져오고 있습니다...🎾</div>;

  return (
    <div className="weather-card" style={{
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '24px',
      margin: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'left'
    }}>
      {/* 1. 상단 섹션: 제목과 테니스 지수(이모티콘)를 위아래로 배치 */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ color: '#2ecc71', fontSize: '18px', marginBottom: '8px', fontWeight: 'bold', marginTop: 0 }}>
          오늘의 테니스지수 (날짜 추가 기입)
        </h3>
        {/* '오늘의 테니스지수' 글자 바로 밑에 배치 */}
        <div style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#2ecc99',
            marginTop: '20px'
         }}>
            테니스치기 아주 좋은 날입니다!!
            </div>
            
        </div>
      

      {/* 2. 하단 섹션: 지도 보기(좌)와 날씨 정보 세트(우)를 양 끝으로 배치 */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end' // 아래쪽 라인 맞춤
      }}>
        
        {/* 하단-좌측: 지도 보기 버튼을 왼쪽에 배치 */}
        <div style={{ paddingBottom: '5px' }}>
          <button style={{ 
            backgroundColor: '#2ecc71', 
            color: 'white', 
            border: 'none', 
            borderRadius: '10px', 
            padding: '10px 24px', 
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(46, 204, 113, 0.2)'
          }}>
            근처 테니스장 찾기  {/*지도 API로 연결*/}
          </button>
        </div>

        {/* 하단-우측: 날씨 아이콘과 그 밑에 날씨 정보 텍스트 세로 정렬 */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', // 아이콘과 텍스트를 중앙 정렬
          gap: '8px' 
        }}>
          {/* 날씨 아이콘 (todayWeatherIcon) */}
          <span style={{ fontSize: '70px', lineHeight: '1' }}>
            {weatherData.todayWeatherIcon}
          </span>
          
          {/* 아이콘 바로 밑에 배치되는 날씨 정보 (todayWeatherStatus) */}
          <p style={{ 
            fontSize: '18px', 
            fontWeight: 'bold', 
            color: '#333',
            margin: 0,
            whiteSpace: 'nowrap' // 한 줄로 표시
          }}>
            {weatherData.todayWeatherStatus}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Weather;