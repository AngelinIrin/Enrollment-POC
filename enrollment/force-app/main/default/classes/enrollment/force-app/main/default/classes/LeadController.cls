public with sharing class LeadController {
    @AuraEnabled
    public static String createLead(String firstName, String lastName, String company, String email, Date dateOfBirth, String genderIdentity) {
        Lead newLead = new Lead(
            FirstName = firstName,
            LastName = lastName,
            Company = company,
            Email = email,
            Date_of_Birth__c = dateOfBirth,
            GenderIdentity = genderIdentity
        );
        try {
            insert newLead;
            return 'Lead Created Successfully. Lead ID: ' + newLead.Id;
        } catch (Exception e) {
            return 'Error: ' + e.getMessage();
        }
    }
}
