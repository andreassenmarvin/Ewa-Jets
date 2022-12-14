// Header

var myVideo = document.getElementById("header");

myVideo.addEventListener("ended", function () {
    myVideo.autoplay = false;
    myVideo.load();
})

var explorebtn = document.querySelector(".explore-button");
var spanAnimation = document.querySelector(".span");
var children = spanAnimation.childNodes;

function spanRemove() {
    spanAnimation.classList.add("span-hover");
}

function spanAppend() {
    spanAnimation.classList.remove("span-hover");
}

var i = 0;
var intro = "We are  Ewa Air Jets Solutions."
var introTitle = document.getElementsByClassName("header-tag-title");
var introHead = document.querySelector("#header-tag1-paragraph");
var speed = 90;

var feedbackForm = document.querySelector(".feedback-form");

function typing() {
    if (i < intro.length) {
        $(introTitle).fadeIn();
        introHead.innerHTML += intro.charAt(i);
        i++;
        setTimeout(typing, speed)
    } else if (i = intro.length) {
        $(explorebtn).slideDown();
    }
}

// Navbar

$(function () {
    $("#navbar-toggler-icon").click(function () {
        $("#navbarSupportedContent").slideToggle();
        $(".form").css({
            "margin": "auto"
        })
    })

    $("#privateDropdown").click(function () {
        $("#dropdown1").slideToggle();
        $("#dropdown2").slideUp();
    })

    $("#airDropdown").click(function () {
        $("#dropdown2").slideToggle();
        $("#dropdown1").slideUp();
    })

    // Feedback Form

    $('input').blur(function () {
        var $this = $(this);
        if ($this.val())
            $this.addClass('used');
        else
            $this.removeClass('used');
    });

    var $ripples = $('.ripples');

    $ripples.on('click.Ripples', function (e) {

        var $this = $(this);
        var $offset = $this.parent().offset();
        var $circle = $this.find('.ripplesCircle');

        var x = e.pageX - $offset.left;
        var y = e.pageY - $offset.top;

        $circle.css({
            top: y + 'px',
            left: x + 'px'
        });

        $this.addClass('is-active');

    });

    $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function (e) {
        $(this).removeClass('is-active');
    });

    $(feedbackForm).submit(function (event) {
        event.preventDefault();

        var name = document.getElementById("name");
        var message = document.getElementById("message");
        let success = document.getElementById("form-success");

        if ((name.value == null || name.value == "") && (message.value == null || message.value == "")) {
            name.style.borderBottom = "1px solid red";
            message.style.borderBottom = "1px solid red";
            name.focus()
        } else if (name.value == null || name.value == "") {
            name.style.borderBottom = "1px solid red";
            name.focus();
        } else if (message.value == null || message.value == "") {
            message.style.borderBottom = "1px solid red";
            message.focus();
        } else {
            name.style.borderBottom = "#3160B6";
            message.style.borderBottom = "##3160B6";
            success.style.display = "block";
            $(feedbackForm).trigger("reset");
            setTimeout(function () {
                location.reload();
            }, 2000)
        }
    })
})

// Subscription Form

let formSubscribe = document.querySelector(".subscription-form");
let inputEmail = document.querySelector(".input-email")
let modalSuccess = document.querySelector(".modal-success");
let modalClose = document.querySelector(".modal-close");
let overlay = document.querySelector(".modal-overlay");

formSubscribe.addEventListener("submit", (e) => {
    e.preventDefault();

    if (inputEmail.value == null || inputEmail.value == "") {
        inputEmail.style.borderColor = "red";
        inputEmail.focus();
        return false;
    } else {
        inputEmail.style.border = "none";
        modalSuccess.style.display = "block";
        inputEmail.value = "";
        overlay.style.display = "block"
        return true;
    }
})


modalClose.addEventListener("click", () => {
    modalSuccess.style.display = "none";
    overlay.style.display = "none";
})