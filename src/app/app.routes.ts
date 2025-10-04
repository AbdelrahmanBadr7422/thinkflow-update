import { Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((c) => c.HomeComponent),
        title: 'Posts',
      },
      {
        path: 'post/:postid',
        loadComponent: () =>
          import('./pages/post-detial/post-detial.component').then(
            (c) => c.PostDetialComponent
          ),
        title: 'Posts',
      },
      {
        path: 'newpost',
        loadComponent: () =>
          import('./auth/components/new-post/new-post.component').then(
            (c) => c.NewPostComponent
          ),
        title: 'Posts',
        // Auth Guard
      },
      {
        path: 'signin',
        loadComponent: () =>
          import('./auth/components/singin/singin.component').then(
            (c) => c.SinginComponent
          ),
        title: 'Sign in',
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./auth/components/singup/singup.component').then(
            (c) => c.SingupComponent
          ),
        title: 'Sign in',
      },
      {
        path: 'profile/:usename',
        loadComponent: () =>
          import('./auth/components/profile/profile.component').then(
            (c) => c.ProfileComponent
          ),
        title: 'Profile',
        // Auth Guard
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/components/pagenotfound/pagenotfound.component').then(
        (c) => c.PagenotfoundComponent
      ),
    title: 'Not Found',
  },
];
