import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomNumberComponent implements OnInit {
  randomNumber?: number;

  constructor() {
  }

  ngOnInit(): void {
    this.randomize();
  }

  randomize() {
    this.randomNumber = Math.random() * 100;
  }
}
