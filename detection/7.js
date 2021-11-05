(function (done) {
    (function () {
        var fcfs = function (inst, cb, args) {
            inst.i = (inst.i ? inst.i : 0) + 1;

            if (inst.i === 1) {
                cb(args);
            }
        };

        var inst = {};

        var _0xh = document.createElement("iframe");

        document.body.appendChild(_0xh);

        var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;

        var obj = document.createElement("object");
        obj.data = "data:application/pdf;base64,JVBERi0xLg10cmFpbGVyPDwvUm9vdDw8L1BhZ2VzPDwvS2lkc1s8PC9NZWRpYUJveFswIDAgMyAzXT4+XT4+Pj4+Pg==";

        obj.onload = function () {
            fcfs(inst, done, {
                a: 1,
                child: _0xh
            });
        };

        obj.onerror = function () {
            fcfs(inst, done, {
                a: 0,
                child: _0xh
            });
        };

        setTimeout(function () {
            fcfs(inst, done, {
                a: 2,
                child: _0xh
            });
        }, 250);

        _0xi.body.appendChild(obj);
    })();
})(function (tc) {
    // CMqXxwSRd[CMqXxwSRd[0]] *= +("" + tc.a !== "undefined") * 1.281935383633583;
    // CMqXxwSRd[CMqXxwSRd[0]] = CMqXxwSRd[CMqXxwSRd[0]].toFixed(10);
    // CMqXxwSRd[CMqXxwSRd[0]] += "" + ("" + JSON.stringify(tc.a));
    console.log(tc)
    document.body.removeChild(tc.child);
    ;
    // CMqXxwSRd[0]++;
    // pqQDHAUYr = "pcTdSVBm";
    // nixAuSXYe();
});
