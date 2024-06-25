import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-buy-now',
  standalone: true,
  imports: [ CommonModule, RouterLink],
  templateUrl: './buy-now.component.html',
  styleUrl: './buy-now.component.css'
})
export class BuyNowComponent {

}
