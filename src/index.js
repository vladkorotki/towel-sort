
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) return [];

  let result = matrix;

  result = result.map((item, index) => {

    if (index % 2) item.reverse();

    return item;

  }).join(',').split(',');

  if (result.includes('')) return [];

  return result;
}
