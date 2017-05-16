import { IThought } from '../../models/index';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'create-item',
	templateUrl:'./create-item.component.html'
})
export class CreateItemComponent implements OnInit {
	createForm: FormGroup;

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.createForm = this.fb.group({
			content: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
			color: ['#ff00ff']
		});
	}

	create(data: IThought) {
		console.log(data);
	}
}
