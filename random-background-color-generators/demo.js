function addEventListener(e, t, n) {
    if (e.addEventListener) {
        e.addEventListener(t, n)
    } else {
        e.attachEvent("on" + t, function() {
            n.call(e)
        })
    }
}
function color_cycle() {
    var e = document.getElementById("title").getElementsByTagName("span");
    var t = document.getElementsByClassName("download")[0];
    for (var n = e.length - 1; n >= 0; n--) {
        e[n].style.color = Please.make_color({
            saturation: .7,
            value: .7
        })
    }
    t.style.color = Please.make_color({
        saturation: .7,
        value: .7
    })
}
function easeInOutQuad(e) {
    return e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e
}
function scrollTo(e, t, n, r) {
    function u(e, t) {
        return e < t ? e : t
    }
    function a(f) {
        var l = Date.now(),
            c = u(1, (l - i) / t),
            h = n(c);
        s.scrollTop = h * (e - o) + o;
        if (c < 1) requestAnimationFrame(a);
        else if (r) r()
    }
    var i = Date.now(),
        s = document.documentElement.scrollTop ? document.documentElement : document.body,
        o = s.scrollTop;
    if (o === e) {
        r();
        return
    }
    requestAnimationFrame(a)
}
function remove_first_child(e) {
    if (e.hasChildNodes()) {
        e.removeChild(e.childNodes[0])
    }
}(function() {
    var e = 0;
    var t = ["ms", "moz", "webkit", "o"];
    for (var n = 0; n < t.length && !window.requestAnimationFrame; ++n) {
        window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"]
    }
    if (!window.requestAnimationFrame) window.requestAnimationFrame = function(t, n) {
        var r = (new Date).getTime();
        var i = Math.max(0, 16 - (r - e));
        var s = window.setTimeout(function() {
            t(r + i)
        }, i);
        e = r + i;
        return s
    };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    }
})();
color_cycle();
window.setInterval(color_cycle, 3e3);
var make_color = document.getElementById("make-color");
addEventListener(make_color, "click", function() {
    remove_first_child(document.getElementById("make-color-demo"));
    document.getElementById("make-color-demo").style.background = Please.make_color()
});
var make_color_multiple = document.getElementById("make-color-multiple");
addEventListener(make_color_multiple, "click", function() {
    var e = document.getElementById("multiple-demo").getElementsByTagName("div");
    var t = Please.make_color({
        colors_returned: 4
    });
    for (var n = e.length - 1; n >= 0; n--) {
        remove_first_child(e[n]);
        e[n].style.background = t[n]
    }
});
var base_color = document.getElementById("base-color");
var base_color_picker = document.getElementById("base-color-picker");
addEventListener(base_color, "click", function() {
    remove_first_child(document.getElementById("base-color-demo"));
    document.getElementById("base-color-demo").style.background = Please.make_color({
        base_color: base_color_picker.value
    })
});
var grey_color = document.getElementById("grey-color");
addEventListener(grey_color, "click", function() {
    remove_first_child(document.getElementById("grey-color-demo"));
    document.getElementById("grey-color-demo").style.background = Please.make_color({
        greyscale: true
    })
});
var random_color = document.getElementById("random-color");
addEventListener(random_color, "click", function() {
    remove_first_child(document.getElementById("random-color-demo"));
    document.getElementById("random-color-demo").style.background = Please.make_color({
        golden: false,
        full_random: true
    })
});
var fiddle_hue = document.getElementById("fiddle-hue");
var fiddle_sat = document.getElementById("fiddle-sat");
var fiddle_val = document.getElementById("fiddle-val");
var fiddle_color = document.getElementById("fiddle-color");
addEventListener(fiddle_color, "click", function() {
    var e, t, n;
    if (fiddle_hue.value.length == 0) {
        e = null
    } else {
        e = parseInt(fiddle_hue.value);
        if (isNaN(e)) {
            e = null
        }
    }
    if (fiddle_sat.value.length == 0) {
        t = null
    } else {
        t = parseFloat(fiddle_sat.value);
        if (isNaN(t)) {
            t = null
        }
    }
    if (fiddle_val.value.length == 0) {
        n = null
    } else {
        n = parseFloat(fiddle_val.value);
        if (isNaN(n)) {
            n = null
        }
    }
    remove_first_child(document.getElementById("fiddle-color-demo"));
    document.getElementById("fiddle-color-demo").style.background = Please.make_color({
        golden: false,
        hue: e,
        saturation: t,
        value: n
    })
});
var scheme_color_picker = document.getElementById("scheme-color-picker");
var scheme_color = document.getElementById("scheme-color");
addEventListener(scheme_color, "click", function() {
    var e = document.getElementById("scheme-demo").getElementsByTagName("div");
    var t = Please.NAME_to_HSV(scheme_color_picker.value);
    var n = Please.make_scheme(t, {
        scheme_type: "ana",
        format: "rgb-string"
    });
    for (var r = 0; r < e.length; r++) {
        remove_first_child(e[r]);
        e[r].style.background = n[r]
    }
});
var demos = document.getElementsByClassName("demo");
for (var i = demos.length - 1; i >= 0; i--) {
    addEventListener(demos[i], "click", function() {
        var e = document.createTextNode(this.style.backgroundColor);
        remove_first_child(this);
        this.appendChild(e)
    })
}
var nav = document.getElementsByTagName("li");
var articles = document.getElementsByTagName("article");
for (var i = 0; i < nav.length; i++) {
    (function(e) {
        addEventListener(nav[e], "click", function() {
            scrollTo(articles[e].offsetTop, 300, easeInOutQuad)
        })
    })(i)
}