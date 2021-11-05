const util = require('util');
const HistoryError = function (msg, constr) {
    Error.captureStackTrace(this, constr || this);
    this.message = msg || 'Error'
};
util.inherits(HistoryError, Error);

history = {
    length: 1
};
history.replaceState = function (stateObj, title, url) {
    if ('p' in stateObj) {
        HistoryError.prototype.name = 'NS_ERROR_ILLEGAL_VALUE';
        throw new HistoryError()
    }
    if (url.includes('cloudflarecaptcha')) {
        HistoryError.prototype.name = 'SecurityError';
        throw new HistoryError()
    }
};
history.scrollRestoration = 'auto';
window = {location: {href: "aaaa"}};
window._cf_chl_ctx = {
    "6": {
        "i": "qhFU90wvg8c=",
        "h": "1de28f593748e86",
        "tH": "",
        "t": -1632533161985
    },
    "chC": 6,
};
document = {title: ''};
(function (chl_done) {
    var current_loc = window.location.href;
    window._cf_chl_ctx[window._cf_chl_ctx.chC].hL = 93301 + (history && typeof history.length != "undefined" ? history.length : -1);

    function getStr(size) {
        return new Array(size).join("A");
    }

    if (window._cf_chl_ctx[window._cf_chl_ctx.chC].hL - 93301 !== -1) {
        window._cf_chl_ctx[window._cf_chl_ctx.chC].sR = history && typeof history.scrollRestoration != "undefined" ? history.scrollRestoration : "";
        window._cf_chl_ctx[window._cf_chl_ctx.chC].iT = document.title;

        try {
            var lObj = getStr(1024 * 1024 * 2);
            history.replaceState({
                chlID: 0xDEAD,
                p: lObj
            }, "T:EEEE");
            window._cf_chl_ctx[window._cf_chl_ctx.chC].nEE = "np";
        } catch (e) {
            console.log(e.name);
            window._cf_chl_ctx[window._cf_chl_ctx.chC].nEE = e.name || e.message;
        }

        try {
            history.replaceState({
                chlID: 0xC0FFEE
            }, "T:YYYY", "https://" + Math.random().toString(36).substring(7) + ".cloudflarecaptcha.com/");
            window._cf_chl_ctx[window._cf_chl_ctx.chC].oEE = "np";
        } catch (e) {
             console.log(e.name);
            window._cf_chl_ctx[window._cf_chl_ctx.chC].oEE = e.name || e.message;
        } finally {
            history.replaceState({}, "", current_loc);
        }
    }

    window._cf_chl_ctx[window._cf_chl_ctx.chC].os = 93301;
    setTimeout(function () {
        chl_done();
    }, 100);
})(function () {
    // _["fgSDxpeo"] = "grQbgxyA";

    // _["life goes on"]();
});