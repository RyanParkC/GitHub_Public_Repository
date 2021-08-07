#Python OOP Practice with Notes

#1. Classes -
    # When we declare a variable, we are creating an instance of a class.
    # e.g. x = [1,2,3] --> x is an instance of a list
    # e.g. attributes = [first_name, last_name, age] --> attributes class
    #Basic syntax
        class Users:
            pass
    #Creating a new instance of our class
        james = User()
        ryan = User()
    # Attributes = characteristics shared by all instances of the class type
    # Methods = actions that an object can perform. e.g. a user can make a deposit or a withdrawal, or maybe send money to another

#2. Attributes - Instance vs. Class
    #2a. Instance Attributes - 
    __init__ #called when a new object is instantiated (created/constructed initially)
    #purpose of __init__() fxn --> 
        #1- to prevent you from rewriting the same code each time you create a new object
        #2- to set properties required to execute certain instance methods as soon as the object is instantiated
        #3- to execute whatever logic we want to for each object that is created
        # declare a class and give it a name User
        class User:
            def __init__(self): #the first parameter of an instance method within a class will be "self"
                                #instance attributes are also indicated by "self"
                                #"self" is a reference to the instance, not the class
                self.name = "Michael" 
                self.email = "michael@codingdojo.com"
                self.account_balance = 0
        # now we can create INSTANCES of the User
            User()
            guido = User()
            monty = User()
        # accessing the instance's attributes
            print(guido.name) #output --> Michael
            print(monty.name) #output --> Michael
        # we can also set the values for our instance's attributes
            guido.name = "Guido"
            print(guido.name) #output --> Guido
            monty.name = "Monty"
            print(monty.name) #output --> Monty
    #2b. Class Attributes -
        # defined otuside of any instance methods, and is shared amongst all instances of the class
        class User:
            #declaring a class attribute
                bank_name = "First National Dojo"
                def __init__(self):
                    self.name = "Michael"
                    self.email = "michael@codingdojo.com"
                    self.account_balance = 0
            #Class attributes are more flexible because we can change them on an instance or the entire class
                #Changing them on an instance
                    guido = User()
                    monty = User()
                    guido.bank_name = "Dojo Credit Union"
                    print(guido.bank_name) #output --> Dojo Credit Union
                    print(monty.bank_name) #output --> First National Dojo
                #Changing them on the entire class
                    User.bank_name = "Bank of Dojo"
                    print(guido.bank_name) #output --> Bank of Dojo
                    print(monty.bank_name) #output --> Bank of Dojo
    #2c. Passing in Arguments -
        # Used to avoid creating the same exact account profile for all users upon creation
        # We will pass arguments into the __init__ method to specify a user's instance attributes
        class User:
            #class attributes get defined in the class
            bank_name = "First National Dojo"
            #now our method has 2 parameters
            def __init__(self, name, email_address):
                #we assign them accordingly
                    self.name = name
                    self.email = email_address
                #the account balance is set to 0
                    self.account_balance = 0
            guido = User("Guido van Rossum", "guido@python.com")
            monty = User("Monty Python", "monty@python.com")
            print(guido.name) #output--> Guido van Rossum
            print(monty.name) #output --> Monty Python

#3. Methods -
    # methods are functions that belong to a class, thus they cannot be called independently as we have called functions previously
    # methods must be called from an instance of a class
    #e.g. if a user wanted to make a deposit, we'd want to call the method from the user instance because a specific user is making a deposit
    #it should only affect that user's balance. Making such a call would look something like below:
        guido.make_deposit(100)
    #to be able to call on this method, it needs to exist. let's make it!
    # here's what we have so far
    class User:		
        def __init__(self, name, email):
            self.name = name
            self.email = email
            self.account_balance = 0
        # adding the deposit method
        def make_deposit(self, amount):	# takes an argument that is the amount of the deposit
            self.account_balance += amount	# the specific user's account increases by the amount of the value received
    #!----DON'T forget that the 1st parameter of every method within a class should be "self"
    # methods also have access to the class's attributes
    # now that our method is written, we can call it:
        guido.make_deposit(100)
        guido.make_deposit(200)
        monty.make_deposit(50)
        print(guido.account_balance) #output --> 300
        print(monty.account_balance) #output --> 50
    #3a. Self -
        # self parameter - includes all info about the individual object that has called the method
        # when we call on a method from an instance, that instance, along with all of its info (name, email, balance) is passed in as self

#4. Class and Static Methods -
    #4a. Class methods
    @classmethod #class methods belong to the class itself instead of the instance
    #instead of implicitly passing "self" into the method, we pass "cls" as reference to the class
    
    #NOTE -- class methods have NO access to instance attributes or any attributes that start with "self"

    class BankAccount:
        
        #class attribute
        bank_name = "First National Dojo"
        all_accounts = [] #list
        def __init__(self, int_rate, balance):
            self.int_rate = int_rate
            self.balance = balance
            BankAccount.all_accounts.append(self)

        #class method to change the name of the bank
        @classmethod
        def change_bank_name(cls,name):
            cls.bank_name = name #<-- input name of new bank name

        # class method to get balance of all accounts
        @classmethod
        def all_balances(cls):
            sum = 0
            #we use cls to refer to the class
            for account in cls.all_accounts:
                sum += account.balance
            return sum

    #4b. Static methods
    @staticmethod #functions defined within the class
    # NO access on instance or class attributes 
    # so do not need to pass any arguments into them
    # If we wanted our BankAccount class to have a utility fxn to add/subtract, then
    # we could implement @staticmethod on the class
    # There is no true purpose for static methods in Python, but they do offer us a way
    # to organize our code in a better way.
    # With @staticmethod, we can update all the checks from one place, and our code becomes a bit more D.R.Y.
    
    class BankAccount:
        #... __init__ goes here
        def with_draw(self, amount):
            #we can use the static method here to evaluate
            #if we can withdraw the funds without going negative
            if BankAccount.can_withdraw(self.balance, amount):
                self.balance -= amount
            else:
                print("Insufficient Funds")
            return self
        #static methods have no access to any attribute
        #only to what is passed into it
        @staticmethod
        def can_withdraw(balance, amount):
            if (balance - amount) < 0:
                return False
            else:
                return True
            
