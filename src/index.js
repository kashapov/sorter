class Sorter {
  constructor() {
    // creates instance of Sorter class
    this.arr = [];    
  }

  add(element) {
    //add element and store it in any way inside
    this.arr.push(element);   
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    //return the count of current elements, which were added to Sorter instance via add method
    return this.arr.length;
    //return 1;
  }

  toArray() {
    //return all elements in array
    //return '[ ' + this.arr.join(', ') + ' ]';
    return this.arr;
  }

  sort(indices) {
    //takes indices of already added elements and sorts only these elements
    /*function compareNumeric(a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
    };*/

    //return this.arr.sort(this.setComparator(indices));
  

    //indices.sort(setComparator);
    return this.arr.sort();
  }

  setComparator(compareFunction) {
    //takes compareFunction as parameter and use it while sorting elements
    //if (a > b) return 1;
    //if (a < b) return -1;
    return 1;
  }
}

module.exports = Sorter;