(function() {
  var scriptElements = document.getElementsByTagName('script');
  var bookmarkletCode = scriptElements[scriptElements.length - 1].innerHTML;
  bookmarkletCode = bookmarkletCode.replace(/\/\*([\S\s]*?)\*\/|\/\/([^\r\n]*)/g, '$1');
  bookmarkletCode = bookmarkletCode.replace(/<\\\//g, '</');
  bookmarkletCode = bookmarkletCode.replace(/^\s+|\s*\n\s*|\s+$/g, '');
  if(bookmarkletCode) {
    addEventListener('load', function() {
      var styleElement = document.createElement('style');
      document.head.appendChild(styleElement);
      var sheet = styleElement.sheet;
      sheet.insertRule('#bookmarklet-code {padding: 8px; border: 1px solid;}', sheet.cssRules.length);
      var divElement = document.createElement('div');
      divElement.id = 'bookmarklet-code';
      divElement.appendChild(document.createTextNode(bookmarkletCode));
      document.body.appendChild(divElement);
    });
  }
})();
