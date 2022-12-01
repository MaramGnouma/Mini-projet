import { Component, OnInit } from '@angular/core';
import { Animal } from '../modelfront/animal';
import { AnimalService } from '../ServiceFront/animal.service';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit {
  lesAnimaux!:Animal[];
 
  constructor(private animalsService:AnimalService) { }
 filterdog!:any;
  ngOnInit(): void {
    this.animalsService.getAnimals().subscribe (data => this.lesAnimaux = data)
  }
  // onDog(){
    
  // }
  afficher:number=0;
  animalFilter(lesAnimaux:Animal[],type:string){
    const a =lesAnimaux.filter(animal => animal.type == type);
    return a;
    }
    transformation(n:number){
      this.afficher=n;
    }

}
