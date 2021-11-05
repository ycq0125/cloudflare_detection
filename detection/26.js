c = document["createElement"]("iframe"),
    document["body"]["appendChild"](c);
d = c["contentDocument"] || c["contentWindow"]["document"];
d["write"]("<html><head><style>      #pr1 {       border: solid 2.715px;       border-color: green;       padding: 3.98px;       margin-left: 12.12px;     }         #pr2 {       border: solid 2px;       border-color: purple;              font-size: 30px;       margin-top: 200px;              -webkit-transform: skewY(23.1753218deg);       -moz-transform: skewY(23.1753218deg);       -ms-transform: skewY(23.1753218deg);       -o-transform: skewY(23.1753218deg);       transform: skewY(23.1753218deg);     }         #pr3 {       border: solid 2.89px;       border-color: orange;       font-size: 45px;       transform: scale(100000000000000000000009999999999999.99, 1.89);       margin-top: 50px;     }         #pr4 {       border: solid 2px;       border-color: silver;              transform: matrix(1.11, 2.0001, -1.0001, 1.009, 150, 94.4);       -webkit-transform: matrix(0.95559, 2.13329, -0.9842, 0.98423, 150, 95);       -moz-transform: matrix(0.66371, 1.94587, -0.6987, 0.98423, 150, 103.238);       -ms-transform: matrix(0.5478, 1.94587, -0.7383, 0.98423, 150, 100.569);       -o-transform: matrix(0.4623, 1.83523, -0.6734, 0.81231, 150, 99.324);                  position: absolute;       margin-top: 11.1331px;       margin-left: 12.1212px;       padding: 4.4545px;       left: 239.4141px;       top: 178.5050px;       }         #pr5 {                     border: solid 2pt;       border-color: red;       margin-left: 42.395pt;     }         caption {       border: solid 2px;       border-color: darkred;       font-size: 20.99px;       margin-left: 20.8px;     }         #pr6 {       border: solid 2px;       border-color: darkblue;              -webkit-transform: perspective(12890px) translateZ(101.5px);       -moz-transform: perspective(12890px) translateZ(101.5px);       -ms-transform: perspective(12890px) translateZ(101.5px);       -o-transform: perspective(12890px) translateZ(101.5px);       transform: perspective(12890px) translateZ(101.5px);       padding: 12px;     }         #pr7 {       position: absolute;       margin-top: -350.552px;       margin-left: 0.9099rem;       border: solid 2px;       border-color: burlywood;     }         #pr8 {       position: absolute;       margin-top: -150.552px;       margin-left: 15.9099rem;       border: solid 2px;       border-color: sandybrown;     }         #pr9 {       position: absolute;       margin-top: -110.552px;       margin-left: 15.9099rem;       border: solid 2px;       border-color: orchid;     }         #pr10 {       position: absolute;       margin-top: -315.552px;       margin-left: 15.9099rem;       border: solid 2px;       border-color: turquoise;     }     </style></head><body>       <div id=\"pr1\">Ssss tttt</div>       <div id=\"pr2\">TTTT tttt</div>       <div id=\"pr3\">WW&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ssss tttt</div>       <div id=\"pr4\">vvvv sssss ttttt tttt</div>       <table id=\"pr5\">         <caption>ttttt cccc tttt</caption>         <thead>         <tr>             <th>tttt hhhh</th>         </tr>         </thead>         <tbody>         <tr>             <td>tttt bbbb</td>         </tr>         </tbody>     </table>     <div id=\"pr6\">ttttt pppp tttt tttt</div>     <div id=\"pr7\">         <select>         <option>sss ooo</option>         </select>     </div>     <div id=\"pr8\">         <details>         <summary>dddd ssss</summary>         </details>     </div>     <div id=\"pr9\">         <progress value=\"49\" max=\"100\"></progress>     </div>     <div id=\"pr10\">         <button type=\"button\"></button>     </div></body></html>");
d["close"]()
for (g = ["x", "y", "width", "height", "top", "right", "bottom", "left"], j = "", m = 1; m < 11; j += m, l = d["getElementById"]("pr" + m), l.getClientRects && (k = l["getClientRects"](), j += h(k)), m++) ;

function h(o, p) {
    p = "";

    try {
        if (o && o["length"] > 0) {
            for (var q in o[0]) {
                g["indexOf"](q) > -1 && (p += q + o[0][q]);
            }
        }
    } catch (r) {
    }

    return p;
}


// 1x20.109375y8width256.890625height35.34375top8right277bottom43.34375left20.1093752x8y185.76553344726562width269height161.15643310546875top185.76553344726562right277bottom346.9219665527344left83x-2147483648y280.7149963378906width4294967296height249.00747680664062top280.7149963378906right2147483648bottom529.7224731445312left-21474836484x353.04345703125y228.5551300048828width150.2568359375height213.0459747314453top228.5551300048828right503.30029296875bottom441.6011047363281left353.043457031255x64.515625y471.09375width76.875height150.3125top471.09375right141.390625bottom621.40625left64.5156256x6.932497978210449y621.2078247070312width271.135009765625height50.3968505859375top621.2078247070312right278.06750774383545bottom671.6046752929688left6.9324979782104497x22.546875y320.859375width72height23top320.859375right94.546875bottom343.859375left22.5468758x262.546875y520.859375width41.515625height70top520.859375right304.0625bottom590.859375left262.5468759x262.546875y560.859375width164height20top560.859375right426.546875bottom580.859375left262.54687510x262.546875y355.859375width20height10top355.859375right282.546875bottom365.859375left262.546875



