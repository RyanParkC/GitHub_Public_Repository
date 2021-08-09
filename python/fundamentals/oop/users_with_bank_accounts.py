class BankAccount:
    bank_name = 'First National Bank'
    all_accounts = []

    def __init__(self, account_name, int_rate, balance=0): #default balance = 0
        self.account_name = account_name
        self.int_rate = float(int_rate)
        self.balance = balance
        BankAccount.all_accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if BankAccount.can_withdraw(self.balance, amount):
            self.balance -= amount
        else:
            print('Insufficient funds')
        return self

    def display_account_info(self):
        print(
            f"Bank {self.bank_name}\nBalance: {self.balance}\nInterest Rate: {self.int_rate}\n")
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance += self.balance * self.int_rate
        else:
            print('Unable to accrue interest due to insufficient funds')
        return self

class User:
    def __init__(self, name, email_address):
        self.account_list = []
        self.name = name
        self.email_address = email_address

    def create_account(self, name, int_rate, balance):
        self.account = BankAccount(name, int_rate, balance)
        self.account_info = {
            'bank_name': self.account.bank_name,
            'account_name': self.account.account_name,
            'interest_rate': self.account.int_rate,
            'balance': self.account.balance
        }
        self.account_list.append(self.account_info)
        return self

    def make_deposit(self, name, amount):
        for i in range(len(self.account_list)):
            if self.account_list[i]['account_name'] == name:
                self.account.deposit(amount)
                print(self.account.display_account_info())
                self.account_list[i]['balance'] = self.account.balance
                return self
            else:
                print('No account with that name found')
                return self

    def make_withdrawl(self, name, amount):
        for i in range(len(self.account_list)):
            if self.account_list[i]['account_name'] == name:
                self.account.withdraw(amount)
                print(self.account.display_account_info())
                self.account_list[i]['balance'] = self.account.balance
                break
            else:
                print('No account with that name found')
            return self

    def display_user_balance(self):
        print(f'User: {self.name} \nBalance: ${self.account.balance}')
        return self

    def transfer_money(self, other_user, amount):
        self.account.withdraw(amount)
        other_user.account.deposit(amount)
        return self

#Staticmethod to check if withdraw is possible

    @staticmethod
    def can_withdraw(balance, amount):
        if (balance - amount) > 0:
            return True
        else:
            return False

#Classmethods to print all instances of a Bank Account's info

    @classmethod
    def change_bank_name(cls, name):
        cls.bank_name = name

    @classmethod
    def all_balances(cls):
        sum = 0
        for account in cls.all_accounts:
            sum += account.balance
        return sum

    @classmethod
    def all_account_info(cls):
        for i, v in enumerate(cls.all_accounts, 0): # for i in range(len(cls.all_accounts)):
            print((i, v.display_account_info())) # cls.all_accounts[i].display_account_info()

ryan = User('Ryan', 'ryanpc@dev.com')
ryan.create_account('Checking', 0.01, 500)
ryan.create_account('Savings', 0.05, 1000)
ryan.make_deposit('Checking', 1000).make_deposit('Checking',1500).make_deposit('Checking',1200).make_withdrawl('Checking', 700)
print(ryan.account_list)
print(ryan.display_user_balance())

sophia = User('Sophia', 'sophia@dev.com')
sophia.create_account('Checking',0.01,1000)
sophia.create_account('Savings',0.05,5000)
sophia.make_deposit('Checking',7000).make_deposit('Savings',10000).make_withdrawl('Checking',500).make_withdrawl('Checking',250).make_withdrawl('Checking',1500).make_withdrawl('Checking',700)
print(sophia.account_list)
print(sophia.display_user_balance())
