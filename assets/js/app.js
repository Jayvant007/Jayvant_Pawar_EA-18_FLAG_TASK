var cl = console.log;

let countryInfo = document.getElementById('country-info');
cl(countryInfo);

let result = '';

countries.forEach(function (data) {
    result += `<div class="col-lg-3 col-md-6 col-xs-12">
            <div class="card mb-4">
            <figure class="card-country">
            <img class="img-fluid" src="${data.flag}">
            <figcaption class="info">
            <h2 class="text-center text-warning text-uppercase">${data.name}</h2>
            <h3 class="text-secondary ml-3 col-md-12">Capital : ${data.capital}</h3>
            <h3 class="text-secondary ml-3 col-12">Population : ${data.population}</h3>
            </figcaption>
            </figure>
            </div>
            </div>
   `
})

countryInfo.innerHTML=result;