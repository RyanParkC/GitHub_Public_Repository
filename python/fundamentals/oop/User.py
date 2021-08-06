#User

class User:
    def __init__(self, name, email_address):
        self.name = name
        self.email = email_address
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
    
    def make_withdrawal(self, amount):
        self.account_balance -= amount

    def display_user_balance(self, amount):
        self.account_balance = amount

#3 instances of User class
abraham = User("Abra Ham", "abraham@python.com")
benjamin = User("Ben Ja Min", "benjamin@python.com")
christina = User("Chris Tina", "christina@user.com")
print(abraham.name)	# output: Abra Ham
print(benjamin.name) # output: Ben Ja Min
print(christina.name) # output: Chris Tina

#3 deposits 1 withdrawal then display balance
abraham.make_deposit(500)
abraham.make_deposit(1000)
abraham.make_withdrawal(300)
print(abraham.account_balance) # output: 1200

#2 deposits 2 withdrawals then display balance
benjamin.make_deposit(5000)
benjamin.make_deposit(5000)
benjamin.make_withdrawal(1500)
benjamin.make_withdrawal(1000)
print(benjamin.account_balance) # output: 7500

#1 deposit 3 withdrawals then display balance
christina.make_deposit(10000)
christina.make_withdrawal(250)
christina.make_withdrawal(750)
christina.make_withdrawal(1250)
print(christina.account_balance) #output: 7750

#BONUS: add a transfer_money method
#have the first user transfer money to the third user
#then print both users' balances