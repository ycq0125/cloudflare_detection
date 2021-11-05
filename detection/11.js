(function (done) {
    (function () {
        var fcfs = function (inst, cb, args) {
            inst.i = (inst.i ? inst.i : 0) + 1;

            if (inst.i === 1) {
                cb(args);
            }
        };

        var inst = {};
        var blobURL = window.URL.createObjectURL(new window.Blob(["(function(){ var workerData = {platform: navigator.platform,languages: navigator.languages};postMessage(workerData);})()"], {
            type: "application/javascript"
        }));
        var w = new window.Worker(blobURL);

        w.onmessage = function (msg) {
            var workerData = msg.data;
            var a = 0;

            for (prop in workerData) {
                if (JSON.stringify(navigator[prop]) == JSON.stringify(workerData[prop])) {
                    a++;
                }
            }

            fcfs(inst, done, {
                a: a
            });
        };

        window.URL.revokeObjectURL(blobURL);
        setTimeout(function () {
            fcfs(inst, done, {
                a: -1
            });
        }, 500);
    })();
})(function (tc) {
    console.log(tc)
    // CMqXxwSRd[CMqXxwSRd[0]] += +(tc.a === 2) * 2.257366538198814;
    // CMqXxwSRd[CMqXxwSRd[0]] = CMqXxwSRd[CMqXxwSRd[0]].toFixed(10);
    // ;
    // CMqXxwSRd[0]++;
    // pqQDHAUYr = "rCGwVVmo";
    // nixAuSXYe();
});