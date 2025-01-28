import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        char char1 = scanner.next().charAt(0);
        char char2 = scanner.next().charAt(0);

        int sum = (int) char1 + (int) char2;
        int diff = Math.abs((int) char1 - (int) char2);

        System.out.print(sum + " ");
        System.out.println(diff);

        scanner.close();
    }
}
