import {RegisterOptions} from 'react-hook-form';
import PasswordValidator from 'simple-react-validator';
import i18n from '../../localization/config/i18n';
import translations from '../../localization/config/translationHelper';

export const localValidation = () => {
  // Password min length 8 characters, at least 1 number, 1 lower case and 1 upper case letter.
  // Max 2 identical characters in a row and 3 lower or upper case letters in a row.
  // Allowed special characters are #, $, -, !, @, %, &, /, (, ), ?, +, *
  let validator = new PasswordValidator({
    validators: {
      password: {
        // name the rule
        message: translations.login.rules.passwordConditions,
        rule: (val, params, pwdValidator) => {
          return (
            pwdValidator.helpers.testRegex(
              val,
              /^(?=(?:.*[A-Z].*){1})(?=(?:.*[a-z]){1})(?=(?:.*\d){1,})(?!.*(.)\1{2})([A-Za-z0-9-#$!/@%&()?+*]{8,})$/,
            ) && params.indexOf(val) === -1
          );
        },
        required: true, // optional
      },
      newPassword: {
        /* Implemented new password policy
           Password min length 8 characters, at least  1 lower case and 1 upper case letter, 1 special character.
           Allowed special characters are #, $, -, !, @, %, &, /, (, ), ?, +, *.
           Numbers are optional 0 to 9.
           Maximum password length 20*/
        message: translations.login.rules.passwordConditions,
        rule: (val, params, pwdValidator) => {
          return (
            pwdValidator.helpers.testRegex(
              val,
              /^(?=(?:.*[A-Z].*){1})(?=(?:.*[a-z]){1})(?=(?:.*\d){1,})(?!.*(.)\1{2})([A-Za-z0-9-#$!/@%&()?+*]{8,})$/,
            ) && params.indexOf(val) === -1
          );
        },
        required: true, // optional
      },
      serialNumber: {
        message: translations.login.rules.serialNotValid,
        rule: (val, params, numberValidator) => {
          return (
            numberValidator.helpers.testRegex(val, /^([A-Za-z0-9]{8,})$/) &&
            params.indexOf(val) === -1
          );
        },
        required: true, // optional
      },
    },
  });
  return validator;
};

const rules: {
  [key: string]: Omit<
    RegisterOptions<any, any>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
} = {
  password: {
    pattern: {
      message: i18n.t(translations.login.rules.passwordConditions),
      value:
        /^(?=(?:.*[A-Z].*){1})(?=(?:.*[a-z]){1})(?=(?:.*\d){1,})(?!.*(.)\1{2})([A-Za-z0-9-#$!/@%&()?+*]{8,})$/,
    },
    required: {
      message: i18n.t(translations.login.rules.passwordRequired),
      value: true,
    },
  },
  confirmPassword: (getPassword: () => string) => ({
    validate: (value: string) =>
      value === getPassword() || translations.login.rules.passwordMatch,
    required: {
      message: i18n.t(translations.login.rules.verificationRequired),
      value: true,
    },
  }),
  newPassword: {
    pattern: {
      message: i18n.t(translations.login.rules.passwordConditions),
      value:
        /^(?=(?:.*[A-Z].*){1})(?=(?:.*[a-z]){1})(?=(?:.*\d){1,})(?!.*(.)\1{2})([A-Za-z0-9-#$!/@%&()?+*]{8,})$/,
    },
  },
  deviceName: {
    pattern: {
      message: i18n.t(translations.landing.rules.deviceNameSpecialCharacters),
      value: !/^[a-zA-Z0-9@.\s_-]+$/,
    },
    required: {
      message: i18n.t(translations.landing.rules.nameRequired),
      value: true,
    },
  },
  firstName: {
    required: {
      message: i18n.t(translations.landing.rules.firstNameRequired),
      value: true,
    },
  },
  lastName: {
    required: {
      message: i18n.t(translations.landing.rules.lastNameRequired),
      value: true,
    },
  },
  email: {
    required: {
      message: i18n.t(translations.login.rules.emailRequired),
      value: true,
    },
    pattern: {
      message: i18n.t(translations.login.rules.emailNotValid),
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
  },
  serialNumber: {
    pattern: {
      message: i18n.t(translations.login.rules.serialNotValid),
      value: /^([A-Za-z0-9]{8,})$/,
    },
    required: true, // optional
  },
  checkbox: {
    pattern: {
      message: 'Mandatory field',
      value: /^true$/,
    },
    required: true, // optional
  },
} as const;

export {rules};
