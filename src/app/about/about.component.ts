import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  introText: string = `Welcome to Square Goods. 
    Your ultimate online destination for all things effortlessly cool and 
    uniquely modern. Nestled in the digital cosmos, 
    we bring a curated selection of products that merge both quality and style, 
    all at your fingertips.`;
}
