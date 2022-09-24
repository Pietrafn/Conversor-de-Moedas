function converter() {
  var elementomoeda = document.getElementById("moeda").value;
  var elementomoedaconvertida = document.getElementById("moedaconvertida")
    .value;
  var elementovalorconvertido = document.getElementById("valorconvertido");
  var valor = parseFloat(document.getElementById("valor").value);
  if (elementomoeda == elementomoedaconvertida) {
    var valorconvertido = valor;
  } else {
    if (elementomoeda == "real") {
      if (elementomoedaconvertida == "dolar") {
        var valorconvertido = valor / 5.26;
      }
      if (elementomoedaconvertida == "euro") {
        var valorconvertido = valor / 5.1;
      }
      if (elementomoedaconvertida == "bitcoin") {
        var valorconvertido = valor / 100874;
      }
    }
    if (elementomoeda == "euro") {
      if (elementomoedaconvertida == "real") {
        var valorconvertido = valor * 5.1;
      }
      if (elementomoedaconvertida == "dolar") {
        var valorconvertido = valor / 1.03;
      }
      if (elementomoedaconvertida == "bitcoin") {
        var valorconvertido = valor / 19785.43;
      }
    }
    if (elementomoeda == "dolar") {
      if (elementomoedaconvertida == "real") {
        var valorconvertido = valor * 5.26;
      }
      if (elementomoedaconvertida == "euro") {
        var valorconvertido = valor * 1.03;
      }
      if (elementomoedaconvertida == "bitcoin") {
        var valorconvertido = valor / 19193.86;
      }
    }
    if (elementomoeda == "bitcoin") {
      if (elementomoedaconvertida == "real") {
        var valorconvertido = valor * 100874;
      }
      if (elementomoedaconvertida == "dolar") {
        var valorconvertido = valor * 19193.86;
      }
      if (elementomoedaconvertida == "euro") {
        var valorconvertido = valor * 19785.43;
      }
    }
  }
  if (elementomoedaconvertida == "dolar") {
    var simbolomonetario = "U$";
  }
  if (elementomoedaconvertida == "real") {
    var simbolomonetario = "R$";
  }
  if (elementomoedaconvertida == "euro") {
    var simbolomonetario = "€";
  }
  if (elementomoedaconvertida == "bitcoin") {
    var simbolomonetario = "₿";
  }
  elementovalorconvertido.innerHTML =
    simbolomonetario + valorconvertido.toFixed(2);
}
