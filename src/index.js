import "./style/style.css";
import "./materialize-css/dist/js/materialize.js"
import "./materialize-css/dist/css/materialize.css"
import "./script/component/data-covid.js"
import "./script/component/data-dunia.js"
import main from "./script/main.js"
import $ from "jquery";

// memberi animasi pada bg header
const header = document.getElementById('header');

header.addEventListener('mousemove', e => {
    const moveX = (e.pageX * -1 / 50);
    const moveY = (e.pageY * -1 / 50);
    $(header).css('background-position', moveX + 'px ' + moveY + 'px')
})

main();