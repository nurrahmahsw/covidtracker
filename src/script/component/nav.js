class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="nav-class">
        <nav>
            <ul>
            <li>
            <a href="#home"><i class="large material-icons">coronavirus</i></a>
            </li>
            <li><a href="#data"><i class="large material-icons">stacked_line_chart</i></a></li>
            <li><a href="#todo"><i class="large material-icons">masks</i></a></li>
            </ul>
        </nav>
        </div>
        `;
    }
}

customElements.define("app-bar", AppBar);