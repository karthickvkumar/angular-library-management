import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  unsavedChanges: boolean = true;
  isloading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onLoad() {

  }

}
