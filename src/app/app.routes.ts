import { Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

export const routes: Routes = [
<<<<<<< HEAD
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
=======

    
    // {
    //     path: 'user',
    //     canActivate: [userAuthGuard],
    //     loadComponent: () => import('./Components/User/user.component')
    //       .then(m => m.UserComponent),
    //     title: 'User',
    //     children: [
    //       { path: '', redirectTo: 'Profile', pathMatch: 'full' },
    //       {
    //         path: 'Profile',
    //         loadComponent: () => import('./Components/User/profile/profile.component')
    //           .then(m => m.ProfileComponent),
    //         title: 'Profile'
    //       },
    //       {
    //         path: 'Portfolio',
    //         loadComponent: () => import('./Components/User/portfolio/portfolio.component')
    //           .then(m => m.PortfolioComponent),
    //         title: 'Portfolio'
    //       },
    //       {
    //         path: 'Follow',
    //         loadComponent: () => import('./Components/User/follow/follow.component')
    //           .then(m => m.FollowComponent),
    //         title: 'Follow',
    //         children: [
    //           { path: '', redirectTo: 'Followers', pathMatch: 'full' },
    //           {
    //             path: 'Followers',
    //             loadComponent: () => import('./Components/User/follow/follower/follower.component')
    //               .then(m => m.FollowerComponent),
    //             title: 'Followers'
    //           },
    //           {
    //             path: 'Following',
    //             loadComponent: () => import('./Components/User/follow/following/following.component')
    //               .then(m => m.FollowingComponent),
    //             title: 'Following'
    //           }
    //         ]
    //       }
    //     ]
    //   },
>>>>>>> 1b6f6f86d5e73bbd25ae27fe432e6c0d563c1a97
];
