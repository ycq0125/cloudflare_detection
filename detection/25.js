
window._cf_chl_ctx = {
    '6': {
        "i": "IHCLllHqFKQ=",
        "h": "2435bf196860801",
        "tH": "",
        "t": -1632366883536,
        "cc": 0,
        "nh": 1.4741086259051062,
        "nv": 1.6126726319708553,
        "mh": 5,
        "mv": 3,
        "ah": "",
        "av": ""
    },
    "chC": 6
};


(function (chl_done) {
    var ctx = window["_cf_chl_ctx"][window["_cf_chl_ctx"]["chC"]];
    ctx["cc"] = 0;
    ctx["nh"] = 941083981 / 163750640;
    ctx["nv"] = 858599503 / 453995241;
    ctx["mh"] = 4;
    ctx["mv"] = 5;
    ctx["ah"] = "";
    ctx["av"] = "";
    var cff = document["getElementById"]("challenge-form");

    var gm = function () {
        return new Date().getTime();
    };

    var mhq = document["createElement"]("marquee");
    mhq["innerHTML"] = "&nbsp;";
    mhq["direction"] = "down";
    mhq["width"] = "10";
    mhq["height"] = "10";
    mhq["behavior"] = "alternate";
    mhq["id"] = "_mhq";

    mhq["onbounce"] = function () {
        var k = gm();

        if (!this.k) {
            this.k = gm();
            return;
        } else {
            var _n = gm();

            ctx["ah"] += ctx["nh"] * (_n - this["k"]) + ",";
        }
    };

    mhq["onstart"] = function () {
        ++ctx["cc"];
    };

    mhq["onfinish"] = function () {
        ctx["ah"] = ctx["ah"]["slice"](0, -1);
        done();
    };

    mhq["loop"] = 4;
    cff["appendChild"](mhq);
    var mvq = document["createElement"]("marquee");
    mvq["innerHTML"] = "&nbsp;";
    mvq["direction"] = "down";
    mvq["width"] = "20";
    mvq["height"] = "20";
    mvq["behavior"] = "alternate";
    mvq["id"] = "_mvq";

    mvq["onfinish"] = function () {
        done();
    };

    mvq["onstart"] = function () {
        ctx["cc"]++;
    };

    mvq["onbounce"] = function () {
        var k = gm();

        if (!this["k"]) {
            this["k"] = gm();
            return;
        } else {
            var _n = gm();

            ctx["av"] += ctx["nv"] * (_n - this["k"]) + ",";
        }
    };

    mvq["loop"] = 5;
    cff["appendChild"](mvq);

    function done() {
        var cc = ++ctx["cc"];

        if (cc == 4) {
            cff["removeChild"](mhq);
            cff["removeChild"](mvq);
            chl_done();
        }
    }
})(function () {
    // _["qNgWqDcx"] = "aBNTWzfK";

    // _["life goes on"]();
    console.log(window["_cf_chl_ctx"][window["_cf_chl_ctx"]["chC"]])
});