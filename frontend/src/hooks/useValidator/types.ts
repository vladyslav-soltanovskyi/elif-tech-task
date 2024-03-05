import { validationMethodsWithoutParams, validationMethodsWithParams } from "@utils/validation";

export interface IValidatorData {
  [k: string]: string | boolean;
}

export interface IRules {
  [k: string]: IRule;
}

export type IRuleWithParam = {
  [k in TypeRuleWithParameter]?: number;
};

export type IRuleWithoutParam = {
  [k in TypeRuleWithoutParameter]?: boolean;
};


export type IRule = IRuleWithParam | IRuleWithoutParam;

export interface IDataForCheck<Fields> {
  value: Fields[keyof Fields];
  fieldRules: IRule;
  fields?: Fields;
}

export type TypeRuleMethods = TypeRuleWithoutParameter | TypeRuleWithParameter;

export type TypeRuleWithoutParameter = keyof typeof validationMethodsWithoutParams;
export type TypeRuleWithParameter = keyof typeof validationMethodsWithParams;

export interface IValidationResponse {
  status: boolean;
  errorMessage?: string;
}

export type IErrorsMessages<DefaultFields> = {
  [k in keyof DefaultFields]?: string;
}

export type TRuleSchema<Schema> = {
  [k in keyof Schema]: string;
}