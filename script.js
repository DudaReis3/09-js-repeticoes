function Contar() {
    let ini = document.getElementById("txti");
    let fim = document.getElementById("txtf");
    let passo = document.getElementById("txtp");
    let res = document.getElementById("res");

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossível contar";
        window.alert('[ERRO] Ocorreu um erro!! Por favor preencha todos os campos.');
    } else {
        res.innerHTML = "Contador: <br>";
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO = 1');
            p = 1;
        } else if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`;
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                console.log(c);
                res.innerHTML += `${c} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }
}

function tabuada() {
    let num = document.getElementById("txtn");
    let tab = document.getElementById("seltab");
    if (num.value.length == 0) {
        window.alert("Por favor, digite um número!");
    } else {
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = "";
        while (c <= 10) {
            let i = document.createElement("option");
            i.text = `${n} x ${c} = ${n * c}`;
            i.value = `tab${c}`;
            tab.appendChild(i);
            c++;
        }
    }
}
