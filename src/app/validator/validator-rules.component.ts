export const validationRules = {
  SSN_REGEXP: /^(?!(000|666|9))\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/,
  EIN_REGEXP: /^\d{2}\-\d{7}$/,
  ITIN_REGEXP: /^(9\d{2})([ \-]?)([7]\d|8[0-8])([ \-]?)(\d{4})$/,
  PHONE: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}|\d{9}$/,
  STRING: /^[a-zA-Z\d\-\s]+$/,
  EMAIL: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
  IPIN: /^[\d]{6}$/
};
