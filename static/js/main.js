// BACK-TO-TOP
$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
// AOS-SCRIPT
AOS.init({
    once: true,
});

// HAMBURGER TOGGLER
$(".hamburger-menu").on("click", function() {
    $(".hamburger-menu").toggleClass("animate");
    $("#overlay").toggleClass("overlay-active");
    $(".main-top-section").toggleClass("mobile-view");
    $("body").toggleClass("fix-screen-mobile");
    $(".hero-background").toggleClass("hero_mobile_content");
});
$(document).ready(function() {
    const Section1 = document.querySelector("#name1-about-us");
    const Section2 = document.querySelector("#name2-section");
    const Section3 = document.querySelector("#name3-section");
    const Section4 = document.querySelector("#name4-section");
    const Section5 = document.querySelector("#name5-section");
    const Section6 = document.querySelector("#name6-section");
    // const mainMenu = document.querySelector("#main-menu");

    //  SECTION-1 SCROLL
    $(".about-section").click(function() {
        // mainMenu.click();
        $(".hamburger-menu").removeClass("animate");
        $("#overlay").removeClass("overlay-active");
        $(".main-top-section").removeClass("mobile-view");
        $("body").removeClass("fix-screen-mobile");
        Section1.scrollIntoView();
    });

    // SECTION-2 SCROLL
    $(".section-2").click(function() {
        // mainMenu.click();
        $(".hamburger-menu").removeClass("animate");
        $("#overlay").removeClass("overlay-active");
        $(".main-top-section").removeClass("mobile-view");
        $("body").removeClass("fix-screen-mobile");
        Section2.scrollIntoView();
    });

    // SECTION-3 SCROLL
    $(".section-3").click(function() {
        // mainMenu.click();
        $(".hamburger-menu").removeClass("animate");
        $("#overlay").removeClass("overlay-active");
        $(".main-top-section").removeClass("mobile-view");
        $("body").removeClass("fix-screen-mobile");
        Section3.scrollIntoView();
    });

    // SECTION-4 SCROLL
    $(".section-4").click(function() {
        // mainMenu.click();
        $(".hamburger-menu").removeClass("animate");
        $("#overlay").removeClass("overlay-active");
        $(".main-top-section").removeClass("mobile-view");
        $("body").removeClass("fix-screen-mobile");
        Section4.scrollIntoView();
    });

    // SECTION-5 SCROLL
    $(".section-5").click(function() {
        // mainMenu.click();
        $(".hamburger-menu").removeClass("animate");
        $("#overlay").removeClass("overlay-active");
        $(".main-top-section").removeClass("mobile-view");
        $("body").removeClass("fix-screen-mobile");
        Section5.scrollIntoView();
    });

    // SECTION-6 SCROLL
    $(".section-6").click(function() {
        // mainMenu.click();
        $(".hamburger-menu").removeClass("animate");
        $("#overlay").removeClass("overlay-active");
        $(".main-top-section").removeClass("mobile-view");
        $("body").removeClass("fix-screen-mobile");
        Section6.scrollIntoView();
    });
});