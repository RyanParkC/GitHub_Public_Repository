package myjava.fundamentals.alfred_bot;

import java.util.Date;

public class AlfredQuotes {
    // Must have "main" function in order to call functions within class
        // public static void main (String[] args) {
        //     basicGreeting();
        //     guestGreeting("William");
        //     dateAnnouncement();
        //     respondBeforeAlexis("Hello, Alfred, can you please bring me some wine.");
        // }
    // Basic Greeting
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    // Guest Greeting
    public String guestGreeting(String name) {
        String greeting1 = String.format("Hi %s, welcome to the %s Annual Conference!", name, 2022);  // %s = string
        return greeting1;
    }
    // Date Announcement
    public String dateAnnouncement() {
        Date date = new Date ();
        return "It is currently " + date;
    }
    // Respond Before Alexis
    public String respondBeforeAlexis(String conversation) {
        int a = conversation.indexOf("Alexis"); // if exists > -1 
        int b = conversation.indexOf("Alfred"); // if exists > -1
        if (a > -1) {
            return "Right away, sir. She certainly isn't sophisticated enough for that.";
        } else if (b > -1) {
            return "At your service. As you wish, naturally.";
        } else {
            return "Right. And with that I shall retire.";
        }
    }

    // NINJA BONUS
    // See the specs to overload the guessGreeting method

    // SENSEI BONUS
    // Write your own AlfredQuote method using any of the String methods you have learned!
}
