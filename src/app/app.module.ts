import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { ServicesComponent } from './modules/admin/apps/services/services.component';
import { RecentWorksComponent } from './modules/admin/apps/recent-works/recent-works.component';
import { ReadyToProvideComponent } from './modules/admin/apps/ready-to-provide/ready-to-provide.component';
import { OurTeamComponent } from './modules/admin/apps/our-team/our-team.component';
import { CustomerSaysComponent } from './modules/admin/apps/customer-says/customer-says.component';
import { RecentNewsComponent } from './modules/admin/apps/recent-news/recent-news.component';
import { FaqsComponent } from './modules/admin/apps/faqs/faqs.component';
import { ContactWithUsComponent } from './modules/admin/apps/contact-with-us/contact-with-us.component';
import { AboutComponent } from './modules/admin/apps/about/about.component';

const routerConfig: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    preloadingStrategy       : PreloadAllModules
};

@NgModule({
    declarations: [
        AppComponent ,
        ServicesComponent ,
        RecentWorksComponent ,
        ReadyToProvideComponent ,
        OurTeamComponent ,
        CustomerSaysComponent ,
        RecentNewsComponent ,
        FaqsComponent ,
        ContactWithUsComponent ,
        AboutComponent ,
    ] ,
    imports: [
        BrowserModule ,
        BrowserAnimationsModule ,
        RouterModule.forRoot(appRoutes , routerConfig) ,

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule ,
        FuseConfigModule.forRoot(appConfig) ,
        FuseMockApiModule.forRoot(mockApiServices) ,

        // Core module of your application
        CoreModule ,

        // Layout module of your application
        LayoutModule ,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({})
    ] ,
    exports: [
    ] ,
    bootstrap: [
        AppComponent
    ]
})
export class AppModule
{
}
