var scriptElements = document.getElementsByTagName('script');
var bookmarkletCode = scriptElements[scriptElements.length - 1].innerHTML;
bookmarkletCode = bookmarkletCode.replace(/<\\\//g, '</');
bookmarkletCode = bookmarkletCode.replace(/^\s+|\s*\n\s*|\s+$/g, '');
if(bookmarkletCode) {
  addEventListener('load', function() {
    var styleElement = document.createElement('style');
    styleElement.sheet.insertRule('#bookmarklet-code {margin: 8px; border: 1px solid #000;}', 0);
    document.head.appendChild(styleElement);
    var divElement = document.createElement('div');
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
