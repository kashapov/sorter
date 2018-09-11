class Sorter {
  constructor() {
    this.arr = [];

    this.comparator = (a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    };
  }

  //add element and store it in any way inside
  add(element) {
    //console.log(element);
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  //return the count of current elements, which were added to Sorter instance via add method
  get length() {
    return this.arr.length;
  }

  //return all elements in array
  toArray() {
    //console.log('arr:' + this.arr);
    return this.arr;
  }

  //takes indices of already added elements and sorts only these elements
  sort(indices) {
    let arrTmp = [];

    indices.sort();
    //console.log('indices:' + indices);

    for (let i = 0; i < indices.length; i++) {
      arrTmp.push(this.arr[indices[i]]);
    }

    arrTmp.sort(this.comparator);

    for (let i = 0; i < indices.length; i++) {
      this.arr[indices[i]] = arrTmp[i];
    }
    //console.log('arr:' + this.arr);
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;