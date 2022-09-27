
const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

loadCountries();

const displayCountries = countries => {
    // console.log(countries[0]);



    const countriesDiv = document.getElementById('countries');

    for (const country of countries) {

        // console.log(country);

        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3>
          Name: ${country.name}
        </h3>
        <p>
        Capital: ${country.capital}
        </p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        
        `;
        countriesDiv.appendChild(div);
    }

}


const loadCountryByName = name => {

    const url = `https://restcountries.com/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
}


const displayCountryDetail = country => {
    // console.log(country);
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
        <h4>
          Name: ${country.name}
        </h4>
        <p>
        Capital: ${country.capital}
        </p>
        <p>
        Population: ${country.population}
        </p>
        <img width = "200px" src = "${country.flag}">
        
        
        `;



}