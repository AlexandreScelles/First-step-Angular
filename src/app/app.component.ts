import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	mySnap!: FaceSnap;

	ngOnInit() {
	  this.mySnap = new FaceSnap(
		'Naï-Kho',
		'Mon meilleur ami !',
		'https://catedog.com/wp-content/uploads/2014/03/berger_belge_0b.jpg',
		new Date(),
		0
	  );
	}
}
