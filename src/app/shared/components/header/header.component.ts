import { Component } from '@angular/core';
import { RouterLink  } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isLogged: boolean = true;
  useName: string = 'username';

  signup() {
    throw new Error('Method not implemented.');
  }
  signin() {
    throw new Error('Method not implemented.');
  }
  signout() {
    throw new Error('Method not implemented.');
  }
}
