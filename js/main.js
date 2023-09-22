//função para tocar tecla Pom
function tocaTeclaPom(){
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaTeclaPom;
