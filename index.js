const search__btn = document.getElementById("search__btn");
const clear__btn = document.getElementById("clear__btn");
const search_input = document.getElementById("search__input");
const search_box = document.getElementById("search__box");
const suggestions__container = document.getElementById("suggestions__container");

let search_results = [];

function emptyNode(parent) {
    while (parent && parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function renderSuggestionsList() {
    emptyNode(suggestions__container);
    search_results.forEach((search_result_el) => {
        let suggestion__item = document.createElement("li");
        suggestion__item.classList.add("suggestion__item");
        suggestion__item.innerText = search_result_el;
        suggestions__container.appendChild(suggestion__item);
    })


}


function search(value) {
    return countries.filter((country) => {
        return country.toLowerCase().includes(value.toLowerCase());
    })

}

function showClearButton() {
    clear__btn.classList.add("visible_clear_btn");
}


function removeClearButton() {
    clear__btn.classList.remove("visible_clear_btn");
}

search_input.addEventListener("input", (e) => {
    if (e.target.value !== "") {
        showClearButton();
        search_results = search(e.target.value);
    } else {
        removeClearButton();
        search_results = [];
    }
    renderSuggestionsList();

})

search_input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        search_results = [];
        renderSuggestionsList();
    }


})

clear__btn.addEventListener("click", (e) => {
    if (search_input !== "") {
        search_input.value = "";
        search_results = [];
        removeClearButton();
        renderSuggestionsList();
    }
})

suggestions__container.addEventListener("click", (e) => {
    if (e.target.classList.contains("suggestion__item")) {
        search_input.value = e.target.innerText;
        search_results = [];
        renderSuggestionsList();
    }
})



search__btn.addEventListener("click", (e) => {
    if (search_input !== "") {
        search_results = [];
        renderSuggestionsList();
    }

})

search_input.addEventListener("focus", (e) => {
    search_box.classList.add("focus__input");
})

search_input.addEventListener("blur", (e) => {
    search_box.classList.remove("focus__input");
})

