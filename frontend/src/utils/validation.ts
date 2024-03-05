export const validationMethodsWithoutParams = {
  isRequired(value: string) {
    return !value
      ? { status: false, errorMessage: "Required field!" }
      : { status: true };
  },
  isPhone(value: string) {
    const regex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,6}$/im;
    return !regex.test(value)
      ? { status: false, errorMessage: "Not valid phone" }
      : { status: true };
  },
  isEmail(value: string) {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,24})+$/;
    return !regex.test(value)
      ? { status: false, errorMessage: "Not valid email" }
      : { status: true };
  },
};

export const validationMethodsWithParams = {
  minLength(value: string, minLength: number) {
    return value.length < minLength
      ? {
          status: false,
          errorMessage: `The field must contains at least ${minLength} characters`,
        }
      : { status: true };
  },
  maxLength(value: string, maxLength: number) {
    return value.length > maxLength
      ? {
          status: false,
          errorMessage: `The field must contains no more than ${maxLength} characters`,
        }
      : { status: true };
  },
};

export const validationMethods = {
  ...validationMethodsWithoutParams,
  ...validationMethodsWithParams
};
