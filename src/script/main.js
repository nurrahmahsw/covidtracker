import Chart from 'chart.js';

function main() {

    const baseUrl = "https://covid19.mathdro.id/api";
    
    let ctx; 
    let data;
    let chart;
    let x, y, z;
    let jsonData;

    const getConfirmed = () => {
        fetch(`${baseUrl}/countries/Indonesia`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderConfirmed(responseJson.confirmed);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };

    const getRecovered = () => {
        fetch(`${baseUrl}/countries/Indonesia`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderRecovered(responseJson.recovered);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })

    };

    const getDeaths = () => {
        fetch(`${baseUrl}/countries/Indonesia`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderDeath(responseJson.deaths);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })

    };

    const getLineData = () => {
        fetch(`${baseUrl}/daily`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    jsonData = responseJson;
                    x = [];
                    y = [];
                    
                    for (let i = 0; i < jsonData.length; ++i) {
                        x[i] = jsonData[i].totalConfirmed;
                        y[i] = jsonData[i].reportDate;
                    }

                    let adata = x.slice(Math.max(x.length - 7, 1));
                    let sdata = y.slice(Math.max(y.length - 7, 1));

                    const arr = {
                        'data': adata,
                        'date': sdata
                    };

                    renderLine(arr);
                    // console.log(a.slice(Math.max(a.length - 5, 1)));
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };

    const getPieData = () => {
        fetch(`${baseUrl}/`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {

                    jsonData = responseJson;
                    x = jsonData.confirmed.value;
                    y = jsonData.recovered.value;
                    z = jsonData.deaths.value;

                    let pr = parseInt((y / x) * 100);
                    let pd = parseInt((z / x) * 100);

                    let dataPie = [y, z];
                    // console.log(pd);
                    renderPie(dataPie);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };

    const renderConfirmed = (covid) => {
        const listCovidElement = document.querySelector("#listcovid");

        listCovidElement.innerHTML += `
            <div class="col s12 m4">
            <section id="hitung" class="kartu konfirm">
              <span class="card-title">${covid.value}</span>
              <br>
              <p><i class="material-icons">location_on</i> Indonesia | Positif </p>
              <label></label>
            </section>
          </div>
            `;
    };

    const renderRecovered = (covid) => {
        const listCovidElement = document.querySelector("#listcovid");

        listCovidElement.innerHTML += `
            <div class="col s12 m4">
            <section id="hitung" class="kartu sembuh">
              <span class="card-title">${covid.value}</span>
              <br>
              <p><i class="material-icons">location_on</i> Indonesia | Sembuh </p>
              <label></label>
            </section>
          </div>
            `;
    };

    const renderDeath = (covid) => {
        const listCovidElement = document.querySelector("#listcovid");

        listCovidElement.innerHTML += `
            <div class="col s12 m4">
            <section id="hitung" class="kartu meninggal">
              <span class="card-title">${covid.value}</span>
              <br>
              <p><i class="material-icons">location_on</i> Indonesia | Meninggal </p>
              <label></label>
            </section>
          </div>
            `;
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    const renderLine = (covid) => {
        data = {
            labels: covid.date,
            datasets: [{
                type: 'line',
                label: 'Positif',
                id: "y-axis-0",
                fill: false,
                borderColor: "rgba(240, 52, 52, 1)",
                data: covid.data
            }]
        };

        ctx = document.getElementById("myChart");
        chart = new Chart(ctx, {
            type: 'line',
            data: data
        });
    };

    const renderPie = (covid) => {
        data = {
            labels: ["Sembuh", "Meninggal"],
            datasets: [{
                backgroundColor: ['rgba(42, 187, 155, 1)', 'rgb(190,190,190)'],
                data: covid
            }],
        };

        ctx = document.getElementById("pieChart");
        chart = new Chart(ctx, {
            type: 'pie',
            data: data
        });
    };

    document.addEventListener("DOMContentLoaded", () => {
        getConfirmed();
        getRecovered();
        getDeaths();
        getLineData();
        getPieData();
    });
}

export default main;