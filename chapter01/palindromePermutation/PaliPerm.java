import java.util.*;

public class PaliPerm {

    public static boolean isPaliPerm(String s) {
        s = s.replaceAll(" ", "").toLowerCase();

        HashMap<Character, Integer> charCount = new HashMap<>();

        for (char c : s.toCharArray()) {
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);
        }

        int oddCount = 0;

        for (int freq : charCount.values()) {
            if (freq % 2 != 0) {
                oddCount++;
            }

            if (oddCount > 1) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        String s = "Tact Coa";
        System.out.println(isPaliPerm(s));
    }
}
