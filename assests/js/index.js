let input = document.querySelector("#input-new-task");
const btn = document.querySelector(".btn");
const low = document.querySelector("#low-priority");
const normal = document.querySelector("#normal-priority");
const high = document.querySelector("#high-priority ");
const select = document.querySelector("select");
const person = document.querySelector("#attached-person");

function createLi () {
    const li = document.createElement("li");
    return li;
}

input.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        if(!input.value) return;
        createTask(input.value);
    }
})

person.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        if(!person.value) return;
        createTask(input.value);
    }
})

function clearInput () {
    input.value = "";
    input.focus();
}

function btnSwitchOff(li) {
    li.innerText += " ";
    const btnClear = document.createElement("button");
    btnClear.innerText = "Apagar";
    btnClear.setAttribute("class", "clear");
    li.appendChild(btnClear);
}

function createBtnStatus(li) {
    const btnStatus = document.createElement("select");
    btn.setAttribute("class", "status");
    const btnLow = document.createElement("option");
    btnStatus.appendChild(btnLow).textContent = "Pendente";
    const btnNormal = document.createElement("option");
    btnStatus.appendChild(btnNormal).textContent = "Em andamento";
    const btnHigh = document.createElement("option");
    btnStatus.appendChild(btnHigh).textContent = "Concluido";
    li.appendChild(btnStatus);
}

function personAttached(valor) {
    const p = document.createElement("p");
    p.textContent = `(${valor})`;
    return p;
}

// Função responsavel por criar as terefas
function createTask(textoInput) {
    const li = createLi();
    li.innerText = textoInput;
    select.value === "low" ? low.appendChild(li).setAttribute("class", "li") : "";
    select.value === "normal" ? normal.appendChild(li).setAttribute("class", "li") : "";
    select.value === "high" ? high.appendChild(li).setAttribute("class", "li") : "";
    btnSwitchOff(li);
    createBtnStatus(li);
    li.appendChild(personAttached(person.value));
    clearInput();
}

btn.addEventListener("click", function () {
    if(!input.value) return;
    createTask(input.value);
})

document.addEventListener("click", function(e) {
    const el = e.target;
    if(el.classList.contains("clear")) {
        el.parentElement.remove();

    }
})

// Edita o valor de uma tarefa 
document.addEventListener("click", (e) => {
    let el = e.target;
    if (el.classList.contains("li")) {
        const box = prompt("Redefina sua tarefa");
        box !== null ? el.textContent = box :   "";
        createTask(box);
        el.remove();
    }
})