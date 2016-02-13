/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */

 (function($){
 	$(document).ready(function(){
   $("#banner-image-pixup").backstretch('images/pixup/pixUpProto.jpg');
   $("#banner-image-explorify").backstretch('images/explorify/explorify_title.jpg');
   $("#banner-image-smartlid").backstretch('images/smartlid/smartlid_title.jpg');
  $("#banner-image-3m").backstretch('images/3M/3M_title.jpg');
  }); // End document ready

  $(window).load(function() {
    $('.design=container').fadeIn();
    var $container = $('.design-container').isotope({
      itemSelector: '.design-item',
      layoutMode: 'masonry',
      transitionDuration: '0.6s',
      filter: "*"
    });
})(this.jQuery);

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-73066359-1', 'auto');
  ga('send', 'pageview');
