// window.addEventListener('scroll', function() {
//     var element = document.getElementById('circle-1');
//     var position = element.getBoundingClientRect().top;
//     var screenHeight = window.innerHeight;

//     if (position < screenHeight) {
//         element.classList.add('animate__slideInUp');
//     } else {
//         element.classList.remove('animate__slideInUp');
//     }
// });


// let textArea = document.getElementById("textArea");
// let characters = document.getElementById("characters");
// let words = document.getElementById("words");
// let sentences = document.getElementById("sentences");
// let paragraph = document.getElementById("paragraph");

// textArea.addEventListener("input", () => {
//     characters.textContent = textArea.value.length;
//     let text = textArea.value.trim();

//     words.textContent = text.split(/\s+/).filter((items) => items).length;

//     sentences.textContent = text.split(/[.|!|?]+/g).length-1;

//     paragraph.textContent = text.replace(/\n\$/gm , ' ').split(/\n/).length;

// } );


$(document).ready(function(){
    $(".main-animate").waypoint(function(){
        $(".main-animate").addClass(
            "animate__animated animate__fadeInUp"
        )
    }, {
        offset: "50%"
    })
})

$(document).ready(function(){
    $(".circle-animate").waypoint(function(){
        $(".circle-animate").addClass(
            "animate__animated animate__fadeInUp"
        )
    },{
    
    })
})


$(document).ready(function(){
    $(".edu-animate").waypoint(function(){
        $(".edu-animate").addClass(
            "animate__animated animate__fadeInUp"
        )
    },{
        offset: "70%"
    })
})

$(document).ready(function(){
    $(".skill-animate").waypoint(function(){
        $(".skill-animate").addClass(
            "animate__animated animate__fadeInUp"
        )
    },{
        offset: "70%"
    })
})

$(document).ready(function(){
    $(".pp-animate").waypoint(function(){
        $(".pp-animate").addClass(
            "animate__animated animate__fadeInLeft"
        )
    },{
        offset: "70%"
    })
})

$(document).ready(function(){
    $(".pp2-animate").waypoint(function(){
        $(".pp2-animate").addClass(
            "animate__animated animate__fadeInLeft"
        )
    },{
        offset: "70%"
    })
})

$(document).ready(function(){
    $(".pp3-animate").waypoint(function(){
        $(".pp3-animate").addClass(
            "animate__animated animate__fadeInLeft"
        )
    },{
        offset: "70%"
    })
})

$(document).ready(function(){
    $(".pp4-animate").waypoint(function(){
        $(".pp4-animate").addClass(
            "animate__animated animate__fadeInLeft"
        )
    },{
        offset: "70%"
    })
})

$(document).ready(function(){
    $(".pi1-animate").waypoint(function(){
        $(".pi1-animate").addClass(
            "animate__animated animate__fadeInRight"
        )
    },{
        offset: "70%"
    })
})

$(document).ready(function(){
    $(".pi2-animate").waypoint(function(){
        $(".pi2-animate").addClass(
            "animate__animated animate__fadeInRight"
        )
    },{
        offset: "70%"
    })
})

$(document).ready(function(){
    $(".pi3-animate").waypoint(function(){
        $(".pi3-animate").addClass(
            "animate__animated animate__fadeInRight"
        )
    },{
        offset: "70%"
    });
});

$(document).ready(function(){
    $(".pi4-animate").waypoint(function(){
        $(".pi4-animate").addClass(
            "animate__animated animate__fadeInRight"
        )
    },{
        offset: "70%"
    });
});