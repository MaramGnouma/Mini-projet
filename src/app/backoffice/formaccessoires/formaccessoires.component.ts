import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Accessoire } from 'src/app/Model/accessoire';
import { ServiceadmnService } from '../ServiceAdmin/serviceadmn.service';

@Component({
  selector: 'app-formaccessoires',
  templateUrl: './formaccessoires.component.html',
  styleUrls: ['./formaccessoires.component.css']
})
export class FormaccessoiresComponent implements OnInit {
  prodForm!:FormGroup;
  lesproduits!:Accessoire[];
  constructor(private form:FormBuilder,private servadmin:ServiceadmnService) { }

  ngOnInit(): void {
    this.prodForm = this.form.nonNullable.group({
      id:[0],
      libelle:[0],
      prix:[0],
      disponible:false,
      photo:[''],
      color:[''],
      materiel:[''],
      brand:[''],
      dimension:['']
    })
  }
  Ajouter() {
    this.servadmin.ajouteracces(this.prodForm.value).subscribe(data=>this.lesproduits.push(data));
    alert("ajout true");
  }

}
