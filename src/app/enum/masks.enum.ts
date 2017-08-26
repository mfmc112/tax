export const MASKS = {
  INITIAL: [/[a-zA-Z\d]/],
  DATE: [/\d/,/\d/,'/',/\d/,/\d/,'/',/\d/,/\d/,/\d/,/\d/,],
  PHONE: ['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  SSN: [/\d/,/\d/,/\d/,'-',/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/]

};