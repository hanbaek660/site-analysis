// ==========================================================
//  SiteDiagram 설정 — 배포 전 이 파일의 키를 채우거나,
//  화면 우측 상단 [설정]에서 입력(브라우저에 저장)해도 됩니다.
// ==========================================================
window.SITEDIAGRAM_CONFIG = {
  // 배포 주소: https://hanbaek660.github.io/site-analysis/  (아래 두 키는 https://hanbaek660.github.io 에 묶여 있음)
  // 브이월드(https://www.vworld.kr) 오픈API 인증키. 발급 시 '서비스 URL'에 사이트가 열리는 주소(프로토콜+호스트) 등록 필수
  vworldKey: '0D3FEE0D-20B4-4E71-B87A-71ADB865085F', // 개발키 '사이트 분석', 발급 2026-11-05, 만료 2027-05-05 (유효기간 6개월, 만료 전 마이포털에서 연장 — 최대 3회)
  // 브이월드에 등록한 서비스 URL. 비워두면 현재 사이트 주소(location.origin)를 사용
  vworldDomain: '',
  // 카카오 개발자(https://developers.kakao.com) JavaScript 키. [플랫폼 > Web] 에 사이트 주소 등록 + [제품 설정 > 카카오맵] 활성화 필수
  kakaoJsKey: 'da7335b86367760592513e3c58d753cf', // 카카오 앱 ID 1601068 'Default JS Key', JS SDK 도메인: https://hanbaek660.github.io, https://juaworld.github.io, http://localhost:8765 (만료 없음)
  // 브이월드 데이터 API의 산업단지 레이어 ID (브이월드 '2D 데이터 API > 데이터 목록'에서 "산업단지/산업입지" 검색 후 입력). 비우면 OSM landuse=industrial 사용
  vworldIndustrialLayer: '',

  // 고급: 보통 수정 불필요
  vworldDataUrl: 'https://api.vworld.kr/req/data',
  overpassEndpoints: [
    'https://overpass-api.de/api/interpreter',
    'https://maps.mail.ru/osm/tools/overpass/api/interpreter',
    'https://overpass.kumi.systems/api/interpreter',
    'https://overpass.private.coffee/api/interpreter',
  ],
  tileSources: {
    'vworld-sat': { name: '브이월드 항공사진', needsKey: 'vworldKey', maxZoom: 19, url: (x, y, z, c) => `https://api.vworld.kr/req/wmts/1.0.0/${c.vworldKey}/Satellite/${z}/${y}/${x}.jpeg` },
    'vworld-base': { name: '브이월드 기본지도', needsKey: 'vworldKey', maxZoom: 19, url: (x, y, z, c) => `https://api.vworld.kr/req/wmts/1.0.0/${c.vworldKey}/Base/${z}/${y}/${x}.png` },
    'vworld-gray': { name: '브이월드 회색지도', needsKey: 'vworldKey', maxZoom: 19, url: (x, y, z, c) => `https://api.vworld.kr/req/wmts/1.0.0/${c.vworldKey}/gray/${z}/${y}/${x}.png` },
    'vworld-hybrid': { name: '브이월드 라벨(하이브리드)', needsKey: 'vworldKey', maxZoom: 19, overlay: true, url: (x, y, z, c) => `https://api.vworld.kr/req/wmts/1.0.0/${c.vworldKey}/Hybrid/${z}/${y}/${x}.png` },
    'esri-sat': { name: 'Esri 위성영상 (키 불필요)', maxZoom: 19, url: (x, y, z) => `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${z}/${y}/${x}` },
    'osm': { name: 'OpenStreetMap (키 불필요)', maxZoom: 19, url: (x, y, z) => `https://tile.openstreetmap.org/${z}/${x}/${y}.png` },
  },
};
