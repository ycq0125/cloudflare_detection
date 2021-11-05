(function (chl_done) {
    function hashMD5(val) {
        function md5cycle(x, k) {
            var a = x[0],
                b = x[1],
                c = x[2],
                d = x[3];
            a = ff(a, b, c, d, k[0], 7, -680876936);
            d = ff(d, a, b, c, k[1], 12, -389564586);
            c = ff(c, d, a, b, k[2], 17, 606105819);
            b = ff(b, c, d, a, k[3], 22, -1044525330);
            a = ff(a, b, c, d, k[4], 7, -176418897);
            d = ff(d, a, b, c, k[5], 12, 1200080426);
            c = ff(c, d, a, b, k[6], 17, -1473231341);
            b = ff(b, c, d, a, k[7], 22, -45705983);
            a = ff(a, b, c, d, k[8], 7, 1770035416);
            d = ff(d, a, b, c, k[9], 12, -1958414417);
            c = ff(c, d, a, b, k[10], 17, -42063);
            b = ff(b, c, d, a, k[11], 22, -1990404162);
            a = ff(a, b, c, d, k[12], 7, 1804603682);
            d = ff(d, a, b, c, k[13], 12, -40341101);
            c = ff(c, d, a, b, k[14], 17, -1502002290);
            b = ff(b, c, d, a, k[15], 22, 1236535329);
            a = gg(a, b, c, d, k[1], 5, -165796510);
            d = gg(d, a, b, c, k[6], 9, -1069501632);
            c = gg(c, d, a, b, k[11], 14, 643717713);
            b = gg(b, c, d, a, k[0], 20, -373897302);
            a = gg(a, b, c, d, k[5], 5, -701558691);
            d = gg(d, a, b, c, k[10], 9, 38016083);
            c = gg(c, d, a, b, k[15], 14, -660478335);
            b = gg(b, c, d, a, k[4], 20, -405537848);
            a = gg(a, b, c, d, k[9], 5, 568446438);
            d = gg(d, a, b, c, k[14], 9, -1019803690);
            c = gg(c, d, a, b, k[3], 14, -187363961);
            b = gg(b, c, d, a, k[8], 20, 1163531501);
            a = gg(a, b, c, d, k[13], 5, -1444681467);
            d = gg(d, a, b, c, k[2], 9, -51403784);
            c = gg(c, d, a, b, k[7], 14, 1735328473);
            b = gg(b, c, d, a, k[12], 20, -1926607734);
            a = hh(a, b, c, d, k[5], 4, -378558);
            d = hh(d, a, b, c, k[8], 11, -2022574463);
            c = hh(c, d, a, b, k[11], 16, 1839030562);
            b = hh(b, c, d, a, k[14], 23, -35309556);
            a = hh(a, b, c, d, k[1], 4, -1530992060);
            d = hh(d, a, b, c, k[4], 11, 1272893353);
            c = hh(c, d, a, b, k[7], 16, -155497632);
            b = hh(b, c, d, a, k[10], 23, -1094730640);
            a = hh(a, b, c, d, k[13], 4, 681279174);
            d = hh(d, a, b, c, k[0], 11, -358537222);
            c = hh(c, d, a, b, k[3], 16, -722521979);
            b = hh(b, c, d, a, k[6], 23, 76029189);
            a = hh(a, b, c, d, k[9], 4, -640364487);
            d = hh(d, a, b, c, k[12], 11, -421815835);
            c = hh(c, d, a, b, k[15], 16, 530742520);
            b = hh(b, c, d, a, k[2], 23, -995338651);
            a = ii(a, b, c, d, k[0], 6, -198630844);
            d = ii(d, a, b, c, k[7], 10, 1126891415);
            c = ii(c, d, a, b, k[14], 15, -1416354905);
            b = ii(b, c, d, a, k[5], 21, -57434055);
            a = ii(a, b, c, d, k[12], 6, 1700485571);
            d = ii(d, a, b, c, k[3], 10, -1894986606);
            c = ii(c, d, a, b, k[10], 15, -1051523);
            b = ii(b, c, d, a, k[1], 21, -2054922799);
            a = ii(a, b, c, d, k[8], 6, 1873313359);
            d = ii(d, a, b, c, k[15], 10, -30611744);
            c = ii(c, d, a, b, k[6], 15, -1560198380);
            b = ii(b, c, d, a, k[13], 21, 1309151649);
            a = ii(a, b, c, d, k[4], 6, -145523070);
            d = ii(d, a, b, c, k[11], 10, -1120210379);
            c = ii(c, d, a, b, k[2], 15, 718787259);
            b = ii(b, c, d, a, k[9], 21, -343485551);
            x[0] = add32(a, x[0]);
            x[1] = add32(b, x[1]);
            x[2] = add32(c, x[2]);
            x[3] = add32(d, x[3]);
        }

        function cmn(q, a, b, x, s, t) {
            a = add32(add32(a, q), add32(x, t));
            return add32(a << s | a >>> 32 - s, b);
        }

        function ff(a, b, c, d, x, s, t) {
            return cmn(b & c | ~b & d, a, b, x, s, t);
        }

        function gg(a, b, c, d, x, s, t) {
            return cmn(b & d | c & ~d, a, b, x, s, t);
        }

        function hh(a, b, c, d, x, s, t) {
            return cmn(b ^ c ^ d, a, b, x, s, t);
        }

        function ii(a, b, c, d, x, s, t) {
            return cmn(c ^ (b | ~d), a, b, x, s, t);
        }

        function md51(s) {
            txt = "";
            var n = s.length,
                state = [1732584193, -271733879, -1732584194, 271733878],
                i;

            for (i = 64; i <= s.length; i += 64) {
                md5cycle(state, md5blk(s.substring(i - 64, i)));
            }

            s = s.substring(i - 64);
            var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            for (i = 0; i < s.length; i++) tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);

            tail[i >> 2] |= 0x80 << (i % 4 << 3);

            if (i > 55) {
                md5cycle(state, tail);

                for (i = 0; i < 16; i++) tail[i] = 0;
            }

            tail[14] = n * 8;
            md5cycle(state, tail);
            return state;
        }

        function md5blk(s) {
            /* I figured global was faster.   */
            var md5blks = [],
                i;
            /* Andy King said do it this way. */

            for (i = 0; i < 64; i += 4) {
                md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
            }

            return md5blks;
        }

        var hex_chr = "0123456789abcdef".split("");

        function rhex(n) {
            var s = "",
                j = 0;

            for (; j < 4; j++) s += hex_chr[n >> j * 8 + 4 & 0x0F] + hex_chr[n >> j * 8 & 0x0F];

            return s;
        }

        function hex(x) {
            for (var i = 0; i < x.length; i++) x[i] = rhex(x[i]);

            return x.join("");
        }

        function md5(s) {
            return hex(md51(s));
        }

        function add32(a, b) {
            return a + b & 0xFFFFFFFF;
        }

        if (md5("hello") != "5d41402abc4b2a76b9719d911017c592") {
            function add32(x, y) {
                var lsw = (x & 0xFFFF) + (y & 0xFFFF),
                    msw = (x >> 16) + (y >> 16) + (lsw >> 16);
                return msw << 16 | lsw & 0xFFFF;
            }
        }

        return md5(val);
    }

    var globalThis = globalThis ? globalThis : this;

    function __cf_chl_fps(params, canvas, disablePromise) {
        function fingerprint(seed, canvasElt) {
            var area = {
                width: 300,
                height: 300
            };
            var rounds = 7;
            var offset = 199254740991;
            var multiplier = 157;
            var fontSizeFactor = 1.5;
            var maxShadowBlur = 20;
            var currentNumber = seed % offset;

            function nextFloat(maxBound) {
                currentNumber = multiplier * currentNumber % offset;
                return currentNumber / offset * maxBound;
            }

            function nextInt(maxBound) {
                return nextFloat(maxBound) | 0;
            }

            function addRandomCanvasGradient(context, area) {
                var x0 = nextInt(area.width);
                var y0 = nextInt(area.height);
                var r0 = nextInt(area.width / 10);
                var x1 = nextInt(area.width);
                var y1 = nextInt(area.height);
                var r1 = nextInt(area.width) + area.width;
                var canvasGradient = context.createRadialGradient(x0, y0, r0, x1, y1, r1);
                var cid = nextInt(colors.length);
                var c1 = colors[cid];
                canvasGradient.addColorStop(0, c1);
                var c2 = colors[(cid + 1) % colors.length];
                canvasGradient.addColorStop(1, c2);
                context.fillStyle = canvasGradient;
            }

            function generateRandomWord(wordLength) {
                var minAscii = 33;
                var maxAscii = 126;
                var range = maxAscii - minAscii;
                var wordGenerated = [];

                for (var i = 0; i < wordLength; i++) {
                    var asciiCode = minAscii + nextInt(range);
                    wordGenerated.push(String.fromCharCode(asciiCode));
                }

                return wordGenerated.join("");
            }

            var colors = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D", "#80B300", "#FAAE40", "#E6B3B3", "#6680B3", "#66991A", "#FF99E6", "#FF1A66", "#CCFF1A", "#E6331A", "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", "#66664D", "#CCCC00", "#E666FF", "#809980", "#1AB399", "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#9900B3", "#4D8066", "#4DB3FF", "#E6FF80", "#1AFF33", "#999933", "#FF3380", "#991AFF", "#66E64D", "#4D80CC", "#00E680", "#E64D66", "#4DB380", "#FF4D4D", "#99E6E6", "#6666FF", "#F38020", "#809900", "#404041"];
            var primitives = [function (context, area, step) {
                context.beginPath();
                var lx = area.width / 4;
                var ly = area.height / 4;
                var x = area.width / 2 - nextInt(lx / (step / 2 + 1));
                var y = area.height / 2 - nextInt(ly / (step / 2 + 1));
                var lr = Math.min(lx, ly) / (step / 2 + 1);
                var radius = lr + nextInt(lr);
                var startAngle = nextFloat(2 * Math.PI);
                var endAngle = (startAngle + nextFloat(1.75 * Math.PI) + 0.25 * Math.PI) % (2 * Math.PI);
                context.arc(x | 0, y | 0, radius | 0, startAngle, endAngle);
                context.stroke();
                return true;
            }, function (context, area, step) {
                context.shadowBlur = 1 + nextInt(maxShadowBlur);
                context.shadowColor = colors[nextInt(colors.length)];
                var wordLength = 5 - Math.max(step / 3, 3) + nextInt(4);
                var text = generateRandomWord(wordLength);
                context.font = area.height / ((step + 1) * fontSizeFactor) + "px aanotafontaa";
                var x = nextInt(area.width * 0.75);
                var y = area.height / 4 + nextInt(area.height * 0.75);

                if (nextFloat(1) < 0.5) {
                    context.strokeText(text, x, y);
                } else {
                    context.fillText(text, x, y);
                }

                return false;
            }, function (context, area, step) {
                context.shadowBlur = 1 + nextInt(maxShadowBlur);
                context.shadowColor = colors[nextInt(colors.length)];
                context.beginPath();
                var lx = area.width / rounds;
                var ly = area.height / rounds;
                var x = lx * step + nextInt(lx);
                var y = nextInt(ly);
                context.moveTo(x | 0, y | 0);
                var cp1x = nextInt(area.width);
                var cp1y = nextInt(area.height);
                var cp2x = nextInt(area.width);
                var cp2y = nextInt(area.height);
                var x1 = area.width - x;
                var y1 = area.height - y;
                context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x1 | 0, y1 | 0);
                context.stroke();
                return true;
            }, function (context, area, step) {
                context.shadowBlur = 1 + nextInt(maxShadowBlur);
                context.shadowColor = colors[nextInt(colors.length)];
                context.beginPath();
                var lx = area.width / rounds;
                var ly = area.height / rounds;
                var x = lx * step + nextInt(lx);
                var y = nextInt(ly);
                context.moveTo(x | 0, y | 0);
                var cpx = area.width / 2 + nextInt(area.width);
                var cpy = nextInt(area.height / 2);
                var x1 = area.width - x;
                var y1 = area.height - y;
                context.quadraticCurveTo(cpx | 0, cpy | 0, x1 | 0, y1 | 0);
                context.stroke();
                return true;
            }, function (context, area, step) {
                context.beginPath();
                var lx = area.width / 4;
                var ly = area.height / 4;
                var x = area.width / 2 - nextInt(lx / (step / 2 + 1));
                var y = area.height / 2 - nextInt(ly / (step / 2 + 1));
                var lr = Math.min(lx, ly) / (step / 2 + 1);
                var radiusX = lr + nextInt(lr);
                var radiusY = lr + nextInt(lr);
                var rotation = nextFloat(2 * Math.PI);
                var startAngle = nextFloat(2 * Math.PI);
                var endAngle = (startAngle + nextFloat(1.75 * Math.PI) + 0.25 * Math.PI) % (2 * Math.PI);
                context.ellipse(x | 0, y | 0, radiusX | 0, radiusY | 0, rotation, startAngle, endAngle);
                context.stroke();
                return true;
            }];

            try {
                canvasElt.width = area.width;
                canvasElt.height = area.height;
                var context = canvasElt.getContext("2d");
                var used = Array.from(primitives, function () {
                    return 0;
                });
                var textPrimitiveIndex = 1;
                used[textPrimitiveIndex] = 1;
                var maxUsed = Math.floor(rounds * 2 / primitives.length);
                var n = rounds - 1;

                for (var i = 0; i < n; i++) {
                    addRandomCanvasGradient(context, area);
                    var prim = nextInt(primitives.length);

                    while (used[prim] >= maxUsed) {
                        prim = (prim + 1) % primitives.length;
                    }

                    var randomPrimitive = primitives[prim];

                    if (randomPrimitive(context, area, i)) {
                        context.fill();
                    }

                    context.shadowBlur = 0;
                    used[prim]++;
                }

                primitives[textPrimitiveIndex](context, area, n);
                var isOffscreen = false;

                if (typeof OffscreenCanvas !== "undefined") {
                    isOffscreen = canvasElt instanceof OffscreenCanvas;

                    if (!isOffscreen && !globalThis.CanvasRenderingContext2D) {
                        return "unknown";
                    } else if (isOffscreen && !globalThis.OffscreenCanvasRenderingContext2D) {
                        return "unknown";
                    }
                }

                if (isOffscreen) {
                    var blob = canvasElt[canvasElt.convertToBlob ? "convertToBlob" : "toBlob"]();
                    return blob;
                } else {
                    return canvasElt.toDataURL();
                }
            } catch (e) {
            }
        }

        function hashSet(results) {
            var hashes = [];
            var t0 = now();

            for (var i = 0; i < results.length; i++) {
                if (results[i] !== "") hashes.push(hashMD5(results[i]));
            }

            var executionTime = now() - t0;
            return {
                hashes: hashes,
                executionTime: executionTime
            };
        }

        function now() {
            if (globalThis.performance && globalThis.performance.now) {
                return performance.now();
            }

            return new Date().getTime();
        }

        var t0 = now();
        var results = [];
        var cv = "";

        for (var i = 0; i < params.s.length; i++) {
            var seed = params.s[i];
            var v = "";

            try {
                cv = fingerprint(seed, canvas);

                if (cv !== undefined) {
                    v = cv;
                }
            } catch (e) {
                console.log(e)
            }

            results.push(v);
        }

        function hashResults(results, t0) {
            var executionTime = now() - t0;
            var h = hashSet(results);
            return {
                results: h.hashes,
                timing: Math.round(executionTime + h.executionTime)
            };
        }

        if (typeof Promise === "undefined" || typeof OffscreenCanvas === "undefined" || disablePromise) {
            return hashResults(results, t0);
        }

        return Promise.all(results).then(function (blobs) {
            var fpsRaw = blobs.map(function (d) {
                return d.text ? d.text() : d;
            });
            return Promise.all(fpsRaw).then(function (fps) {
                return hashResults(fps, t0);
            });
        });
    }

    var params = {};
    params.s = [0x2020ffc15d, 0x7de835b3e7];
    var canvasElt = document.createElement("canvas");
    canvasElt.style.display = "none";
    // window["_cf_chl_ctx"][window["_cf_chl_ctx"]["chC"]]["a"] = __cf_chl_fps(params, canvasElt, true);
    console.log(__cf_chl_fps(params, canvasElt, true))
})(function () {
    _["LreUMJPa"] = "xxKIkaqU";

    _["life goes on"]();
});