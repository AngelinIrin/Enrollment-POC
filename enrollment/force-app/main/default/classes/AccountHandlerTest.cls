@IsTest
public class AccountHandlerTest {

    @TestSetup
    public static void mkdata() {
               Account acct = new Account(
            Name = 'accountName'
        );
        Insert acct;
    }

    @isTest
    public static void testInsertNewAccount() {
        Test.startTest();
        
       
        Account newAccount = AccountHandler.insertNewAccount('AccountName');
        
        Test.stopTest();
        
        
           }
}


















/******@IsTest
@IsTest
public class AccountHandlerTest {

    @TestSetup
    public static void mkdata() {
        Account acct = new Account(
            Name = 'accountName'
        );
        Insert acct;
    }

    @isTest
    public static void testAccountHandler() {
        Test.startTest();
        AccountHandler test = new AccountHandler();
        Test.stopTest();
    }
}















public class AccountHandlerTest {
@TestSetup
    public static void mkdata()
    {
        Account acct= new Account(
            Name = 'accountName');
    Insert acct;
    }
        Test.startTest();
        AccountHandler test = new AccountHandler();
       Test.stopTest();
            
}*******/