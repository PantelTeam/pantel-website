$(document).ready(function() {
    $("#mobile-menu").on("click", function() {
        mobile_menu($("#mobile-dropdown")[0]);
    });
    if (is_mobile_browser()) $("#section1").remove();
    $(".section").removeClass("d-none");
    full_page_obj = new fullpage("#fullpage", {
        verticalCentered: false,
        recordHistory: false,
        fitToSection: true,
        fitToSectionDelay: 100,
        css3: false,
        slidesNavigation: false,
        slidesNavPosition: "bottom",
        navigation: true,
        navigationPosition: "right",
        onLeave: function(origin) {
            if (origin.index == 0) {
                $("#particles-js").hide();
                $("#astronaut").addClass("d-none");
                $("#planet").addClass("d-none");
            }
        },
        afterLoad: function(origin, destination) {
            if (destination.index == 0) {
                $("#particles-js").show();
                $("#astronaut").removeClass("d-none");
                $("#planet").removeClass("d-none");
            }
        }
    });
    $('video[name="media"]').autoplay = false;
    $("#language").on("change", function() {
        window.location.href = "http://pantel.me/?lang=" + $(this).val();
    });
    $(".app").on("click", function() {
        var target_platform = $(this).attr("data-target");
        if (target_platform == "web") window.open("/web");
    });
    window_adapter();
    $(window).resize(window_adapter);
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 355,
                density: {
                    enable: true,
                    value_area: 789.1476416322727
                }
            },
            color: {
                value: "#D490AF"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: .48927153781200905,
                random: false,
                anim: {
                    enable: true,
                    speed: .3,
                    opacity_min: 0,
                    sync: false
                }
            },
            size: {
                value: 2,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0,
                    sync: false
                }
            },
            line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: .4,
                width: 1
            },
            move: {
                enable: true,
                speed: .2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "bubble"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 83.91608391608392,
                    size: 1,
                    duration: 3,
                    opacity: 1,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
    var count_particles, stats, update;
    update = function() {
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
});

function window_adapter() {
    var device_height = $(window).height();
    $(".section").css("height", device_height);
    full_page_obj.reBuild();
}

function mobile_menu(target) {
    if (target.style.display === "block") {
        target.style.display = "none";
    } else {
        target.style.display = "block";
    }
}

function is_mobile_browser() {
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
    } else {
        return false;
    }
}
