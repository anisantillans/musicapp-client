import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Artist} from '../models/artist';
import {UserService} from '../services/user.service';
import {ArtistService} from '../services/artist.service';
import {GLOBAL} from '../services/global';

@Component({
  selector:'artist-edit',
  templateUrl:'../views/artist-add.html',
  providers:[UserService, ArtistService]
})

export class ArtistEditComponent implements OnInit{
  public titulo:string;
  public artist:Artist;
  public identity;
  public token;
  public url:string;
  public alertMessage1 :string;
  public is_edit;
  constructor(private _route : ActivatedRoute,
     private _router: Router,
     private _userService:UserService,
     private _artistService: ArtistService){
   this.titulo='Editar nuevo artista';
    this.identity=this._userService.getIdentity();
    this.token=this._userService.getToken();
    this.url=GLOBAL.url;
    this.artist= new Artist('','','');
    this.alertMessage1="";
    this.is_edit=true;
  }

  ngOnInit(){

    console.log('artist-edit.component.ts cargado');
  }

  getArtist1(){
    this._route.params.forEach((params:Params)=>{
      let id=params['id'];
      this._artistService.getArtist(this.token,id).subscribe(
        response=>{
          if(!response.artist){
            this._router.navigate(['/']);
          }else{
            this.artist=response.artist;
          }
        },
        error =>{
          var errorMessage = <any> error;
          if (errorMessage !=null){
            var body= JSON.parse(error._body);
            //this.alertMessage = body.message;
            console.log(error);
          }
        }
      );
    });
  }
  onSubmit(){
    this._route.params.forEach((params:Params)=>{
      let id=params['id'];
        this._artistService.editArtist(this.token,id,this.artist).subscribe(
          response =>{
              if(!response.artist){
                this.alertMessage1="Error en el servidor";
              }else{

                this.alertMessage1="El artista se ha actualizado correctamente";
                this.artist=response.artist;
                this._router.navigate(['/editar-artista',response.artist._id]);
              }
          },
          error =>{
            var errorMessage = <any> error;
            if (errorMessage !=null){
              //var body= JSON.parse(error._body);
              console.log(error);
            }
          }
        );
  });
  }
}
