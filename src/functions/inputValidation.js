const inputValidation = {
  intVal: function(val, range) {
    val = Number(val);
    if (isNaN(val)) {
      return "Nombre entier attendu";
    }
    if (!Number.isInteger(val)) {
      return "Nombre entier attendu";
    }
    return true;
  },
  minVal: function(minVal) {
    return function(val) {
      if (minVal !== undefined && minVal !== null && Number(val) < minVal) {
        return "Valeur minimale: " + minVal;
      }
      return true;
    };
  },
  maxVal: function(maxVal) {
    return function(val) {
      if (maxVal !== undefined && maxVal !== null && Number(val) > maxVal) {
        return "Valeur maximale: " + maxVal;
      }
      return true;
    };
  },
  requiredVal: function(val) {
    if (val === "") {
      return "Valeur obligatoire";
    }
    return true;
  }
};

export default inputValidation;
