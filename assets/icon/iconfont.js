;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-fangda" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M887.345132 841.676511 693.21883 651.110291c105.86205-126.051881 99.553367-314.941925-18.97005-433.485809-125.242446-125.238352-329.021595-125.238352-454.259948 0-125.243469 125.234259-125.243469 328.989873 0 454.224132 116.684536 116.680443 301.536614 124.628462 427.53733 23.877827l195.090257 191.512778c11.434423 11.223622 29.798676 11.053754 41.022299-0.378623l4.085038-4.16281C898.947378 871.264387 898.776486 852.89911 887.345132 841.676511zM265.237385 626.599038c-100.291171-100.282984-100.291171-263.445064 0-363.728048 100.287077-100.287077 263.467577-100.287077 363.757724 0 100.265588 100.284007 100.265588 263.445064 0 363.719862C528.704962 726.883045 365.524462 726.883045 265.237385 626.599038z"  ></path>' +
    '' +
    '<path d="M866.508571 692.830485"  ></path>' +
    '' +
    '<path d="M638.988718 412.752602 479.086891 412.752602 479.086891 252.851798 415.12616 252.851798 415.12616 412.752602 255.225357 412.752602 255.225357 476.714356 415.12616 476.714356 415.12616 636.615159 479.086891 636.615159 479.086891 476.714356 638.988718 476.714356Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)