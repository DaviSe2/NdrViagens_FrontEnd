import {EsconderCaixas, MostrarCaixas} from "./FiltroRoteiros"

function TrocarBotaoPromo(id) {
    document.getElementById("btn-nintendo-world").classList.remove("active");
    document.getElementById("btn-coliseu").classList.remove("active");
    document.getElementById("btn-museu-natural").classList.remove("active");
    document.getElementById(id).classList.add("active");
}

function TrocarBotaoRoteiro(id) {
    document.getElementById("all-btn").classList.remove("active");
    document.getElementById("sw-btn").classList.remove("active");
    document.getElementById("hp-btn").classList.remove("active");
    document.getElementById("got-btn").classList.remove("active");
    document.getElementById(id).classList.add("active");

    if (id === "sw-btn") {
        EsconderCaixas();
        MostrarCaixas("sw")
    } else if (id === "hp-btn") {
        EsconderCaixas();
        MostrarCaixas("hp")
    } else if (id === "got-btn") {
        EsconderCaixas();
        MostrarCaixas("got")
    } else if (id === "all-btn") {
        MostrarCaixas("project-box")
    }
}

export { TrocarBotaoPromo, TrocarBotaoRoteiro };
