function scraping() {
  var html = UrlFetchApp.fetch("https://cantabile.alhinc.jp/people/").getContentText();
  var parser = Parser.data(html);
  var titleList = parser
    .from('<div class="data">').to('</div>')
    .from('<p>').to('</p>')
    .iterate();
  
  var sheet = SpreadsheetApp.openById("1Er9DcM1FiEN_GlMrRND_K_9fVFyuLdEts8KHrMz84jM").getSheetByName("シート1");
  sheet.appendRow(titleList);
}
