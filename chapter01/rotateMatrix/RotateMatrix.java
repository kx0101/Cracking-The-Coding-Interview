import static java.util.Collections.reverse;

import java.util.*;

public class RotateMatrix {
    public static void main(String[] args) {
        int[][] matrix = {{1, 2, 3, 4},
                {5, 6, 7, 8},
                {9, 10, 11, 12},
                {13, 14, 15, 16}};
        printMatrix(matrix);
        rotateMatrix(matrix);
        printMatrix(matrix);
    }

    public static void rotateMatrix(int[][] matrix) {
        if (matrix == null || matrix.length == 0) {
            return;
        }

        for (int row = 0; row < matrix.length; row++) {
            for (int col = row + 1; col < matrix[0].length; col++) {
                int temp = matrix[row][col];
                matrix[row][col] = matrix[col][row];
                matrix[col][row] = temp;
            }
        }

        for (int[] ints : matrix) {
            reverse(Arrays.asList(ints));
        }

        System.out.println("Rotated matrix: " + printMatrix(matrix));
    }

    public static String printMatrix(int[][] matrix) {
        StringBuilder sb = new StringBuilder();
        sb.append("\n");

        for (int[] row : matrix) {
            for (int i : row) {
                sb.append(i).append(" ");
            }

            sb.append("\n");
        }

        return sb.toString();
    }
}
