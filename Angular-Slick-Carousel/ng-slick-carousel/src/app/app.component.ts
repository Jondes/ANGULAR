import { Component } from '@angular/core';

// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  ...,
  standalone: true,
  imports: [
    SlickCarouselModule, // Put in here
  ],
})
export class ExampleComponent {
  ...
}