function RotateMatrix(matrix) {
    let [m, n] = [matrix.length, matrix[0].length];

    for (let row = 0; row < m; row++) {
        for (let col = row + 1; col < n; col++) {
            let temp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = temp;
        }
    }

    for (let row = 0; row < m; row++) {
        matrix[row].reverse();
    }

    return matrix;
}

console.log(RotateMatrix([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));

// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]

// [7, 4, 1]
// [8, 5, 2]
// [9, 6, 3]
