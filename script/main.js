function main() {

    const getPositif = () => {
        // membuat instance dari XMLHttpRequest
        const xhr = new XMLHttpRequest();

        //menetapkan callback jika response sukses dan error
        xhr.onload = function () {
            const responseJson = JSON.parse(this.responseText);
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderDataCovid(data.confirmed);
            }
        }

        xhr.onerror = function () {
            showResponseMessage();
        }

        // Membuat GET request dan menetapkan target URL
        xhr.open("GET", "https://covid19.mathdro.id/api/countries/Indonesia");
        // Mengirimkan request
        xhr.send();
    };

    const getSembuh = () => {
        // tuliskan kode di sini!
    };

    const getMeninggal = () => {
        // tuliskan kode di sini!
    };
}

const renderDataCovid = (data) => {
    const listCovid = document.querySelector("#listBook");
    listCovid.innerHTML = "";

    data.get(data => {
        listCovid.innerHTML += `
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
    });

    const buttons = document.querySelectorAll(".button-delete");
    buttons.forEach(button => {
        button.addEventListener("click", event => {
            const bookId = event.target.id;
            removeBook(bookId);
        })
    });

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {
        getBook();
    });
};

export default main;