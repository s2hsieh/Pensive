import { IThought } from '../../models/index';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'create-item',
	templateUrl:'./create-item.component.html'
})
export class CreateItemComponent implements OnInit {
	createForm: FormGroup;
	title: FormControl;
	content: FormControl;
	color: FormControl;

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.createForm = this.fb.group({
			title: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
			content: ['', [Validators.required, Validators.maxLength(200)]],
			color: ['violet']
		});
		this.title = <FormControl>this.createForm.controls.title;
		this.content = <FormControl>this.createForm.controls.content;
		this.color = <FormControl>this.createForm.controls.color;
	}

	create(data: IThought) {
		console.log(data);
		console.log(this.createForm.controls);
	}
}
