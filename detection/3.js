// todo:猜想更改成firefox，window["navigator"]["plugins"] --> PluginArray { length: 0 }
const window = global;

(function (chl_done) {
    var a, b, f, g, h, k;

    if (a = "[object Array]q_cf_chl_ctxqd.vatvygetElementsByNameqplugqisArrayqstringqdescriptionqindexOfqobjectqfunctionqcatchqprototypeqnavigatorqconcatqpluginsqisNaNqtypequndefinedqlengthqnumberqcallqFunctionqArrayqgetPrototypeOfqnameqsuffixesqpushqd.cookieqbooleanqchCqbigintqhasOwnPropertyqNS_ERROR_NOT_IMPLEMENTEDqkeysqgetOwnPropertyNamesqtoStringqObjectq[native code]qspliceqmimeTypesqsymbol".split("q"), function (b, c, d) {
        d = function (e) {
            for (; --e; b["push"](b["shift"]())) ;
        }, d(++c);
    }(a, 304), b = function (c, d) {
        var e;
        return c = c - 0, e = a[c], e;
    }, f = function f(t, u) {
        return u instanceof t["Function"] && t["Function"]["prototype"]["toString"]["call"](u)["indexOf"]("[native code]") > 0;
    }, g = function g(t, u) {
        if (window["Array"] && window["Array"]["isArray"]) return t["Array"]["isArray"](u);
        return t["Object"]["prototype"]["toString"]["call"](u) === "[object Array]";
    }, h = function h(t, u, v) {
        try {
            return u[v]["catch"](function () {
            }), "p";
        } catch (w) {
        }

        try {
            if (u[v] == null) return u[v] === undefined ? "u" : "x";
        } catch (x) {
            return "i";
        }

        if (g(t, u[v])) return "a";
        if (window["Array"] && u[v] === t["Array"]) return "A";

        switch (typeof u[v]) {
            case b(_[198195 ^ 198275]):
                return f(t, u[v]) ? "N" : "f";

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
    }, k = function k(t, u, v, w) {
        var x;
        if (x = function x(F, G) {
            !Object["prototype"]["hasOwnProperty"]["call"](w, G) && (w[G] = []), w[G]["push"](F);
        }, u === null || u === undefined) return w;
        var y = [];

        for (var z in u) {
            y["push"](z);
        }

        if (Object["getOwnPropertyNames"] && (y = y["concat"](t["Object"]["getOwnPropertyNames"](u))), Object["keys"] && Object["getPrototypeOf"]) {
            var A;
            A = t["Object"]["getPrototypeOf"](u), A != null && (y = y["concat"](Object["keys"](A)));
        }

        var B;

        for (y = function (F, G) {
            for (F["sort"](), G = 0; G < F["length"]; F[G] === F[G + 1] ? F["splice"](G + 1, 1) : G += 1) ;

            return F;
        }(y), B = 0; B < y["length"]; B++) {
            var C = y[B];

            try {
                var D;

                if (D = h(t, u, C), D === "i" || D === "x" || D === "u" || D === "p") {
                    x(v + C, D);
                    continue;
                }

                var E;
                if (E = D === "s" && !t["isNaN"](u[C]), E) continue; else v + C == "d.cookie" ? x(v + C, D) : v + C == "d.vatvygetElementsByName" ? x(v + C, u[C]["toString"]()) : D === "n" || D === "s" || D === "a" || D === "b" ? x(v + C, u[C]) : x(v + C, D);
            } catch (F) {
                throw F["name"] === "NS_ERROR_NOT_IMPLEMENTED" && x(v + C, "f"), F;
            }
        }

        return w;
    },
    window["navigator"] && window["navigator"]["plugins"] && window["navigator"]["plugins"]["length"] > 0) {
        var l;

        for (window["_cf_chl_ctx"][window["_cf_chl_ctx"]["chC"]]["plugins"] = "1", window["_cf_chl_ctx"][window["_cf_chl_ctx"]["chC"]]["plug"] = new Array(), l = 0; l < window["navigator"]["plugins"]["length"]; l++) {
            var m;

            if (m = window["navigator"]["plugins"][l], !m) {
                var n;
                n = {}, n["name"] = false, n["mimeTypes"] = new Array(), window["_cf_chl_ctx"][window["_cf_chl_ctx"]["chC"]]["plug"]["push"](n);
            } else {
                var o, p, q;

                for (o = {}, o["name"] = m["name"], o["description"] = m["description"], o["mimeTypes"] = new Array(), p = o, q = 0; q < m["length"]; q++) {
                    var r;

                    if (r = m[q], r && typeof r === "object") {
                        var s;
                        s = {}, s["type"] = r["type"], s["suffixes"] = r["suffixes"], p["mimeTypes"]["push"](s);
                    }
                }

                window["_cf_chl_ctx"][window["_cf_chl_ctx"]["chC"]]["plug"]["push"](p);
            }
        }
    } else
        window["_cf_chl_ctx"][window["_cf_chl_ctx"]["chC"]]["plugins"] = "2";
})(function () {
    // _["LreUMJPa"] = "xxKIkaqU";

    // _["life goes on"]();
});