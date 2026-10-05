# 일산양일중 3학년 15반 반티 사이트

GitHub Pages용 정적 사이트입니다.

## 주문 흐름
1. 사이트에서 긴팔 사이즈와 프린팅 여부를 선택
2. 주문서 제출
3. 주문서가 Google Sheets로 전송
4. 주문서 제출 후 농협은행 302-2091-0459-71 (김태형)으로 입금

## Google Sheets 연결
`google-apps-script.gs`를 주문을 받을 Google 스프레드시트의
`확장 프로그램 → Apps Script`에 붙여넣습니다.

웹 앱으로 배포한 뒤 URL을 복사해서 `index.html`의

GOOGLE_APPS_SCRIPT_URL

값에 붙여넣고 GitHub에 다시 업로드하세요.

주의:
- Apps Script 배포 권한 설정은 학교/계정 정책에 따라 다를 수 있습니다.
- 실제 운영 전 테스트 주문 1건으로 시트에 정상 기록되는지 확인하세요.
