import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { ConfirmationRequiredModernComponent } from 'app/modules/admin/pages/authentication/confirmation-required/modern/confirmation-required.component';

const routes: Routes = [
    {
        path    : 'confirmation-required',
        children: [
            {
                path     : 'modern',
                component: ConfirmationRequiredModernComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        ConfirmationRequiredModernComponent
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
export class ConfirmationRequiredModule
{
}
