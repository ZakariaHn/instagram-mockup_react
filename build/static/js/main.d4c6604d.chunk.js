(this["webpackJsonpinstagram-mockup-with-react"] =
  this["webpackJsonpinstagram-mockup-with-react"] || []).push([
  [0],
  {
    1: function (e) {
      e.exports = JSON.parse(
        '[{"id":1,"img":"./img/1.jpg"},{"id":2,"img":"./img/2.jpg"},{"id":3,"img":"./img/3.jpg"},{"id":4,"img":"./img/4.jpg"},{"id":5,"img":"./img/5.jpg"},{"id":6,"img":"./img/6.jpg"}]'
      );
    },
    13: function (e, a, t) {},
    14: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        l = t.n(n),
        r = t(3),
        i = t.n(r),
        c = t(4),
        m = t(5),
        s = t(7),
        o = t(6),
        u = function (e) {
          return l.a.createElement(
            "section",
            { className: "gallery" },
            l.a.createElement(
              "div",
              null,
              l.a.createElement("h4", null, "Posts"),
              l.a.createElement("h4", null, "IGTV"),
              l.a.createElement("h4", null, "TAGGED")
            ),
            l.a.createElement(
              "div",
              null,
              e.data.map(function (e) {
                var a = e.id,
                  t = e.img;
                return l.a.createElement("img", {
                  key: a,
                  src: t,
                  alt: "img",
                  className: "single-image",
                });
              })
            )
          );
        },
        g = function () {
          return l.a.createElement(
            "section",
            { className: "profile" },
            l.a.createElement(
              "div",
              { className: "profile-pic" },
              l.a.createElement("img", { src: "./img/7.jpg", alt: "alt" })
            ),
            l.a.createElement(
              "div",
              { className: "profile-infos" },
              l.a.createElement(
                "div",
                null,
                l.a.createElement("h2", null, "Dionysus"),
                l.a.createElement("button", null, "Follow"),
                l.a.createElement("button", null, "v"),
                l.a.createElement("button", null, ". . .")
              ),
              l.a.createElement(
                "div",
                null,
                l.a.createElement("h5", null, "4,532 posts"),
                l.a.createElement("h5", null, "201m followers"),
                l.a.createElement("h5", null, "1000 following")
              ),
              l.a.createElement(
                "div",
                null,
                l.a.createElement("h4", null, "Dionysus"),
                l.a.createElement(
                  "p",
                  { className: "bio" },
                  "also spelled Dionysos, also called Bacchus or (in Rome) Liber Pater, in Greco-Roman religion, a nature god of fruitfulness and vegetation, especially known as a god of wine and ecstasy."
                )
              )
            )
          );
        },
        E = function (e) {
          return l.a.createElement(
            "section",
            { className: "Profile-images" },
            e.data.map(function (e) {
              var a = e.id,
                t = e.img;
              return l.a.createElement("img", {
                key: a,
                src: t,
                alt: "img",
                className: "single-image",
              });
            })
          );
        },
        d = function () {
          return l.a.createElement(
            "nav",
            { className: "navBar" },
            l.a.createElement("h3", null, "Instagram"),
            l.a.createElement("input", {
              className: "searchField",
              placeholder: "search",
            }),
            l.a.createElement("div", null, "icons")
          );
        },
        p = t(1),
        f = (function (e) {
          Object(s.a)(t, e);
          var a = Object(o.a)(t);
          function t() {
            return Object(c.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(m.a)(t, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(d, null),
                    l.a.createElement(
                      "main",
                      null,
                      l.a.createElement(g, null),
                      l.a.createElement(E, { data: p }),
                      l.a.createElement(u, { data: p })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(l.a.Component);
      t(13);
      i.a.render(
        l.a.createElement(l.a.StrictMode, null, l.a.createElement(f, null)),
        document.getElementById("root")
      );
    },
    8: function (e, a, t) {
      e.exports = t(14);
    },
  },
  [[8, 1, 2]],
]);
//# sourceMappingURL=main.d4c6604d.chunk.js.map
