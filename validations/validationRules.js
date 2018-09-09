import validate from 'validate.js';

validate.validators.regex = function(value, options, key, attributes) {
    let regExp = new RegExp(options.pattern);
    
    if (!regExp.test(value)) {
      return options.message;
    }
};

const validationRules = {
    email: {
        email: {
            message: "^Enter a valid email"
        },
		presence: true
	},
	password: {
        regex: {
            pattern: '(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])',
            message: "Must contain a capital, lowercase, and number"
          },
        presence: true,
        length: {
          minimum: 8
        }
      }
}

export default validationRules;