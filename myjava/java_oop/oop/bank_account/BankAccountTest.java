

public class BankAccountTest {

    public static void main(String[] args) {
        // Create a new BankAccount called "account1" and assign it some values
        BankAccount account1 = new BankAccount(50.00, 100.00);
        // account2
        BankAccount account2 = new BankAccount(1550.00, 2100.00);

        // Check Bank Total $$
        System.out.println(BankAccount.getTotalAmountInBank()); // $3800.00

        // Setting values
        account1.setCheckingBalance(100.00);        // should now = $100.00
        account1.setSavingsBalance(200.00);         // should now = $200.00

        // Withdraw / Deposit
        account1.withdraw("checking", 25.00);       // should now = $75.00
        account1.deposit("savings", 500.00);        // should now = $700.00

        // Print
        System.out.println(BankAccount.getTotalAmountInBank()); // $4425.00
        
        System.out.println(account1);       // prints in format from "toString" method
        System.out.println(account2);
    }
}