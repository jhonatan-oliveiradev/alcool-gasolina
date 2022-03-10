function calcularMelhorPreco() {
  // validar campos
  let precoAlcool = document.getElementById("alcool").value;
  let precoGasolina = document.getElementById("gasolina").value;

  if (precoAlcool != "") {
    if (precoGasolina != "") {
      let resultado = precoAlcool / precoGasolina;
      if (resultado >= 0.7) {
        //alert("Melhor abastecer com gasolina");
        document.getElementById("resultado").innerHTML =
          "Melhor abastecer com Gasolina";
      } else {
        //alert("Melhor abastecer com álcool");
        document.getElementById("resultado").innerHTML =
          "Melhor abastecer com Álcool";
      }
    } else {
      alert("Preencha o campo da gasolina");
    }
  } else {
    alert("Preencha o campo alcool");
  }
}
