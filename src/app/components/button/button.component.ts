import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  // we need to make inputs optional
  @Input() text?: string;
  @Input() color?: string;

  // Outsource the btn click since it will have a diff impl depending on which
  //component it
  // we could set this to have type EventEmitter<void> but that is not required
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
