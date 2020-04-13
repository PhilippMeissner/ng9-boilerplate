import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {RandomNumberComponent} from './random-number/random-number.component';


@NgModule({
  declarations: [
    RandomNumberComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    RandomNumberComponent,
  ],
})
export class ExampleFeatureModule {
}
