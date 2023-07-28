import java.util.*;

public class checkPerm {

    public static boolean checkPerm(String s1, String s2) {
        if (s1.length() != s2.length()) {
            return false;
        }

        int[] charCount = new int[128];

        for (int i = 0; i < s1.length(); i++) {
            charCount[s1.charAt(i)]++;
            charCount[s2.charAt(i)]--;
        }

        for (int count : charCount) {
            if (count != 0) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        String s1 = "abc";
        String s2 = "cba";
        System.out.println(checkPerm(s1, s2));

        String s3 = "abc";
        String s4 = "def";
        System.out.println(checkPerm(s3, s4));
    }
}
