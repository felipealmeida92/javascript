
let num = document.querySelector('input#txtn')
let res = document.querySelector('select#exsel')
let fim = document.getElementById('resultado')
function analisar(n=0) {
    if (num.value.length == 0 || num.value > 100) {
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        n = Number(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        res.appendChild(item)
    }
}

function finalisar() {
    fim.innerHTML = `Adicionado`
}