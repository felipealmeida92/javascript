function analisar(n=0) {
    let num = document.querySelector('input#txtn')
    let res = document.querySelector('select#exsel')
    if (num.value.length == 0 || num.value > 100) {
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        n = Number(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        res.appendChild(item)
    }
    

}