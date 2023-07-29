public class StringRotation {
    public static void main(String[] args) {
        String s1 = "erbottlewat";
        String s2 = "waterbottle";
        System.out.println(isSubstring(s1, s2));
    }

    public static boolean isSubstring(String s1, String s2) {
        if (s1.length() != s2.length()) {
            return false;
        }

        String s1s1 = s1 + s1;

        return s1s1.contains(s2);
    }
}
