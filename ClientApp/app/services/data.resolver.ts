import { DataService } from './index';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class DataResolver implements Resolve<any> {

	constructor(private ds: DataService) { }

	resolve(route: ActivatedRouteSnapshot) {
		return this.ds.getThought(+route.params['id']);
	}
}
