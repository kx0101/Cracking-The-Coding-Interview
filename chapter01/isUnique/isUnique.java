import java.util.*;

public class isUnique {
    public static boolean isUnique(String str) {
        HashSet<Character> set = new HashSet<Character>();

        for (int i = 0; i < str.length(); i++) {
            if (set.contains(str.charAt(i))) {
                return true;
            }

            set.add(str.charAt(i));
        }

        return false;
    }

    public static void main(String[] args) {
        System.out.println(isUnique("abcde"));
        System.out.println(isUnique("abccde"));
    }
}
