const truncateOnIndexHelper = (index, array, conditionalLength) => {
  if (array[index] && typeof array[index] === 'string' && array[index].length > conditionalLength) {
    array.splice(index, 1, '...');
  }
  return array;
};

export default truncateOnIndexHelper;
