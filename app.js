const _ = require('lodash');
const items = [1,[1,[2,3]],[4,5]];
const newitems = _.flattenDeep(items);
console.log(newitems);