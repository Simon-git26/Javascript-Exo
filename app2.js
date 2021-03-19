
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
    let template = document.querySelector("#anime-template");

    for (const result of data.results) {
        let clone = document.importNode(template.content, true);
        let div = clone.querySelectorAll("div");
        div[0].textContent = result.title;

        container.appendChild(clone);
    }
}
