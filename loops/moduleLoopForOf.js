function* generators(data) {
  for (let value of data) {
    yield value;
  }
}

var getObjectProperty = obj => {
  const propertyArr = [];
  const valuesArr = [];
  const entriesArr = [];

  for (let key of Object.keys(obj)) {
    propertyArr.push(key);
  }

  for (let val of Object.values(obj)) {
    valuesArr.push(val);
  }

  for (let entr of Object.entries(obj)) {
    entriesArr.push(entr);
  }

  return {
    propertyArr,
    valuesArr,
    entriesArr,
  };
};

module.exports = {
  generators: generators,
  getObjectProperty: getObjectProperty,
};
