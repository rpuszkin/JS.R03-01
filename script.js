const arr = [1, 2, 3, 4, 5, 1, 5, 1];
function uniqArray(arrayParam) {
  return [...new Set(arrayParam)];
}
const test = uniqArray(arr);
console.log(test);
