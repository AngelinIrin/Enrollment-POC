import { LightningElement, track } from 'lwc';
import createLead from '@salesforce/apex/LeadController.createLead';

export default class EnrollmentForm extends LightningElement {
    @track firstName = '';
    @track lastName = '';
    @track company = '';
    @track email = '';
    @track message = '';

    handleInputChange(event) {
        const field = event.target.dataset.id;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        } else if (field === 'company') {
            this.company = event.target.value;
        } else if (field === 'email') {
            this.email = event.target.value;
        }
    }

    handleSubmit() {
        createLead({ firstName: this.firstName, lastName: this.lastName, company: this.company, email: this.email })
            .then(result => {
                this.message = result;
                this.clearForm();
            })
            .catch(error => {
                this.message = 'Error: ' + error.body.message;
            });
    }

    clearForm() {
        this.firstName = '';
        this.lastName = '';
        this.company = '';
        this.email = '';
    }
}
