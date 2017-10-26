'use strict';

var navHeight = $('#menu').height();
var currentPosition = $(window).scrollTop();


$(document).ready(function () {
    func();
    smoothScroll();
})


$(window).scroll(function () {
    func();
})


function func() {
        if ($(window).scrollTop() > navHeight) {
            $('#menu').addClass('klasaMenu');
        } else {
            $('#menu').removeClass('klasaMenu');
        }

};



