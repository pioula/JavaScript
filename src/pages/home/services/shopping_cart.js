/* eslint-disable linebreak-style */
const slownik = {
  spodnie: 170,
  bluza: 100,
  tshirt: 30,
};

const lista = ['tshirt', 'kalarepa', 'spodnie'];

function wartoscKoszyka(koszyk, cennik) {
  return koszyk
    .reduce(
      (pr, item) => (cennik[item] ? pr + cennik[item] : pr),
      0,
    );
}

console.log(wartoscKoszyka(lista, slownik));
