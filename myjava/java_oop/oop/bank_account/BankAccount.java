

import java.util.Objects;
import java.util.Random;


public class BankAccount {

    // private classes
    private double checkingBalance;
    private double savingsBalance;
    private final long accountNumber;
    // public classes
    public static int numberOfAccounts = 0;     // created thus far
    public static double totalAmountInBank = 0; // per account

    // Bank Account
    public BankAccount() {
        this.checkingBalance = 0;
        this.savingsBalance = 0;
        this.accountNumber =  getAccountNumber();
        // Add +1 to numberOfAccounts when this method is called
        numberOfAccounts++;
    }

    // Bank Account - inputting values (from "main" function)
    public BankAccount(double checkingBalance, double savingsBalance) {
        this.checkingBalance = checkingBalance;
        this.savingsBalance = savingsBalance;
        numberOfAccounts++;
        totalAmountInBank += (this.checkingBalance + this.savingsBalance);
        this.accountNumber = getAccountNumber() ;
    }

    // Checking Balance - get function
    public double getCheckingBalance() {
        return checkingBalance;
    }

    // Checking Balance - setting values
    public void setCheckingBalance(double checkingBalance) {
        double balanceDifference = (checkingBalance - this.checkingBalance);
        this.checkingBalance = checkingBalance;
        totalAmountInBank += balanceDifference;
    }

    // Savings Balance - get function
    public double getSavingsBalance() {
        return savingsBalance;
    }

    // Savings Balance - setting values
    public void setSavingsBalance(double savingsBalance) {
        double balanceDifference = (savingsBalance - this.savingsBalance);
        this.savingsBalance = savingsBalance;
        totalAmountInBank += balanceDifference;
    }

    // Deposit
    public void deposit(String accountName, double amount) {
        if (Objects.equals(accountName, "checking")) {
            setCheckingBalance((this.checkingBalance + amount));
        } else if (Objects.equals(accountName, "savings")) {
            setSavingsBalance((this.savingsBalance + amount));
        } else {
            System.out.println("Please enter 'checking' or 'savings' for first arg and double for second");
        }
    }

    // Withdraw
    public void withdraw(String accountName, double amount) {
        if (Objects.equals(accountName, "checking")) {
            if (this.checkingBalance - amount >= 0) {
                setCheckingBalance((this.checkingBalance - amount));
            } else {
                System.out.println("Insufficient funds");
            }
        } else if (Objects.equals(accountName, "savings")) {
            if (this.savingsBalance - amount >= 0) {
                setSavingsBalance((this.savingsBalance - amount));
            } else {
                System.out.println("Insufficient Funds");
            }
        } else {
            System.out.println("Please enter 'checking' or 'savings' for first arg and double for second");
        }
    }

    // Print format
    public String toString() {
        System.out.println(this.getClass().getSimpleName());    // prints "BankAccount" class name
        System.out.println("Checkings Balance: "+ String.format("$%.2f", this.checkingBalance));
        System.out.println("Savings Balance: "+ String.format("$%.2f", this.savingsBalance));
        System.out.println("Account #: " + this.accountNumber);
        return null;
    }

    // Total Amount in Bank
    public static double getTotalAmountInBank() {
        return totalAmountInBank;
    }

    // Account Number (using Random)
    private long getAccountNumber() {
        long accountNumber = 0;
        Random randomGenerator = new Random();
        for (int i = 0; i < 9; i++) {
            accountNumber += (randomGenerator.nextInt(9)+ 1);
            accountNumber *= 10;
        }
        return accountNumber;
    }
}