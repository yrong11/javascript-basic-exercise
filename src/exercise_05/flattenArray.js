export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  try {
    const result = [];
    for (let i = 0; i < array.length; i += 1) {
      if (!(array[i] instanceof Array)) result.push(array[i]);
      else for (let j = 0; j < array[i].length; j += 1) result.push(array[i][j]);
    }
    return result;
  } catch (err) {
    throw new Error('Flatten undefined or null array');
  }
}
