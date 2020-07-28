export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.

  // PLEASE DELETE THIS LINE AND ADD YOUR IMPLEMENTATION HERE

  constructor(x, y) {
    Object.defineProperty(this, 'x', {
      writable: false, // 这里我们writable设置为false
      value: x,
    });
    Object.defineProperty(this, 'y', {
      writable: false, // 这里我们writable设置为false
      value: y,
    });
  }

  static plus(vector1, vector2) {
    const plusx = vector1.x + vector2.x;
    const plusy = vector1.y + vector2.y;
    const plusResult = new Vector(plusx, plusy);
    return plusResult;
  }

  static minus(v1, v2) {
    const mx = v1.x - v2.x;
    const my = v1.y - v2.y;
    const minusResult = new Vector(mx, my);
    return minusResult;
  }

  distance() {
    const d = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    return d;
  }
}
