public class oneAway {
    public static boolean isOneWay(String s1, String s2) {
        if (s1.length() == s2.length()) {
            return isOneEditReplace(s1, s2);
        } else if (s1.length() + 1 == s2.length()) {
            return isOneEditInsert(s1, s2);
        } else if (s1.length() - 1 == s2.length()) {
            return isOneEditInsert(s2, s1);
        }

        return false;
    }

    public static boolean isOneEditReplace(String s1, String s2) {
        boolean foundDifference = false;

        for (int i = 0; i < s1.length(); i++) {
            if (s1.charAt(i) != s2.charAt(i)) {
                if (foundDifference) {
                    return false;
                }

                foundDifference = true;
            }
        }

        return true;
    }

    public static boolean isOneEditInsert(String s1, String s2) {
        int index1 = 0;
        int index2 = 0;

        while (index1 < s1.length() && index2 < s2.length()) {
            if (s1.charAt(index1) != s2.charAt(index2)) {
                if (index1 != index2) {
                    return false;
                }

            } else {
                index1++;
            }
            index2++;
        }

        return true;
    }

    public static void main(String[] args) {
        System.out.println(isOneWay("pale", "ple"));
        System.out.println(isOneWay("pales", "pale"));
        System.out.println(isOneWay("pale", "bale"));
        System.out.println(isOneWay("pale", "bake"));
    }
}
