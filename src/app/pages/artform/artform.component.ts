import { Component } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@
Component({
  selector: 'app-artform-page',
  templateUrl: './artform.component.html',
  styleUrls: ['./artform.component.css']
})
export class ArtformComponent {
  

  constructor(private router: Router,private hero:HeroService) {  }
artform=this.hero.giveData();
  gotoHere(id:any)
{
  localStorage.setItem('id',id);
  this.router.navigate(['/singlepage']);
}
}