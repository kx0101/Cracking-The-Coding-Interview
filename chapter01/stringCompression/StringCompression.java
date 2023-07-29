public class StringCompression {
    public static void main(String[] args) {
        String string = "aabcccccaaa";
        System.out.println(stringCompression(string));
    }

    public static String stringCompression(String string) {
        StringBuilder stringBuilder = new StringBuilder();
        int count = 0;

        for (int i = 0; i < string.length(); i++) {
            count++;

            if (i + 1 >= string.length() || string.charAt(i) != string.charAt(i + 1)) {
                stringBuilder.append(string.charAt(i));
                stringBuilder.append(count);

                count = 0;
            }
        }

        return stringBuilder.length() < string.length() ? stringBuilder.toString() : string;
    }
}
