import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alimentation } from 'src/app/Model/alimentation';
import { AlimentationservService } from '../ServiceFront/alimentationserv.service';

@Component({
  selector: 'app-selectedalim',
  templateUrl: './selectedalim.component.html',
  styleUrls: ['./selectedalim.component.css']
})
export class SelectedalimComponent implements OnInit {
  idAlim!:number;
  alimentation!:Alimentation;
  
  constructor(private activatetRoute:ActivatedRoute,private alimentationsService:AlimentationservService) { }

  ngOnInit(): void {
    this.idAlim = this.activatetRoute.snapshot.params['id'];

    this.alimentationsService.getalimentationById(this.idAlim).subscribe((data) => (this.alimentation = data));

    

}


}
