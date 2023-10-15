/*Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.

How to take the determinant of a matrix -- it is simplest to start with the smallest cases:

A 1x1 matrix |a| has determinant a.

A 2x2 matrix [ [a, b], [c, d] ] or

|a  b|
|c  d|
has determinant: a*d - b*c.

The determinant of an n x n sized matrix is calculated by reducing the problem to the calculation of the determinants of n matrices ofn-1 x n-1 size.

For the 3x3 case, [ [a, b, c], [d, e, f], [g, h, i] ] or

|a b c|  
|d e f|  
|g h i|  
the determinant is: a * det(a_minor) - b * det(b_minor) + c * det(c_minor) where det(a_minor) refers to taking the determinant of the 2x2 matrix created by crossing out the row and column in which the element a occurs:

|- - -|
|- e f|
|- h i|  
Note the alternation of signs.

The determinant of larger matrices are calculated analogously, e.g. if M is a 4x4 matrix with first row [a, b, c, d], then:

det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)*/

function determinant(m) {
  const getMinor = (srcM, numColEl) => {
    const minor = srcM.map((row) => [...row]);

    for (let i = 1; i < srcM.length; i++) {
      minor[i].splice(numColEl, 1);
    }
    minor.splice(0, 1);

    return minor;
  };

  const twoXtwoMatrix = (tXtM) =>
    tXtM[0][0] * tXtM[1][1] - tXtM[0][1] * tXtM[1][0];

  const threeXthreeMatrix = (thXthM) => {
    let det = 0;
    for (let i = 0; i < thXthM.length; i++) {
      let minor = getMinor(thXthM, i);

      det += Math.pow(-1, 1 + (i + 1)) * thXthM[0][i] * twoXtwoMatrix(minor);
    }
    return det;
  };

  const fourXfourMatrix = (fXfM) => {
    let det = 0;
    for (let i = 0; i < fXfM.length; i++) {
      let minor = getMinor(fXfM, i);
        det +=
          Math.pow(-1, 1 + (i + 1)) * fXfM[0][i] * threeXthreeMatrix(minor);
    }
    return det;
  };

  const fiveXfiveMatrix = (fiveXfiveM) => {
    let det = 0;
    for (let i = 0; i < fiveXfiveM.length; i++) {
      let minor = getMinor(fiveXfiveM, i);
      det += Math.pow(-1, 1 + (i + 1)) * fiveXfiveM[0][i] * fourXfourMatrix(minor);
    }
    return det;
  };

  const sixXsixMatrix = (sixXsixM) => {
    let det = 0;
    for (let i = 0; i < sixXsixM.length; i++) {
      let minor = getMinor(sixXsixM, i);
      det +=
        Math.pow(-1, 1 + (i + 1)) * sixXsixM[0][i] * fiveXfiveMatrix(minor);
    }
    return det;
  };

  if (+m[0].length === 1) {
    return m[0][0];
  }

  if (+m[0].length === 2) {
    return twoXtwoMatrix(m);
  }

  if (+m[0].length === 3) {
    return threeXthreeMatrix(m);
  }

  if (+m[0].length === 4) {
    return fourXfourMatrix(m);
  }

  if (+m[0].length === 5) {
    return fiveXfiveMatrix(m);
  }

  if (+m[0].length === 6) {
    return sixXsixMatrix(m);
  }
}

const m2 = [
  [4, 6],
  [3, 8],
];

const m3 = [
  [2, 4, 2],
  [3, 1, 1],
  [1, 2, 0],
];

const m4 = [
  [2, 4, 2, 1],
  [3, 1, 1, 4],
  [1, 2, 0, 6],
  [3, 3, 1, 2],
];

const m5 = [
  [2, 4, 2, 1, 2],
  [3, 1, 1, 4, 4],
  [1, 2, 0, 6, 1],
  [3, 3, 1, 2, 4],
  [2, 4, 1, 1, 5],
];
