import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Accessoire } from 'src/app/Model/accessoire';
import { AccessoiresservService } from '../ServiceFront/accessoiresserv.service';

@Component({
  selector: 'app-selectedacess',
  templateUrl: './selectedacess.component.html',
  styleUrls: ['./selectedacess.component.css']
})
export class SelectedacessComponent implements OnInit {

  idProduit!:number; 
produit!:Accessoire;
employeForm!:FormGroup;
lesEmployes!:Accessoire[];
  constructor(private activatetRoute:ActivatedRoute,private produitservService:AccessoiresservService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.idProduit = this.activatetRoute.snapshot.params['id'];
    this.produitservService.getProduitsById(this.idProduit).subscribe((data) => (this.produit = data));
    this.produitservService.getProduitsnouvById(this.idProduit).subscribe((data) => (this.produit = data));
    this.createForm();
  }
  get lesDiplomes(){
    return this.employeForm.get('diplomes') as FormArray;
  }
  createForm(){
    this.employeForm = this.fb.nonNullable.group({
      diplomes:this.fb.array([])
    })
  }
  ajouterDiplome(){
    this.lesDiplomes.push(this.fb.group({
      email:[''],
      message:['']
    }))
  }


}
