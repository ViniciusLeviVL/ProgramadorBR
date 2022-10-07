var main = document.getElementsByTagName("main")[0].innerHTML
function calcular () {
    var adultos = document.getElementById("a");
    var na = Number(adultos.value)
    var criancas = document.getElementById("c");
    var nc = Number(criancas.value)
    var duracao = document.getElementById("d");
    var nd = Number(duracao.value)
    if (nd <= 0) {
        window.alert("Error - A duração do churrasco deve ser maior que 0");
    } else if (na <= 0 && nc <= 0) {
        window.alert("Error - A quantidade de pessoas no churrasco deve ser maior que 0")
    } else {

        // gramas de carne
        var gcarne = 400
        if (nd >= 6) {
            gcarne = 650
        }
        var carne = Math.ceil(((na + (nc / 2)) * gcarne) / 1000)
        // miligramas de cerveja
        var mlcerveja = 1200
        if (nd >= 6) {
            mlcerveja = 2000
        }
        var cerveja = Math.ceil((na * mlcerveja) / 350)
        // miligramas de refrigerante
        var mlrefrigerante = 1000
        if (nd >= 6) {
            mlrefrigerante = 1500
        }
        var refrigerante = Math.ceil(((na + nc) * mlrefrigerante) / 2000)
        // introduzindo resultado no html
        document.getElementsByTagName("main")[0].innerHTML = main
        document.getElementsByTagName("main")[0].innerHTML+= `<div>
            <p> ${carne} Kg de carne</p>
            <p> ${cerveja} Lata(s) de cerveja</p>
            <p> ${refrigerante} Garrafa(s) de 2L de refrigerante</p>
        </div>`
        document.getElementsByTagName("div")[0].style = "font-size:18px;font-family:Arial,sans-serif;"
    }
}