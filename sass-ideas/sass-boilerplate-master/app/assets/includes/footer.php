        <hr>
        
        <div class="footer-container">
            <footer class="footer" role="contentinfo">
                <?php
                    $startYear = "";
                    $currentYear = date('Y');

                    if ($currentYear == $startYear) {
                        echo'<p>&copy; CLIENT COMPANY NAME $currentYear</p>';
                        echo'<p>Web Design by YOUR COMPANY NAME $currentYear</p>';
                    } else {
                        echo'<p>&copy; CLIENT COMPANY NAME $currentYear - $startYear</p>';
                        echo'<p>Web Design by YOUR COMPANY NAME $currentYear - $startYear</p>';
                    }
                ?>
            </footer>
        </div>
        <!-- end of .footer-container -->

    </div>
    <!-- end of .page-container -->

<!-- SCRIPTS -->
<script src="assets/components/jquery/jquery.min.js"></script>
<script src="assets/js/scripts.js"></script>

<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
<script>
    (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
    e.src='//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
    ga('create','UA-XXXXX-X');ga('send','pageview');
</script>

</body>
</html>