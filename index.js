import "./style/style.css";
import "./materialize-css/dist/js/materialize.js"
import "./materialize-css/dist/css/materialize.css"
import "./script/component/data-covid.js"
import "./script/component/data-dunia.js"
import main from "./script/main.js"
import $ from "jquery";

// memberi animasi pada bg header
$('header').mousemove(function (e) {
    var moveX = (e.pageX * -1 / 50);
    var moveY = (e.pageY * -1 / 50);
    $(this).css('background-position', moveX + 'px ' + moveY + 'px')
})

main();