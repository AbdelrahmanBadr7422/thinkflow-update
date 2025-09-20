import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterLink  } from '@angular/router';
=======
import { RouterLink } from "@angular/router";
>>>>>>> 1b6f6f86d5e73bbd25ae27fe432e6c0d563c1a97

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
<<<<<<< HEAD
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isLogged: boolean = false;
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
=======
  styleUrl: './header.component.css'
})
export class HeaderComponent {
userName:string = 'boda';
>>>>>>> 1b6f6f86d5e73bbd25ae27fe432e6c0d563c1a97
}
