import {Component , OnInit , ViewChild , ViewEncapsulation} from '@angular/core';
import {FormBuilder , FormGroup , NgForm , Validators} from '@angular/forms';
import {fuseAnimations} from '@fuse/animations';
import {FuseAlertType} from '@fuse/components/alert';
import {AuthService} from 'app/core/auth/auth.service';

@Component({
    selector: 'sign-up-modern' ,
    templateUrl: './sign-up.component.html' ,
    encapsulation: ViewEncapsulation.None ,
    animations: fuseAnimations
})
export class SignUpModernComponent implements OnInit {
    @ViewChild('signUpNgForm') signUpNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success' ,
        message: ''
    };
    signUpForm: FormGroup;
    showAlert: boolean = false;
    pedf="jeejen laura";

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService ,
        private _formBuilder: FormBuilder
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        this.signUpForm = this._formBuilder.group({
                name: ['' , Validators.required] ,
                email: ['' , [Validators.required , Validators.email]] ,
                password: ['' , Validators.required] ,
                profile: [''] ,
                agreements: ['' , Validators.requiredTrue]
            }
        );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    signUp() {
        this._authService.signUp(this.signUpForm.value).subscribe((data) => {
            console.log(data);
        });
    }


}
