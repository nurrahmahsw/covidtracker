
class DataView extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="col s12 m4">
            <section id="hitung" class="kartu konfirm">
              <span class="card-title">Card Title</span>
              <br>
              <p><i class="material-icons">location_on</i> Indonesia | Positif </p>
              <label></label>
            </section>
          </div>

          <div class="col s12 m4">
            <section class="kartu sembuh">
              <span class="card-title">Card Title</span>
              <br>
              <p><i class="material-icons">location_on</i> Indonesia | Sembuh</p>
            </section>
          </div>

          <div class="col s12 m4">
            <section class="kartu meninggal">
              <span class="card-title">Card Title</span>
              <br>
              <p><i class="material-icons">location_on</i> Indonesia | Meninggal</p>
            </section>
          </div>
        `;
    }
}

customElements.define("data-view", DataView);