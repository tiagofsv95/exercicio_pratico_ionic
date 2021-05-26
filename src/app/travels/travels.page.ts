import { Component, OnInit } from '@angular/core';
import { TravelsService } from '../api/travels.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.page.html',
  styleUrls: ['./travels.page.scss'],
})
export class TravelsPage implements OnInit {
  travels

  constructor(private travelsService: TravelsService) { }

  ngOnInit() {
    this.travels = this.travelsService.getTravels();
  }

}
