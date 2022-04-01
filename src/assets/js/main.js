(function ($) {
    "use strict";
    var $window = $(window);

    $window.on('load', function () {
        var showResponsiveMenu = $(".menu-bars");
        var hideResponsiveMenu = $(".close-responsive-sidebar");
        var hideResponsiveMenu2 = $(".responsive-sidebar .sidebar-menu li a");

        // Typing
        if ($(".typed").length) {
            $(".typed").typed({
                strings: ["WordPress Developer", "Front-End Developer"],
                // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
                stringsElement: null,
                // typing speed
                typeSpeed: 100,
                // time before typing starts
                startDelay: 100,
                // backspacing speed
                backSpeed: 50,
                // time before backspacing
                backDelay: 800,
                // loop
                loop: true,
                // false = infinite
                // show cursor
                showCursor: false,
                // character for cursor
                cursorChar: "|",
                // attribute to type (null == text)
                attr: null,
                // either html or text
                contentType: 'html',
                // call when done callback function
                callback: function () { },
                // starting callback function before each string
                preStringTyped: function () { },
                //callback for every typed string
                onStringTyped: function () { },
                // callback for reset
                resetCallback: function () { }
            });
        }


        // Isotope Filter
        if ($(".grid").length) {
            $('.grid').isotope({
                itemSelector: '.grid-item',
            });
        }

        // filter items on button click
        if ($(".filter-button-group").length) {
            $('.filter-button-group').on('click', 'li', function () {
                var filterValue = $(this).attr('data-filter');
                $('.grid').isotope({ filter: filterValue });
                $('.filter-button-group li').removeClass('active');
                $(this).addClass('active');
            });
        }

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                $(".header-wrapper").addClass("active");
                $(".back-to-top").show(200);
            } else {
                $(".header-wrapper").removeClass("active");
                $(".back-to-top").hide(200);
            }
        });


        showResponsiveMenu.on('click', function () {
            $("body").addClass('active-responsive-menu');
        });
        hideResponsiveMenu.on('click', function () {
            $("body").removeClass('active-responsive-menu');
        });
        hideResponsiveMenu2.on('click', function () {
            $("body").removeClass('active-responsive-menu');
        });



        // Particle.js
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 20,
                    "density": {
                        "enable": true,
                        "value_area": 380
                    }
                },
                "color": {
                    "value": ["#ffffff", "#e3872d", "#02af00"]
                },
                "shape": {
                    "type": ["circle", "triangle", "polygon"],
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.3,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 60,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 6,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 430,
                        "size": 40,
                        "duration": 4,
                        "opacity": 9,
                        "speed": 6
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });


        /* ---- stats.js config ---- */

        var count_particles, stats, update;
        stats = new Stats;
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
        count_particles = document.querySelector('.js-count-particles');
        update = function () {
            stats.begin();
            stats.end();
            if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
                count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
            }
            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);


    });

})(jQuery);