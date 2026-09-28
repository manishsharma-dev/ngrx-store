import { createReducer, on } from '@ngrx/store';
import { updateFormField, resetForm } from './form.action';

export interface FormState {
  name: string;
  email: string;
}

const initialFormState: FormState = {
  name: '',
  email: ''
};

export const reducer = createReducer(
  initialFormState,
  on(updateFormField, (state, { field, value }) => ({
    ...state,
    [field]: value
  })),
  on(resetForm, () => initialFormState)
);