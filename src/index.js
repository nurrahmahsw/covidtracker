import "./style/style.css";
import "./script/component/nav.js";
import "../node_modules/materialize-css/dist/js/materialize.js"
import "../node_modules/materialize-css/dist/css/materialize.css"
import $ from "jquery"; 

// memberi animasi pada bg header
$('header').mousemove(function(e){
    var moveX = (e.pageX * -1 / 50);
    var moveY = (e.pageY * -1 / 50);
    $(this).css('background-position', moveX + 'px ' + moveY + 'px')
    $(this).css('width', '100%')
})