import { Component } from '@angular/core';

interface Highlight {
  img: string;
  caption: string;
}

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.scss',
})
export class HighlightsComponent {
  highlights: Highlight[] = [
    { img: 'assets/highlights/organic.png', caption: 'ORGANIC' },
    { img: 'assets/highlights/substainable.png', caption: 'SUBSTAINABLE' },
    { img: 'assets/highlights/cheap.png', caption: 'CHEAP' },
    { img: 'assets/highlights/durable.png', caption: 'DURABLE' },
    { img: 'assets/highlights/cool.png', caption: 'COOL' },
  ];

  constructor() {}
}
