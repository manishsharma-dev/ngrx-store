import { Component, inject, signal } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CommonModule} from '@angular/common';
import { formFeature } from './form/form.feature';
import { updateFormField, resetForm } from './form/form.action';



@Component({
  selector: 'app-root',
  imports: [ CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected form$: Observable<{name: string; email: string}>;
  private store = inject(Store);

  constructor() {
    this.form$ = this.store.select(formFeature.selectFormState);
  }

  protected onFieldChange(field: 'name' | 'email', value: string): void {
    this.store.dispatch(updateFormField({ field, value }));
  }

  protected resetForm(): void {
    this.store.dispatch(resetForm());
  }
}
