var scriptElements = document.getElementsByTagName('script');
var bookmarkletCode = scriptElements[scriptElements.length - 1].innerHTML.replace(/^\s+|\s*\n\s*|\s+$/g, '');
if(bookmarkletCode) {
  addEventListener('load', function() {
    var textNode = document.createTextNode(bookmarkletCode);
    document.body.appendChild(textNode);
    var number = String(bookmarkletCode.length).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '\1,');
    prompt(
      'Select the bookmarklet code from beginning to end and copy it to the clipboard. (' + number + ' characters)',
      bookmarkletCode
    );
  });
}
