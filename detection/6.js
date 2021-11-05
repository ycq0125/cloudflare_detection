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

        _0xh.addEventListener("load", function () {
            _0xi.createElement("br");

            _0xi.createElement = function () {
                fcfs(inst, done, {
                    a: 1,
                    child: _0xh
                });
            };

            _0xi.createElement("p");

            fcfs(inst, done, {
                a: 0,
                child: _0xh
            });
        });

        setTimeout(function () {
            fcfs(inst, done, {
                a: 2,
                child: _0xh
            });
        }, 500);
    })();
})(function (tc) {
    // nGdpnh[nGdpnh[0]] += +!!tc.a * 3.2790367760460595;
    // nGdpnh[nGdpnh[0]] = nGdpnh[nGdpnh[0]].toFixed(10);
    console.log(tc);
    document.body.removeChild(tc.child);
    ;
    // nGdpnh[0]++;
    // pdTKtcLPg = "jAzdCfyE";
    // nhairCTnh();
});