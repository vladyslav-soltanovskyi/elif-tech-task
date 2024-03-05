import React from "react";

export type TSubmitHandler<FormValues> = (values: FormValues, e?: React.BaseSyntheticEvent) => Promise<void> | void;

export type TSubmitEvent<FormValues> = (onSubmit: TSubmitHandler<FormValues>) => (e: React.BaseSyntheticEvent) => Promise<void> | void;