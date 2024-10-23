import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.LastName';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

export default class Create extends LightningElement {
    contactId;
    name = '';
    firstname ='';
    Email ='';

    handleNameChange(event) {
        this.contactId = undefined;
        this.name = event.target.value;
    }
  handleFirstNameChange(event) {
        this.contactId = undefined;
        this.firstname = event.target.value;
    }

    handleEmailChange(event) {
        this.contactId = undefined;
        this.Email = event.target.value;
    }
    createAccount() {
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.name;
        fields[FIRSTNAME_FIELD.fieldApiName] = this.firstname;
        fields[EMAIL_FIELD.fieldApiName] = this.Email;
        const recordInput = { apiName: CONTACT_OBJECT.objectApiName, fields };
        createRecord(recordInput)
            .then(contact => {
                this.contactId = contact.id;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account created',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
    }
}