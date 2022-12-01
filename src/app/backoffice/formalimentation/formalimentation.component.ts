import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Alimentation } from 'src/app/Model/alimentation';
import { ServiceadmnService } from '../ServiceAdmin/serviceadmn.service';

@Component({
  selector: 'app-formalimentation',
  templateUrl: './formalimentation.component.html',
  styleUrls: ['./formalimentation.component.css']
})
export class FormalimentationComponent implements OnInit {
  prodForm!:FormGroup;
  lesalim!:Alimentation[];
  message!: string;
  constructor(private form:FormBuilder,private servadmin:ServiceadmnService,private router:Router) { }

  ngOnInit(): void {
    this.prodForm = this.form.nonNullable.group({
      libelle:[0],
      prix:[0],
      photo:[''],
     datefabriquation:[''],
      datefin:[''],

    })
  }
  Ajouter() {
    this.servadmin.ajouteralim(this.prodForm.value).subscribe(data=>this.lesalim.push(data));
    this.router.navigate(['/admin']);
    this.message="Ajout fait avec succes";
  }

}
