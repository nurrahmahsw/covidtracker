import Chart from 'chart.js';
import moment from "moment";

function main() {

    const baseUrl = "https://covid19.mathdro.id/api";

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
                    var jsonData = responseJson;
                    var a = [];
                    var s = [];
                    var d = [];
                    for (var i = 0; i < jsonData.length; ++i) {
                        a[i] = jsonData[i].totalConfirmed;
                        s[i] = jsonData[i].reportDate;
                    }
                    
                    var adata = a.slice(Math.max(a.length - 7, 1));
                    var sdata = s.slice(Math.max(s.length - 7, 1));

                    const arr = { 'data' : adata, 'date' : sdata };

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
                    // var jsonData = responseJson;
                    // var a = [];
                    // var s = [];
                    // var d = [];
                    // for (var i = 0; i < jsonData.length; ++i) {
                    //     a[i] = jsonData[i].totalConfirmed;
                    //     s[i] = jsonData[i].reportDate;
                    // }
                    
                    // var adata = a.slice(Math.max(a.length - 7, 1));
                    // var sdata = s.slice(Math.max(s.length - 7, 1));

                    // const arr = { 'data' : adata, 'date' : sdata };
                    var jsonData = responseJson;
                    var a = jsonData.confirmed.value;
                    var r = jsonData.recovered.value;
                    var d = jsonData.deaths.value;

                    var pr = parseInt((r/a)*100);
                    var pd = parseInt((d/a)*100);
                    console.log(pd);

                    // renderLine(arr);
                    // console.log(a.slice(Math.max(a.length - 5, 1)));

                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };

    console.log(getPieData());

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
        const lineElement = document.querySelector("#listcovid");

        var lineChartData = {
            labels: covid.date,
            datasets: [{
                type: 'line',
                label: 'Positif',
                id: "y-axis-0",
                fill: false,
                borderColor : "rgba(240, 52, 52, 1)",
                data: covid.data
            }]
        };

        var ctx = document.getElementById("myChart");
        // allocate and initialize a chart
        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: lineChartData
            // options: options
        });
    };

    document.addEventListener("DOMContentLoaded", () => {
        getConfirmed();
        getRecovered();
        getDeaths();
        getLineData();
    });
}

export default main;