function ZeroMatrix(matrix: number[][]): number[][] {
    let [m, n] = [matrix.length, matrix[0].length];
    let setZero = false;
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (matrix[row][col] === 0) {
                matrix[0][col] = 0;

                if (row > 0) {
                    matrix[row][0] = 0;
                } else {
                    setZero = true;
                }
            }
        }
    }

    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            if (matrix[0][col] === 0 || matrix[row][0] === 0) {
                matrix[row][col] = 0;
            }
        }
    }

    if (matrix[0][0] === 0) {
        for (let row = 0; row < m; row++) {
            matrix[row][0] = 0;
        }
    }

    if (setZero) {
        for (let col = 0; col < n; col++) {
            matrix[0][col] = 0;
        }
    }

    return matrix;
}

console.log(ZeroMatrix([[1,1,1],[1,0,1],[1,1,1]]));
