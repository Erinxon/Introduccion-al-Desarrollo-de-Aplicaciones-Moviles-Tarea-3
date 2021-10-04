import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sumadora',
    loadChildren: () => import('./pages/sumadora/sumadora.module').then( m => m.SumadoraPageModule)
  },
  {
    path: 'traductor-numeros-letras',
    loadChildren: () => import('./pages/traductor-numeros-letras/traductor-numeros-letras.module').then( m => m.TraductorNumerosLetrasPageModule)
  },
  {
    path: 'tabla-multiplicar',
    loadChildren: () => import('./pages/tabla-multiplicar/tabla-multiplicar.module').then( m => m.TablaMultiplicarPageModule)
  },
  {
    path: 'video-youtube',
    loadChildren: () => import('./pages/video-youtube/video-youtube.module').then( m => m.VideoYoutubePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
