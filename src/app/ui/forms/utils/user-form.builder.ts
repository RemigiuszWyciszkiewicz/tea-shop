import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordConfirmationValidator } from '@candy-shop/utils/validators';
import { BaseFormBuilder } from './base-form.builder';


@Injectable()
export class UserFormBuilder extends BaseFormBuilder {
  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
  }

  createLoginForm(): BaseFormBuilder {
    this._form = this._formBuilder.group({
      password: ['test123', Validators.required],
      email: ['user@user.com', [Validators.required, Validators.email]],
      recaptcha: [''],
    });
    return this;
  }

  createRegisterForm(): BaseFormBuilder {
    this._form = this._formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(4)]],
        password: ['', [Validators.required]],
        passwordConfirmation: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      },
      { validator: passwordConfirmationValidator('password', 'passwordConfirmation') }
    );
    return this;
  }

  createRecaptchaFormGroup(): BaseFormBuilder {
    this._form = this._formBuilder.group({
      recaptcha: ['', Validators.required],
    });
    return this;
  }
}
