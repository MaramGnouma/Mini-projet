import { Component, OnInit } from '@angular/core';
import { Accessoire } from 'src/app/Model/accessoire';
import { AccessoiresservService } from '../ServiceFront/accessoiresserv.service';

@Component({
  selector: 'app-accessoires',
  templateUrl: './accessoires.component.html',
  styleUrls: ['./accessoires.component.css']
})
export class AccessoiresComponent implements OnInit {
  lesProduits!:Accessoire[];
  load:boolean=false;
  constructor(private produitService:AccessoiresservService) { }

  ngOnInit(): void {
    
    this.load=true;
    this.produitService.getProduits().subscribe (data => this.lesProduits = data)
      this.load=false;
   
  }
}
