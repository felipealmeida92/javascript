function contador() {
    var ini = document.querySelector('input#inicio')
    var fi = document.querySelector('input#fim')
    var pas = document.querySelector('input#passo')
    var res = document.querySelector('div#res')
    for (Number(ini.value); Number(fi.value); Number(pas.value)) {
        res.innerHTML = `${Number(ini.value)}`
    }
}