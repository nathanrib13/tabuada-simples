//chamando a função do formulario HTML
function gerar() {
    //definiando a variavel num com a entrada digitada no campo 'numero' no formulario
    let num = document.getElementById('txtnum')
    let tabela = document.getElementById('selecttab')
    if (num.value.length == 0) {
        window.alert('Insira um número válido')
    } else {
        // transformando o numero de entrada para o tipo Number ao inves de uma string
        let numero = Number(num.value)
        tabela.innerHTML= ''

        for (multiplicadores = 1; multiplicadores <= 10; multiplicadores++) {
            let item = document.createElement('option')
            item.text = `${numero} x ${multiplicadores} = ${numero * multiplicadores}`
            tabela.appendChild(item)
        }
    }
}