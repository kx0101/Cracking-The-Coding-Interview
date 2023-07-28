import java.util.*;

public class URLify {
    public static String solution(String url, int trueLength) {
        char[] urlArray = url.toCharArray();
        int spaceCount = 0;

        for (int i = 0; i < trueLength; i++) {
            if (urlArray[i] == ' ') {
                spaceCount++;
            }
        }

        int newLength = trueLength + spaceCount * 2;
        int index = newLength - 1;

        for (int i = trueLength - 1; i >= 0; i--) {
            if (urlArray[i] == ' ') {
                urlArray[index] = '0';
                urlArray[index - 1] = '2';
                urlArray[index - 2] = '%';

                index -= 3;
            } else {
                urlArray[index] = urlArray[i];

                index--;
            }
        }

        return new String(urlArray, 0, newLength);

    }

    public static void main(String[] args) {
        String url = "Mr John Smith     ";
        int trueLength = 13;

        System.out.println(solution(url, trueLength));
    }
}
