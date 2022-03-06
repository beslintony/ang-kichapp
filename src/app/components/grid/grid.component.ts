import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() lg!: number;
  @Input() md!: number;
  @Input() sm!: number;
  @Input() xs!: number;
  @Input() gap: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
