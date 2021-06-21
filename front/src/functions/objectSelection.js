const functionList = {
  getFieldList: function(arr, fieldName) {
    return arr.map(function(item) {
      return item[fieldName];
    });
  },
  filterItem: function(arr, fieldName, search) {
    return arr.filter(function(item) {
      return item[fieldName] === search;
    })[0];
  }
};

export default functionList;
