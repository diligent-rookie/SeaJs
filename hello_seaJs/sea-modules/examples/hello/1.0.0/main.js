define("examples/hello/1.0.0/main", ["./spinning", "jquery"], function (a) {
    var b = a("./spinning"),
        c = new b("#container");
    c.render()
}), define("examples/hello/1.0.0/spinning", ["jquery"], function (a, b, c) {
    function d(a) {
        this.container = f(a), this.icons = this.container.children(), this.spinnings = []
    }

    function e(a) {
        return Math.random() * a
    }
    var f = a("jquery");
    c.exports = d, d.prototype.render = function () {
        this._init(), this.container.css("background", "none"), this.icons.show(), this._spin()
    }, d.prototype._init = function () {
        var a = this.spinnings;
        return f(this.icons).each(function (b) {
            function c() {
                h.css("transform", "rotate(" + g + "deg)")
            }
            var d, g = e(360),
                h = f(this);
            h.css({
                top: e(40),
                left: 50 * b + e(10),
                zIndex: 1e3
            }).hover(function () {
                h.fadeTo(250, 1).css("zIndex", 1001).css("transform", "rotate(0deg)")
            }, function () {
                h.fadeTo(250, .6).css("zIndex", 1e3), d && clearTimeout(d), d = setTimeout(c, Math.ceil(e(1e4)))
            }), a[b] = c
        }), this
    }, d.prototype._spin = function () {
        return f(this.spinnings).each(function (a, b) {
            setTimeout(b, Math.ceil(e(3e3)))
        }), this
    }
});