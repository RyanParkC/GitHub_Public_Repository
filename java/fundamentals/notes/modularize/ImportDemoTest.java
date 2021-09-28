package java.fundamentals.notes.modularize;

public class ImportDemoTest {
    public static void main(String[] args) {
        ImportDemo iD = new ImportDemo(); // 1
        String currentDate = iD.getCurrentDate(); // 2
        System.out.println(currentDate); // 3
    }
};