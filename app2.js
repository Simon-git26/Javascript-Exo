
const fetchUse = async function (search) {
    let response = await fetch('https://api.jikan.moe/v3/search/anime?q=' + search);
    if (response.ok) {
        let data = await response.json();
        return data;
    } else {
        console.error('retour du serveur : ', response.status);
    }
}

let searchValue;
const input = document.querySelector('input');

input.addEventListener('input', updateValue);

function updateValue(e) {
  searchValue = e.target.value;
}


async function onFormSubmit() {
    const data = await fetchUse(searchValue);
    console.log(data);

    
    const container = document.getElementById('container');
    let template = document.querySelector("#productrow");

    for (const result of data.results) {
        var tbody = document.querySelector("tbody");
        var clone = document.importNode(template.content, true);
        var td = clone.querySelectorAll("td");
        td[0].textContent = data.results;

        container.appendChild(clone);
    }
}
