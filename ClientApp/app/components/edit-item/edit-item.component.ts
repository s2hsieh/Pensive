import { IThought } from '../../models/index';
import { DataService } from '../../services/index';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'edit-item',
	templateUrl: './edit-item.component.html'
})
export class EditItemComponent implements OnInit {
	thought: IThought;
	editForm: FormGroup;
	content: FormControl;
	color: FormControl;
	colors: string[];

	constructor(private fb: FormBuilder, private ds: DataService, private ar: ActivatedRoute, private r:Router) { }

	ngOnInit() {
		this.colors = this.ds.getAllColors();
		this.ar.data.subscribe(d => {
			this.thought = d['thought'];
			this.editForm = this.fb.group({
				content: [this.thought.content, [Validators.required, Validators.maxLength(200)]],
				color: [this.thought.color, [Validators.required]]
			});
			this.content = <FormControl>this.editForm.controls.content;
			this.color = <FormControl>this.editForm.controls.color;
		});
	}

	update(changes: IThought) {
		if (this.editForm.valid) {
			this.thought.content = changes.content;
			this.thought.color = changes.color;
			this.ds.updateThought(this.thought).subscribe(t => this.r.navigate(['/']));
		}
	}

	remove() {
		this.ds.deleteThought(this.thought.id).subscribe(t => this.r.navigate(['/']));
	}
}
