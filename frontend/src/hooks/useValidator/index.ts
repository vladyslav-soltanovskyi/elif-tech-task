import { useState } from "react";
import { validationMethods } from "@utils/validation";
import {
  IDataForCheck,
  IErrorsMessages,
  IRules,
  IValidationResponse,
} from "./types";

export const useValidator = <DefaultFields extends object>() => {
  const [errors, setErrors] = useState<IErrorsMessages<DefaultFields>>({});

  const validate = (fields: DefaultFields, rules: IRules = {}) => {
    const errorsMessages: IErrorsMessages<DefaultFields> = {};
    for (const keyRule in rules) {
      const fieldRules = rules[keyRule];
      const messageError = checkField({
        fieldRules,
        value: fields[keyRule],
        fields,
      });

      if (typeof messageError === "string") {
        errorsMessages[keyRule] = messageError;
      }
    }
    setErrors(errorsMessages);
    return errorsMessages;
  };

  const checkField = ({
    fieldRules,
    value,
    fields,
  }: IDataForCheck<DefaultFields>) => {
    let checkRole = {} as IValidationResponse;
    for (const role in fieldRules) {
      const parameter = fieldRules[role];
      checkRole = validationMethods[role](value, fields?.[parameter]);
      
      if (!checkRole.status) {
        break;
      }
    }

    return checkRole?.errorMessage;
  };

  const fails = (errorsMessage?: IErrorsMessages<DefaultFields>) => {
    if (errorsMessage !== undefined) {
      return Object.values(errorsMessage).length === 0
        ? { status: true }
        : { status: false, messages: errorsMessage };
    }
    return Object.values(errors).length === 0
      ? { status: true }
      : { status: false, messages: errors };
  };

  return { errors, validate, checkField, fails, setErrors };
};
