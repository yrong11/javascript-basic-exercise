export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  function Node(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }

  try {
    if (array.length == 0) throw new Error('Creating list from empty array');
    const first = new Node(array[0]);
    let pre = first;
    for (let i = 1; i < array.length; i += 1) {
      const node = new Node(array[i]);
      pre.next = node;
      pre = node;
    }
    return first;
  } catch (err) {
    if (array == undefined || array === null) {
      throw new Error('Creating list from undefined array');
    } else throw new Error('Creating list from empty array');
  }
}
