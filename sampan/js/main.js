$(document).ready(function() {
    $("nav.mobile .toggle").click(function() {
        $("nav.mobile ul").toggleClass("active");
        $("nav.mobile div.controller").toggleClass("active");
    });
    $("nav.mobile ul li a").click(function() {
        $("nav.mobile ul").toggleClass("active");
        $("nav.mobile div.controller").toggleClass("active");
    });
});