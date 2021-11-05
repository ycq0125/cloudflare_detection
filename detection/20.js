// { s: 0, ps: 5233664, ex: "QuotaExceededError" } firefox
// localStorage不同版本应该有不同的储存限制 5242000


window["_cf_chl_ctx"] = {
    "1": {
        "i": "eko7JRUw+v8=",
        "h": "2f356869b6f1f3c",
        "tH": "",
        "t": 31074,
        "a": "3/1.8118271264/1.7271072743a",
        "iH": [
            "e55d2f984d42a6c",
            "b8be6e3a57178f7"
        ],
        "ix": "g4Smew=="
    },
    "2": {
        "i": "LxltJh1jr60=",
        "h": "yes",
        "tH": "",
        "t": -1631857531554
    },
    "chReq": "non-interactive",
    "cNounce": "8753",
    "cvId": "2",
    "chC": 2,
    "chCAS": 0,
    "oV": 1,
    "cRq": {
        "ru": "aHR0cHM6Ly93d3cuZ251bGEuY2Mv",
        "ra": "TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkzLjAuNDU3Ny44MiBTYWZhcmkvNTM3LjM2",
        "rm": "R0VU",
        "d": "UeOmmm67Fyo5rNCRveRtRgWSlMMSyM8JCoXydWYf0F9NRQCS7lYcGy+olx2wJKltwYoDWCaowGF7IpD9+AFhleNr9CU14OUKQB2Pn+SQuGeKqQI7cC0jyLogCDUMoLBsNIDBzlR+xseBURzZZTR4Z1upYszAP+LFdFnUsI5TMEoO4cObv/HYV1ow14pWTG9f+26ieOPis53ruj9eCjzMwX2pWpD+6y/PZZqMSK7RdFvDH3FN2T0bgQw7xh9YBryUpMbFCpDyOAL8IMnRO4HdAV5UuEgthvX/OuItlRsBzokCxei47IHUr71dccMWAcz3JnJlwq1+21iXGtzC7kbSB8sFv5X0B/3EGkffQroz5N1v65psZfoGfad81mNliod5Ult41tljTZcF0le7Zt7nIvCibUGDdQ4xM+7hpKQUQRMCSu33rXYUw/JccyPE8Nr7BlB98Xdc1no9/kO3PrI5rhnWgQJuUEuvMVpU3AFmPK6At/cBV6wLKClaMIuODpdfgx/x6sGa4HIwOKuEU+0oN/MqsE/mFTOteABS3Bu4cV2nkVQz3ify2DM4AKqhIpqH41mH4Y35CipQFGbUNEfnjV/j+vY4HnAeGoyUOAUnBmwLLVc/zUpfhBzLduhc3xY6gCOTi9AeJ8vXbo+TsZIR3xG5RwNFrEM961gcNlQerQvgXVM4GdSKzqKLY7PUWiZu",
        "t": "MTYzMTg1NzIyNS45MjkwMDA=",
        "m": "Wjy+Y4B+RsY+zmShQTRULhuMO3Wk8YI6+TEHHq6UI7s=",
        "i1": "KqdL8v2ItVyBY7A5kAAfkA==",
        "i2": "GN9UDg86nDrxp8aLx0oR1Q==",
        "zh": "U09b4UzTxQ6kP4TUwrNfkohdb9fZq/nZAnUnMwtOt/k=",
        "uh": "1eXv0iet6DBS9oJnHsjoaRgwjcETgoBKEmVHzZYKqt4=",
        "hh": "maShymDgRKYCqWdpCRdIhF2i2UuTLqW6o5G0nalQcCI="
    }
};
(function (chl_done) {
    var a, b, f;
    a = "setItemA_cf_chl_ctxAnum_keysAchCAminAlengthAjoinAcf_chl_probe_A__storage_test__AkeyAremoveItemAsizeestAgetItemAlocalStorageAsessionStorageAname".split("A"),
        function (b, c, d) {
            d = function (e) {
                for (; --e; b.push(b.shift())) ;
            }, d(++c);
        }(a, 411),
        b = function (c, d, e) {
            return c = c - 0, e = a[c], e;
        },
        f = 0,
        setTimeout(function () {
            c("localStorage") && (window["_cf_chl_ctx"][window["_cf_chl_ctx"]["chC"]].ls = g(localStorage)), f++, h();
        }, 0),
        setTimeout(function () {
            c("sessionStorage") && (window["_cf_chl_ctx"][window["_cf_chl_ctx"]["chC"]].ss = g(sessionStorage)), f++, h();
        }, 0);

    function c(i) {
        try {
            var j, k;
            return j = window[i], k = "__storage_test__", j.setItem(k, k), j["removeItem"](k), true;
        } catch (l) {
            return false;
        }
    }

    function d(i) {
        return new Array(i)["join"]("A");
    }

    function e(j, n, m, l, k) {
        for (k = 0, m = 0; m < j["length"]; l = j["getItem"](localStorage["key"](m)), l && (k += l["length"]), m++) ;

        return n = {}, n["sizeest"] = k, n["num_keys"] = j["length"], n;
    }

    function g(k, v, u, t, r, r, r, q, p, o, n, m, l) {
        for (l = e(k), m = l["sizeest"], p = "", q = 1024, n = 0; n < 1024; n++) {
            r = "cf_chl_probe_" + n;

            try {
                if (m > 15728640) break;
                q = (k["setItem"](r, d(q)), m += q, Math["min"](2 * q, 10485760));
            } catch (w) {
                p = w[b("0x4")];
                break;
            }
        }

        for (o = 0; o < 1024; o++) {
            r = "cf_chl_probe_" + (n + o);

            try {
                k["setItem"](r, d(2048)), m += 2048;
            } catch (x) {
                p = x[b("0x4")];
                break;
            }
        }

        for (n = n + o; n >= 0; n--) {
            r = "cf_chl_probe_" + n;

            try {
                k["removeItem"](r);
            } catch (y) {
            }
        }

        return t = e(k), u = t["sizeest"], v = {}, v.s = u, v.ps = m, v.ex = p, v;
    }

    function h() {
        f === 2 && (window["_cf_chl_ctx"][window["_cf_chl_ctx"].chC].a = "s", setTimeout(chl_done, 0));
    }
})(function () {
    // _["PHcITsWE"] = "hSzujcDI";
    //
    // _["life goes on"]();
    console.log(window["_cf_chl_ctx"][window["_cf_chl_ctx"]["chC"]]);
});


