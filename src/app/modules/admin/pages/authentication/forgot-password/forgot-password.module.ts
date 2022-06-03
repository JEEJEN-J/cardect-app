import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { ForgotPasswordModernComponent } from 'app/modules/admin/pages/authentication/forgot-password/modern/forgot-password.component';

const routes: Routes = [
    {
        path    : 'forgot-password',
        children: [
            {
                path     : 'modern',
                component: ForgotPasswordModernComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        ForgotPasswordModernComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FuseAlertModule,
        SharedModule
    ]
})
export class ForgotPasswordModule
{
}
