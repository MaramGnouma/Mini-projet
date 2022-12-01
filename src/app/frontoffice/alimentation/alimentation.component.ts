import { Component, OnInit } from '@angular/core';
import { Alimentation } from 'src/app/Model/alimentation';
import { AlimentationservService } from '../ServiceFront/alimentationserv.service';

@Component({
  selector: 'app-alimentation',
  templateUrl: './alimentation.component.html',
  styleUrls: ['./alimentation.component.css']
})
export class AlimentationComponent implements OnInit {

  Alim!:Alimentation[];
  constructor(private alimService:AlimentationservService) { }

  ngOnInit(): void {
  
 this.alimService.getAlimentation().subscribe (data => this.Alim = data)
   
  }

}
