var scriptElements = document.getElementsByTagName('script');
var bookmarkletCode = scriptElements[scriptElements.length - 1].innerHTML.replace(/^\s+|\s*\n\s*|\s+$/g, '');
if(bookmarkletCode) {
  addEventListener('load', function() {
    var textNode = document.createTextNode(bookmarkletCode);
    document.body.appendChild(textNode);
    prompt(
      'Select the text and copy it to the clipboard. (' + bookmarkletCode.length.replace(/\d(?=(\d{3})+(?!\d))/g) + ' characters)',
      bookmarkletCode
    );
  });
}
