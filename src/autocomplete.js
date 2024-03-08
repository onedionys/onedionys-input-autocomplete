class Autocomplete {
    constructor(data) {
      this.data = data;
    }
  
    search(query) {
      return this.data.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    }
  }
  
  module.exports = Autocomplete;
  