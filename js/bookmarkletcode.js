var scriptElements = document.getElementsByTagName('script');
var bookmarkletCode = scriptElements[scriptElements.length - 1].innerHTML;
bookmarkletCode = bookmarkletCode.replace(/<\\\//g, '</');
bookmarkletCode = bookmarkletCode.replace(/^\s+|\s*\n\s*|\s+$/g, '');
if(bookmarkletCode) {
  addEventListener('load', function() {
    var styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    var sheet = styleElement.sheet;
    sheet.insertRule('#bookmarklet-code {position: absolute; top: 8px; right: 8px; bottom: 8px; left: 8px; resize: none;}', sheet.cssRules.length);
    var divElement = document.createElement('textarea');
    divElement.id = 'bookmarklet-code';
    divElement.appendChild(document.createTextNode(bookmarkletCode));
    document.body.appendChild(divElement);
/*
    var n = String(bookmarkletCode.length).replace(/\d(?=(?:\d{3})+(?!\d))/g, '$&,');
    prompt(
      'Select the bookmarklet code from beginning to end and copy it to the clipboard. (' + n + ' characters)',
      bookmarkletCode
    );
*/
  });
}
