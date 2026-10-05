/**
 * 일산양일중 3학년 15반 반티 주문서 → Google Sheets
 *
 * 사용 방법
 * 1. 주문을 받을 Google 스프레드시트를 만든다.
 * 2. 확장 프로그램 → Apps Script를 연다.
 * 3. 이 코드를 붙여넣고 저장한다.
 * 4. 배포 → 새 배포 → 유형: 웹 앱
 * 5. 실행 사용자: 나
 * 6. 액세스 권한: 모든 사용자
 * 7. 배포된 웹 앱 URL을 index.html의 GOOGLE_APPS_SCRIPT_URL에 붙여넣는다.
 */

const SHEET_NAME = "주문서";

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "제출시각", "이름", "연락처", "상품", "긴팔 사이즈",
      "프린팅 여부", "개인별명", "개인번호", "하의", "요청사항"
    ]);
  }

  sheet.appendRow([
    new Date(),
    data.name || "",
    data.phone || "",
    data.product || "",
    data.size || "",
    data.printing || "",
    data.nickname || "",
    data.number || "",
    data.pants || "",
    data.memo || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}
