import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})
export class FaceSnapComponent implements OnInit {
	@Input() FaceSnap!: FaceSnap;

	title!: string;
	description!: string;
	createdDate!: Date;
	snaps!: number;
	imageUrl!: string;
	buttonText!: string;

	ngOnInit() {
		this.title = 'Naï-Kho';
		this.description = 'Un ami révé !';
		this.createdDate = new Date();
		this.snaps = 6;
		this.imageUrl = 'https://catedog.com/wp-content/uploads/2014/03/berger_belge_0b.jpg';
		this.buttonText = 'Oh Snap!';
	}

	onSnap() {
		if (this.buttonText === 'Oh Snap!') {
		  this.FaceSnap.snaps++;
		  this.buttonText = 'Oops, unSnap!';
		} else {
		  this.FaceSnap.snaps--;
		  this.buttonText = 'Oh Snap!'
		}
	  }
}

