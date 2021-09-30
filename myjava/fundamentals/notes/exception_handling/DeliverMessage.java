import java.util.Random;


// This code is NOT meant to reflect code you should be writing
// as this situation does NOT warrant throwing an exception
class OutOfGasException extends Exception{
    public static void main(String[] args) {}
}

class UnreliableFriend {
    public boolean deliverMessage() throws OutOfGasException{
        Random r = new Random();
        boolean hasGas = r.nextBoolean();
        if (hasGas){
            return true;
        }
        throw new OutOfGasException();
    }
}

class DeliverMessage{
    public static void main(String[] args){
        UnreliableFriend friend = new UnreliableFriend();
        
        // "try" statement - try out some risky code
        try{
            friend.deliverMessage();
            System.out.println("The message was delivered!");
        
        // then "catch" any exceptions that the friend throws
        } catch (OutOfGasException e){
            System.out.println("Hey, uh, so, I ran out of gas..");
            // back-up plan here.
        }
    }
}

// Note:
//      Java does NOT encourage the use of "try/catch" blocks for control flow!