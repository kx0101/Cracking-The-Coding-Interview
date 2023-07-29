import java.util.LinkedList;

public class RemoveDups {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>();
        list.add(1);
        list.add(2);
        list.add(1);
        list.add(3);
        list.add(2);
        list.add(4);

//        System.out.println("Before removing duplicates: " + list);
//        removeDups(list);
//        System.out.println("After removing duplicates: " + list);

        System.out.println("Before removing duplicates: " + list);
        removeDupsNoBuffer(list);
        System.out.println("After removing duplicates: " + list);
    }

    public static void removeDups(LinkedList<Integer> list) {
        LinkedList<Integer> buffer = new LinkedList<>();

        for (Integer i : list) {
            if (!buffer.contains(i)) {
                buffer.add(i);
            }
        }

        list.clear();
        list.addAll(buffer);
    }

    public static void removeDupsNoBuffer(LinkedList<Integer> list) {
        for (int i = 0; i < list.size(); i++) {
            Integer curr = list.get(i);

            for (int j = i + 1; j < list.size(); j++) {
                if (curr.equals(list.get(j))) {
                    list.remove(j);
                }
            }
        }
    }

}
