import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cars } from '../cars';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() cars!: Cars;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
