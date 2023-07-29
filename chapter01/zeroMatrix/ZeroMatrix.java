public class ZeroMatrix {
    public static void main(String[] args) {
        int[][] matrix = {{1, 2, 3, 4, 0},
                {6, 0, 8, 9, 10},
                {11, 12, 13, 14, 15},
                {16, 0, 18, 19, 20},
                {21, 22, 23, 24, 25}};

        zeroMatrix(matrix);
    }

    public static void zeroMatrix(int[][] matrix) {
        if (matrix == null || matrix.length == 0) {
            return;
        }

        boolean[] rows = new boolean[matrix.length];

        for (int i = 0; i < matrix.length; i++) {
            boolean zeroRow = false;

            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 0 && !zeroRow) {
                    zeroRow = true;
                    rows[i] = true;
                }

                if (zeroRow) {
                    matrix[i][j] = 0;
                }
            }
        }

        System.out.println(printMatrix(matrix));
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
