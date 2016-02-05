addEventListener('load', function(event) {
  var jaFlag = ((navigator.language || "").match(/^ja\b/i)? true: false);
  if(jaFlag) {
    var jaTitleNode = document.querySelector('#jaTitle');
    if(jaTitleNode) {
      document.title = jaTitleNode.innerHTML;
    }
  }
  var bookmarkletCodeNode = document.querySelector('#bookmarkletCode');
  if(bookmarkletCodeNode) {
    var bookmarkletCode = bookmarkletCodeNode.innerHTML.replace(/^\s+|\s*\n\s*|\s+$/g, '');
    var textNode = document.createTextNode(bookmarkletCode);
    document.body.appendChild(textNode);
    prompt(
      (jaFlag?
        'テキストを選択してコピーしてください。（' + bookmarkletCode.length + '文字）':
        'Select the text and copy it to the clipboard. (' + bookmarkletCode.length + 'characters)'
      ),
      bookmarkletCode
    );
  }
});
