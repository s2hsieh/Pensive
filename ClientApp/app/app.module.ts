import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { DataService, AppComponent, HomeComponent, IndexComponent, ItemComponent } from './index';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
		HomeComponent,
		IndexComponent,
		ItemComponent
	],
	providers: [DataService],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
			{ path: 'home', component: HomeComponent },

            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
