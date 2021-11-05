(function (chl_done) {
    var element = new Image();
    var parent = document.getElementById("challenge-form");

    var cb = function () {
        // window._cf_chl_ctx[window._cf_chl_ctx.chC].ah = element.naturalHeight ? element.naturalHeight : element.height;
        // window._cf_chl_ctx[window._cf_chl_ctx.chC].aw = element.naturalWidth ? element.naturalWidth : element.width;
        // window._cf_chl_ctx[window._cf_chl_ctx.chC].ah = element.height;
        // window._cf_chl_ctx[window._cf_chl_ctx.chC].aw = element.width;
        console.log(element.height, element.width);
        parent.removeChild(element);
        // chl_done();
    };

    if (element.addEventListener) {
        element.addEventListener("load", cb, false);
    } else if (element.attachEvent) {
        element.attachEvent("onload", cb);
    } else {
        element.onload = cb;
    }

    element.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAACCAMAAAA6ue/nAAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWNxwqAAAACHRSTlMAAAAAAAAAALfnUqEAAAB9SURBVHjaAXIAjf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcgABiIfyyQAAAABJRU5ErkJggg==";
    parent.appendChild(element);
})(function () {
    // _["fgSDxpeo"] = "RdkZmoPC";
    //
    // _["life goes on"]();
});