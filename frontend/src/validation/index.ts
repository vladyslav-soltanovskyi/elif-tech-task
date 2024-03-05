import { IRules, TRuleSchema } from "../hooks/useValidator/types";

export const orderRules = {
  address: {
    isRequired: true
  },
  email: {
    isRequired: true,
    isEmail: true
  },
  phone: {
    isRequired: true,
    isPhone: true
  },
  name: {
    isRequired: true
  }
} satisfies IRules;

export type TOrderRules = TRuleSchema<typeof orderRules>;