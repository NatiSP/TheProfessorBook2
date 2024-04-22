import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tcg',
    loadChildren: () => import('./pages/tcg/tcg.module').then( m => m.TcgPageModule)
  },
  {
    path: 'vg',
    loadChildren: () => import('./pages/vg/vg.module').then( m => m.VgPageModule)
  },
  {
    path: 'rk9',
    loadChildren: () => import('./pages/rk9/rk9.module').then( m => m.Rk9PageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'go',
    loadChildren: () => import('./pages/go/go.module').then( m => m.GoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'timer',
    loadChildren: () => import('./pages/timer/timer.module').then( m => m.TimerPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), IonicModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
