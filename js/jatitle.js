(function() {
  var jaFlag = ((navigator.language || '').match(/^ja\b/i)? true: false);
  if(jaFlag) {
    var scriptElements = document.getElementsByTagName('script');
    var jaTitle = scriptElements[scriptElements.length - 1].innerHTML;
    jaTitle = jaTitle.replace(/\/\*([\S\s]*?)\*\/|\/\/([^\r\n]*)/g, '$1');
    jaTitle = jaTitle.replace(/^\s+|\s+$/g, '');
    if(jaTitle) {
      document.title = jaTitle;
    }
  }
})();
