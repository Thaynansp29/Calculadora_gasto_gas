function contar() {
  var t = document.getElementById("txt1");
  var kg = document.getElementById("txt2");
  var b = document.getElementById("txt3");
  var pb = document.getElementById("txt4");
  var res = document.getElementById("res");

  if (
    t.value.length == 0 ||
    kg.value.length == 0 ||
    b.value.length == 0 ||
    pb.value.length == 0
  ) {
    res.innerHTML = "Impossível calcular!";
  } else {
    let te = Number(t.value);
    let kgh = Number.parseFloat(kg.value);
    let be = Number(b.value);
    let pbe = Number(pb.value);

    const resultado = (((te / 60) * kgh) / be) * pbe;

    res.innerHTML = `Em ${te} minutos com o gasto do seu botijão de gás de ${be}KG, sendo o valor total do botijão ${pbe} Reais, você gastou R$${resultado.toFixed(
      2
    )} fazendo sua receita.❤`;
  }
}
