!(function() {
  'use strict'
  if (window.addEventListener && window.requestAnimationFrame && window.IntersectionObserver && window.CustomEvent) {
    var e = 'typist',
      t = [
        ['repeat', 1 / 0],
        ['sequence', null],
        ['cursor', 'cursor'],
        ['cursorShow', 1],
        ['delete', 0],
        ['delayStart', 0],
        ['delayType', 100],
        ['delayDelete', 50],
        ['delayVary', 0.5],
        ['delayEnd', 2e3]
      ],
      n = new (function() {
        var e = null,
          t = []
        ;(this.observe = function(n) {
          e ? e.observe(n) : t.push(n)
        }),
          (this.unobserve = function(n) {
            e
              ? e.unobserve(n)
              : (t = t.filter(function(e) {
                  return e !== n
                }))
          }),
          window.addEventListener(
            'load',
            function() {
              var n
              for (
                e = new IntersectionObserver(
                  function(e) {
                    e.forEach(function(e) {
                      var t = e.intersectionRatio
                      if (!(t > 0 && t < 1)) {
                        var n = new CustomEvent('typist', { detail: { element: e.target, inview: !!t } })
                        document.dispatchEvent(n)
                      }
                    })
                  },
                  { threshold: [0, 1] }
                );
                (n = t.shift());

              )
                e.observe(n)
            },
            !1
          )
      })(),
      i = function(i) {
        if (i && 1 === i.nodeType && i.dataset && !i.dataset[e]) {
          var r = this
          ;(i.dataset[e] = 1),
            s(i, r),
            (r.element = i),
            (r.text = (function() {
              var e,
                t = [],
                n = r.element.children
              for (e = 0; e < n.length; e++) i(n[e])
              return t.length || i(r.element), t.length ? t : null
              function i(e) {
                var n = { str: e.textContent.trim() }
                n.str && (s(e, n), t.push(n))
              }
            })()),
            r.text.length &&
              ((r.element.innerHTML = ''),
              (r.active = !1),
              (r.inview = !1),
              (r.item = 0),
              (r.chr = 0),
              (r.dir = 1),
              document.addEventListener(
                'typist',
                function(e) {
                  var t = e.detail
                  ;(t.element && t.element !== r.element) ||
                    (t.sequence && t.sequence !== r.sequence) ||
                    (void 0 !== t.inview && (r.inview = t.inview),
                    r.active ||
                      (r.sequence &&
                        r.element !== document.querySelector('[data-typist-sequence="' + r.sequence + '"]')) ||
                      (r.cursorShow && r.element.classList.add(r.cursor), r.go()))
                },
                !1
              ),
              n.observe(r.element))
        }
        function s(n, i) {
          t.forEach(function(t) {
            var s = t[0]
            ;(i[s] = n.dataset[e + s.substring(0, 1).toUpperCase() + s.substring(1)]),
              void 0 === i[s] && (i[s] = r[s] || t[1]),
              isNaN(i[s]) || (i[s] = +i[s])
          })
        }
      }
    ;(i.prototype.go = function(e) {
      var t = this
      if (((t.active = t.inview), t.inview)) {
        var i,
          r,
          s = t.text[t.item],
          o = s.str.length,
          a = (t.item + 1) % t.text.length,
          c = 0
        if (!e && s.delayStart && !t.chr && t.dir > 0)
          setTimeout(function() {
            t.go(!0)
          }, s.delayStart)
        else {
          if (
            ((t.chr += t.dir),
            (!t.chr || t.chr >= o) && (t.dir *= -1),
            t.chr || (t.item = a),
            (i = s.str.slice(0, t.chr)),
            -1 === t.dir && t.text.length > 1 && !s.delete && !t.text[a].str.indexOf(i) && ((t.item = a), (t.dir = 1)),
            t.chr >= o)
          )
            s.repeat && s.repeat--,
              (c = s.repeat ? s.delayEnd : 0),
              t.sequence &&
                ((r = new CustomEvent('typist', { detail: { sequence: t.sequence } })),
                (t.sequence = null),
                t.element.removeAttribute('data-typist-sequence'))
          else {
            var u = t.dir > 0 ? s.delayType : s.delayDelete
            c = Math.max(1, Math.round(2 * (Math.random() - 0.5) * s.delayVary * u) + u)
          }
          requestAnimationFrame(function() {
            ;(t.element.textContent = i),
              c
                ? setTimeout(function() {
                    t.go()
                  }, c)
                : (1 === s.cursorShow && t.element.classList.remove(t.cursor), n.unobserve(t.element)),
              r && document.dispatchEvent(r)
          })
        }
      }
    }),
      (window.Typist = i),
      window.addEventListener(
        'DOMContentLoaded',
        function() {
          for (var t = document.getElementsByClassName(e), n = 0; n < t.length; n++) new i(t[n])
        },
        !1
      )
  }
})()
