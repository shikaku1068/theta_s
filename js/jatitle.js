var jaFlag = ((navigator.language || '').match(/^ja\b/i)? true: false);
if(jaFlag) {
  var scriptElements = document.getElementsByTagName('script');
  var jaTitle = scriptElements[scriptElements.length - 1].innerHTML.trim();
  if(jaTitle) {
    document.title = jaTitle;
  }
}
