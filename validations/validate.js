import validation from 'validate.js';
import validationRules from './validationRules';

export default function validate(fieldName, value) {
    const formValues = {};
    const formFields = {};
    let result = null;

    formValues[fieldName] = value;
    formFields[fieldName] = validationRules[fieldName];
    result = validation(formValues, formFields);

    if (result) {
        return result[fieldName][0];
    } 
    return null;
}