(function() {
  var queryString = location.search.substring(1);
  var matches = queryString.match(/(?:^|&)notracking(?:=|&|$)/i)
  if(matches) {
    return;
  }
  var scriptText = "
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-72892673-1', 'auto');
    ga('send', 'pageview');
  ";
  var scriptElement = document.createElement('script');
  scriptElement.appendChild(document.createTextNode(scriptText));
  document.head.appendChild(scriptElement);
})();
