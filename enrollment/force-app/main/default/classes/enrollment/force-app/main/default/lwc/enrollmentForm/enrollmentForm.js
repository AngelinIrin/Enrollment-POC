import { LightningElement, track } from 'lwc';
import createLead from '@salesforce/apex/LeadController.createLead';

export default class PatientDetailsForm extends LightningElement {
    @track firstName = '';
    @track lastName = '';
    @track company = '';
    @track email = '';
    @track dateOfBirth = '';
    @track genderIdentity = '';
    @track message = '';

    genderOptions = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Non-Binary', value: 'Non-Binary' },
        { label: 'Other', value: 'Other' },
        { label: 'Prefer not to say', value: 'Prefer not to say' }
    ];

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
        } else if (field === 'dateOfBirth') {
            this.dateOfBirth = event.target.value;
        } else if (field === 'genderIdentity') {
            this.genderIdentity = event.target.value;
        }
    }

    handleSubmit() {
        createLead({
            firstName: this.firstName,
            lastName: this.lastName,
            company: this.company,
            email: this.email,
            dateOfBirth: this.dateOfBirth,
            genderIdentity: this.genderIdentity
        })
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
        this.dateOfBirth = '';
        this.genderIdentity = '';
    }
}
