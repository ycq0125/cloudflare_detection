(function (chl_done) {
    var a, b, c, d, e, f, g, h, i;
    a = "styleqkeysq_cf_chl_ctxqcontentWindowqbooleanqlengthqhasOwnPropertyqisNaNqundefinedqsymbolqcontentDocumentq[object Array]qobjectqgetOwnPropertyNamesqconcatqObjectqisArrayqdisplay: noneqbigintqindexOfqFunctionqtabIndexqArrayqnameqfunctionqstringqspliceqappendChildqbodyqd.vatvygetElementsByNameqgetPrototypeOfqd.cookieqNS_ERROR_NOT_IMPLEMENTEDqprototypeqnavigatorqcallqtoStringq[native code]qpushqcreateElementqsortqnumberqcatchqremoveChild".split("q"), function (b, c, d) {
        d = function (e) {
            for (; --e; b["push"](b["shift"]())) ;
        }, d(++c);
    }(a, 487), b = function (c, d) {
        var e;
        return c = c - 0, e = a[c], e;
    }, c = function c(j, k) {
        return k instanceof j["Function"] && j["Function"]["prototype"][b("0x21")]["call"](k)["indexOf"]("[native code]") > 0;
    }, d = function d(j, k) {
        if (window["Array"] && window["Array"]["isArray"]) return j["Array"]["isArray"](k);
        return j["Object"]["prototype"][b("0x21")]["call"](k) === "[object Array]";
    }, e = function e(j, l, m) {
        try {
            return l[m]["catch"](function () {
            }), "p";
        } catch (n) {
        }

        try {
            if (l[m] == null) return l[m] === undefined ? "u" : "x";
        } catch (p) {
            return "i";
        }

        if (d(j, l[m])) return "a";
        if (window["Array"] && l[m] === j["Array"]) return "A";

        switch (typeof l[m]) {
            case "function":
                return c(j, l[m]) ? "N" : "f";

            case "object":
                return "o";

            case "string":
                return "s";

            case "undefined":
                return "u";

            case "symbol":
                return "z";

            case "number":
                return "n";

            case "bigint":
                return "I";

            case "boolean":
                return "b";

            default:
                return "?";
        }
    }, f = function f(j, l, m, n) {
        var p;
        if (p = function p(x, y) {
            !Object["prototype"]["hasOwnProperty"]["call"](n, y) && (n[y] = []), n[y]["push"](x);
        }, l === null || l === undefined) return n;
        var q = [];

        for (var r in l) {
            q["push"](r);
        }

        if (Object["getOwnPropertyNames"] && (q = q["concat"](j["Object"]["getOwnPropertyNames"](l))), Object["keys"] && Object["getPrototypeOf"]) {
            var s;
            s = j["Object"]["getPrototypeOf"](l), s != null && (q = q["concat"](Object["keys"](s)));
        }

        var t;

        for (q = function (x, y) {
            for (x["sort"](), y = 0; y < x["length"]; x[y] === x[y + 1] ? x["splice"](y + 1, 1) : y += 1) ;

            return x;
        }(q), t = 0; t < q["length"]; t++) {
            var u = q[t];

            try {
                var v;

                if (v = e(j, l, u), v === "i" || v === "x" || v === "u" || v === "p") {
                    p(m + u, v);
                    continue;
                }

                var w;
                if (w = v === "s" && !j["isNaN"](l[u]), w) continue; else m + u == "d.cookie" ? p(m + u, v) : m + u == "d.vatvygetElementsByName" ? p(m + u, l[u][b(_[198195 ^ 198275])]()) : v === "n" || v === "s" || v === "a" || v === "b" ? p(m + u, l[u]) : p(m + u, v);
            } catch (x) {
                throw x["name"] === "NS_ERROR_NOT_IMPLEMENTED" && p(m + u, "f"), x;
            }
        }

        return n;
    },
        g = document["createElement"]("iframe"),
        g["style"] = "display: none",
        g["tabIndex"] = "-1",
        document["body"]["appendChild"](g),
        h = g["contentWindow"],
        i = {},
        i = f(h, h, "", i),
        i = f(h, h["navigator"], "n.", i),
        i = f(h, g["contentDocument"], "d.", i),
        document["body"]["removeChild"](g),
        console.log(i)
        // window["_cf_chl_ctx"][window["_cf_chl_ctx"]["chC"]]["a"] = i;
})(function () {
    // _["LreUMJPa"] = "xxKIkaqU";

    // _["life goes on"]();
});