class Sorter {
  constructor() {
    // creates instance of Sorter class
    this.arr = [];

    this.comparator = function (a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    };
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
  }

  toArray() {
    //return all elements in array    
    return this.arr;
  }

  sort(indices) {
    //takes indices of already added elements and sorts only these elements
    var arr_tmp = [];

    for (var i=0; i<indices.length; i++) {
      arr_tmp.push(this.arr[indices[i]]);
    }    
    
    arr_tmp.sort(this.comparator);
    indices.sort(this.comparator);
    
    for (i = 0; i < indices.length; i++) {
        this.arr[indices[i]] = arr_tmp[i];
    }    
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;