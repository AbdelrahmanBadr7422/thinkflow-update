import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { HeaderComponent } from "./shared/components/header/header.component";
=======
import { HeaderComponent } from './shared/components/header/header.component';
>>>>>>> 1b6f6f86d5e73bbd25ae27fe432e6c0d563c1a97

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, HeaderComponent],
=======
  imports: [RouterOutlet,HeaderComponent],
>>>>>>> 1b6f6f86d5e73bbd25ae27fe432e6c0d563c1a97
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'thinkflow';
}
