function EsconderCaixas() {
    const elemento = document.getElementsByClassName('project-box');
    let item = 0;
    for (item = 0; item < elemento.length; item++) {
        elemento.item(item).hidden = true;
    }
};

function MostrarCaixas(tipo){
    const elemento = document.getElementsByClassName(tipo);
    let item = 0;
    for (item = 0; item < elemento.length; item++) {
        elemento.item(item).hidden = false;
    }
}

export {EsconderCaixas, MostrarCaixas};