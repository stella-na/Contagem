function contar() {
    var txtinicio = document.getElementById('txti')
    var txtfim = document.getElementById('txtf')
    var txtpasso = document.getElementById('txtp')
    var res = document.getElementById('res')
    var inicio = Number(txtinicio.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtpasso.value)

    if (inicio == 0 || fim == 0 || passo == 0) {
        alert('Preencha todos os dados')
    } else {
        if (inicio <= fim) {
            res.innerHTML = 'Contador: <br>'
            for(let i = inicio; i<= fim; i+=passo) {
            res.innerHTML += i + ' \u{1F449} '
            }
        }else {
            res.innerHTML = 'Contador: <br>' 
            for(let i = inicio; i>=fim; i-=passo)
            res.innerHTML += i + ' \u{1F449} '
        }
        res.innerHTML += ' \u{1F3C6} '
    }

}