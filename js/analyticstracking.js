(function() {
  var NOTRACKING_KEY = "notracking";
  var queryString = location.search.substring(1);
  var matches = queryString.match(new RegExp('(?:^|&)' + NOTRACKING_KEY + '(?:=|&|$)', 'i'));
  if(matches) {
alert(4);
    aElements = document.getElementsByTagName('a');
    for(var i = 0; i < aElements.length; i++) {
      var aElement = aElements[i];
      var aHref = aElement.href.replace(/^\s+|\s+$/g, '');
      if(/^(https?:)?\/\//i.test(aHref) == false) {
        aElement.href = aHref + (/\?/.test(aHref)? '&': '?') + NOTRACKING_KEY;
      }
    }
    return;
  }
  var scriptText = (function() {/*
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-72892673-1', 'auto');
    ga('send', 'pageview');
  */}).toString().match(/\/\*([^]*)\*\//)[1];
  var scriptElement = document.createElement('script');
  scriptElement.appendChild(document.createTextNode(scriptText));
  document.head.appendChild(scriptElement);
})();
