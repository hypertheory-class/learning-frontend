import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-thank-you-entry',
  templateUrl: './thank-you-entry.component.html',
  styleUrls: ['./thank-you-entry.component.css'],
})
export class ThankYouEntryComponent implements OnInit {
  form = this.formBuilder.group({
    to: ['', [Validators.required]],
    reason: ['', [Validators.required, Validators.maxLength(15)]],
  });
  constructor(private formBuilder: FormBuilder) {}

  /// public string Name {get;}

  get to() {
    return this.form.get('to');
  }
  get reason() {
    return this.form.get('reason');
  }
  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log(this.form.errors);
    }
  }
}
