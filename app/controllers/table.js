import Controller from '@ember/controller';
import { computed, action } from '@ember/object';

let createSymbol = () =>{
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let length = 2 + Math.floor(4 * Math.random()); // [2,5]
  let symbol = '';
  while (symbol.length < length) {
    symbol += chars[Math.floor(chars.length * Math.random())];
  }
  return symbol;
}

let createPrice = () => {
  return 0.5 + 500 * Math.random(); // [0.5,500.5);
}

let formatPrice = (price) => {
  return price.toFixed(2);
}

let createRow = () => {
  return {
    symbol: createSymbol(),
    price: formatPrice(createPrice())
  };
}

let createRows = (num) => {
  return Array(num)
    .fill()
    .map(createRow);
}

export default class TableController extends Controller {
    @computed()
    get columns(){
    return [
      { name: 'Stocks', valuePath: 'symbol', textAlign: 'center' },
      { name: 'Price (USD)', valuePath: 'price', textAlign: 'center' }
    ];
    }

    @computed()
    get rows(){
      return createRows(this.numRows);
    }

    numRows= 50;

    @action addRows() {
      this.rows.pushObjects(createRows(parseInt(this.numRows)));
    }
}
