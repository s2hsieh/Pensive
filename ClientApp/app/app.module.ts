import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { ReactiveFormsModule } from '@angular/forms';
import {
	AppComponent,
	HomeComponent,
	IndexComponent,
	ItemComponent,
	CreateItemComponent,
	EditItemComponent,
	FilterMenuComponent,
	HeaderComponent
} from './components/index';
import { DataService, DataResolver, UserService } from './services/index';

@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		HomeComponent,
		IndexComponent,
		ItemComponent,
		CreateItemComponent,
		EditItemComponent,
		FilterMenuComponent,
		HeaderComponent
	],
	providers: [DataService, DataResolver, UserService],
	imports: [
		UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
		ReactiveFormsModule,
		RouterModule.forRoot([
			{ path: '', redirectTo: 'index', pathMatch: 'full' },
			{ path: 'index', component: HomeComponent },
			{ path: 'index/create', component: CreateItemComponent },
			{ path: 'index/edit/:id', component: EditItemComponent, resolve: { thought: DataResolver } },
			{ path: '**', redirectTo: 'index' }
		])
	]
})
export class AppModule { }