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
    { img: 'assets/highlights/organic.png', caption: 'Organic' },
    { img: 'assets/highlights/substainable.png', caption: 'Substainable' },
    { img: 'assets/highlights/cheap.png', caption: 'Cheap' },
    { img: 'assets/highlights/durable.png', caption: 'Durable' },
    { img: 'assets/highlights/cool.png', caption: 'Cool' },
  ];

  constructor() {}
}
