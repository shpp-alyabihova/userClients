import { FormControl } from '@angular/forms';


export function passwordMustHaveAtLeastOneNumber (inputPass : FormControl) : {[key: string]: boolean} {
  let valid = inputPass.value.split('').some((letter)=> {
    return !Number.isNaN(+letter);
  });
  return (valid) ? null : { validatePassword: false };
}
