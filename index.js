const all_names = require("./../country/state/city/index.js");
const getFirstNames = require("./../utilities/utils/index.js");
const getPeopleInCity = (all_names) => {
  return getFirstNames(all_names);
};
module.exports = getPeopleInCity;
