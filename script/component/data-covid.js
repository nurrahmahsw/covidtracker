
class DataView extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="section sec-data">
        <div class="row" id="listcovid">
        </div>
      </section>
        `;
    }
}

customElements.define("data-covid", DataView);