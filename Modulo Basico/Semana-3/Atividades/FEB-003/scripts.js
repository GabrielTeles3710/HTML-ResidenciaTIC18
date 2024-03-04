function getViagem(_div) {
    
    let father = _div.parentNode;
    let teste = father.innerText.split("\n");
    let json = {
        "Destino" : teste[0],
        "Tipo": teste[1],
        "Duração": teste[2],
        "Serviços": teste[3],
        "Preço": teste[4],
        "Taxas": teste[6],
        "Prestações": teste[8]
    }
    console.log(json);
}