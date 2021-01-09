import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, TokenStorageService } from '@candy-shop/core/authorization';
import { ErrorResponses } from '@candy-shop/data-access/api';
import { LoginResponse, User } from '@candy-shop/data-access/models';
import { UserStore } from '@candy-shop/data-access/user';
import { UserFormBuilder } from '@candy-shop/ui/forms';
import { ToastrService } from '@candy-shop/ui/toastr';
import { RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'coin-market-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent implements OnInit {
  constructor(
    private readonly _router: Router,
    private readonly _userStore: UserStore,
    private readonly _authService: AuthService,
    private readonly _toastrService: ToastrService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _userFormBuilder: UserFormBuilder,
    private readonly _tokenStorageService: TokenStorageService,
    @Inject(RECAPTCHA_SETTINGS) private readonly _recaptchaSettings: RecaptchaSettings
  ) {}

  loginFormGroup: FormGroup;
  registerFormGroup: FormGroup;
  recaptchaFormGroup: FormGroup;
  isLoginFormVisible = true;
  isRecaptchaTokenValid = false;
  showRecaptchaErrorMessage = false;
  supportedCryptocurrenciesLoading = true;
  siteKey: string;

  supportedCryptocurrencies$: Observable<{ name: string; icon: string }[]>;

  ngOnInit(): void {
    this.createFormGroups();
    this.siteKey = this._recaptchaSettings.siteKey;
  }

  changeForm(): void {
    this.isLoginFormVisible = !this.isLoginFormVisible;
  }

  onSignIn(user: User): void {

      this.signInExecution(user);

  }

  signInExecution(user: User): void {
    this._authService.signIn(user).subscribe(
      (response: LoginResponse) => {
        this.handleSuccesfulLogin(response);
      },
      () => {
        this.loginFormGroup.reset();
        this._toastrService.error('Bad creditials, try again.');
      }
    );
  }

  onSignUp(user: User): void {

      this.signUpExecution(user);

  }

  signUpExecution(user: User): void {
    this._authService.signUp(user).subscribe(
      () => {
        this.isLoginFormVisible = true;
        this._toastrService.success('Account created');
      },
      (error: HttpErrorResponse) => {
        switch (error.error.type) {
          case ErrorResponses.EMAIL_DUPLICATION: {
            this.registerFormGroup.reset();
            this._toastrService.error('Given email already exists');
            break;
          }
          case ErrorResponses.NAME_DUPLICATION: {
            this.registerFormGroup.reset();
            this._toastrService.error('Given name already exists');
            break;
          }
          default: {
            this.registerFormGroup.reset();
            this._toastrService.error('Server error');
            break;
          }
        }
      }
    );
  }

  createFormGroups(): void {
    this.loginFormGroup = this._userFormBuilder.createLoginForm().getForm();
    this.registerFormGroup = this._userFormBuilder.createRegisterForm().getForm();
    this.recaptchaFormGroup = this._userFormBuilder.createRecaptchaFormGroup().getForm();
  }

  handleSuccesfulLogin(response: LoginResponse): void {
    this._tokenStorageService.saveLoginResponse(response);
    this._authService.setUserAuthorizationStatus(true);
    this._router.navigate(['/pages'], { relativeTo: this._activatedRoute });
    this._toastrService.success('Succesful login.');

    const user = response as User;
    this._userStore.update({ user });
  }

  recaptchaResolve(event: Event): void {
    this._authService
      .checkRechaptchaTokenValidity(String(event))
      .pipe(tap((value) => (this.isRecaptchaTokenValid = value.success)))
      .subscribe();
  }
}
