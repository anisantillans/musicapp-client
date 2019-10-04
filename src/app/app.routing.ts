import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Params } from '@angular/router';
//import HomeComponent
import {HomeComponent} from './components/home.component';

//import artist
import {ArtistListComponent} from './components/artist-list.component';
//import user_registe
import {UserEditComponent} from './components/user-edit.component';
//import add artists
import {ArtistAddComponent} from './components/artist-add.component';
//editArtist

import {ArtistEditComponent} from './components/artist-edit.component';
//artist ArtistDetailComponent

import {ArtistDetailComponent} from './components/artist-detail.component';


const appRoutes:Routes =[

  {path:'', component:HomeComponent},
  {path:'artistas/:page', component:ArtistListComponent},
  {path:'crear-artista', component:ArtistAddComponent},
    {path:'artista/:id', component:ArtistDetailComponent},
  {path:'editar-artista/:id', component:ArtistEditComponent},
  {path:'mis-datos', component:UserEditComponent},
  {path:'**', component:HomeComponent}
];

export const appRoutingProviders : any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);
