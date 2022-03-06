import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() size?: string;
  @Input() animate?: boolean;
  @Input() backgroundColor?: string;
  @Input() textColor?: string;
  @Input() text?: string;
  @Input() icon?: any;

  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.btnClick!.emit();
  }
}
