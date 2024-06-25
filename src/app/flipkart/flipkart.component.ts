import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { routes } from '../app.routes';


@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css'],
  imports: [CommonModule, RouterModule, RouterLink],
  standalone: true,
  
})
export class FlipkartComponent implements OnInit {
  targetMinutes: number = 15; // 15-minute timer
  currentSeconds: number = 0;
  currentMinutes: number = this.targetMinutes;
  interval: any;
  phoneProduct: any[] = []

  constructor( private router: Router){
                
    this.phoneProduct = [{image: '../../assets/img/mini_magick20240605-9061-vnk757 (1).jpeg', name:'Apple iPhone 15 Pro (Black Titanium, 1 TB)', rating:'4.7',
       rom: '1TB ROM', reviews:'640 Ratings & 62 Reviews', display:'15.49 cm (6.1 inch) Super Retina XDR Display',
       camera:'15.49 cm (6.1 inch) Super Retina XDR Display', proccess:'A17 Pro Chip, 6 Core Processor Processor',
        warrenty:'1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories', price:'500', originalprice:'₹1,84,900' },
        {image: '../../assets/img/mini_magick20240605-9061-vnk757 (1).jpeg', name:'Apple iPhone 15 Pro (Black Titanium, 1 TB)', rating:'4.7',
          rom: '1TB ROM', reviews:'640 Ratings & 62 Reviews', display:'15.49 cm (6.1 inch) Super Retina XDR Display',
          camera:'15.49 cm (6.1 inch) Super Retina XDR Display', proccess:'A17 Pro Chip, 6 Core Processor Processor',
           warrenty:'1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories', price:'500', originalprice:'₹1,84,900' }];

  }

  
  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    // this.interval = setInterval(() => {
    //   if (this.currentSeconds > 0) {
    //     this.currentSeconds--;
    //   } else {
    //     if (this.currentMinutes > 0) {
    //       this.currentMinutes--;
    //       this.currentSeconds = 59;
    //     } else {
    //       clearInterval(this.interval);
    //       // Handle timer expiry here
    //     }
    //   }
    // },1000 );
  }

  formatTime(time: number): string {
    return time < 10 ? '0' + time : time.toString();
  }


}

