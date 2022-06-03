import { Route } from '@angular/router';
import { HelpCenterComponent } from 'app/modules/admin/apps/help-center/help-center.component';
import { HelpCenterSupportComponent } from 'app/modules/admin/apps/help-center/support/support.component';
import { HelpCenterMostAskedFaqsResolver } from 'app/modules/admin/apps/help-center/help-center.resolvers';
import {FeaturesComponent} from "./features/features.component";

export const helpCenterRoutes: Route[] = [
    {
        path     : '',
        component: HelpCenterComponent,
        resolve  : {
            faqs: HelpCenterMostAskedFaqsResolver
        }
    },
    {
        path     : 'support',
        component: HelpCenterSupportComponent
    },
    {
        path     : 'features',
        component: FeaturesComponent
    },
];
