import {
    defineRule,
    configure,
  } from 'vee-validate';
  
  import {
    required,
    min,
    max,
    email,
    min_value as minVal,
    max_value as maxVal,
    not_one_of as excluded,
    confirmed,
  } from '@vee-validate/rules';

  export default defineNuxtPlugin(() => {
    
    defineRule('required', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('email', email);
    defineRule('min_value', minVal);
    defineRule('max_value', maxVal);
    defineRule('excluded', excluded);
    defineRule('password_mismatch', confirmed);

    configure({
      generateMessage: (context) => {
        const messages = {
          required: `This field ${context.field}  is  required.`,
          min: `This field ${context.field} is too short.`,
          max: `This field ${context.field} is too long.`,
          email: `This field ${context.field} is not a valid email.`,
          min_value: `This field ${context.field} is too low.`,
          max_value: `This field ${context.field} is too high.`,
          excluded: 'This field is not allowed.',
          password_mismatch: `This field ${context.field} does not match.`,
        };
        const message = messages[context.rule.name]
          ? messages[context.rule.name]
          : `The field ${context.field} is invalid`;
        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  });
  

  
