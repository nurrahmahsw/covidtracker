
class DataDunia extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="section">
            <div class="row">
                <div class="col s12 m8">
                    <section id="hitung" class="section-chart">
                    <span class="card-title">Grafik Harian Pesebaran Covid-19 di Seluruh Dunia</span>
                    <br>
                    <canvas id="myChart" width="600" height="400"></canvas>
                    <label></label>
                    </section>
                </div>

                <div class="col s12 m4">
                    <section class="section-chart">
                    <span class="card-title">Perbandingan Kesembuhan dan Kematian Covid-19 Seluruh Dunia</span>
                    <br>
                    <canvas id="pieChart" width="1000" height="1000"></canvas>
                    </section>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define("data-dunia", DataDunia);