<?php function get_header() { ?>
	<!DOCTYPE html>
	<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
	<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
	<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
	<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
	    <head>
	        <meta charset="utf-8">
	        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	        <title></title>
	        <meta name="description" content="">
	        <meta name="viewport" content="width=device-width">

	        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

	        <link rel="stylesheet" href="assets/css/main.css?nc=<?php echo time(); ?>">
	        
	        <script type="text/javascript" src="http://download.skype.com/share/skypebuttons/js/skypeCheck.js"></script>
	        
	        <script src="assets/js/vendor/modernizr-2.6.1.min.js"></script>
<?php } ?>

<?php function get_footer() { ?>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-1.8.0.min.js"><\/script>')</script>
    <script src="assets/js/main-min.js"></script>

    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    <!--script>
        var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
        (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
        s.parentNode.insertBefore(g,s)}(document,'script'));
    </script-->
</body>
</html>
<?php } ?>