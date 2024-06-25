import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FlipkartComponent } from './flipkart/flipkart.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FlipkartComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {
  title = 'flipkart';
}
