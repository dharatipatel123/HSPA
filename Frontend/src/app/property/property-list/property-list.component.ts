import { Component } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {
  sellRent = 1;
  properties: IProperty[];

  constructor(private route: ActivatedRoute, private housingService: HousingService) {
    this.properties = [];
  }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.sellRent = 2; // Means we are on rent-property URL else we are on base URL
    }
    this.housingService.getAllProperties(this.sellRent).subscribe(
      data => {
        this.properties = data;
      }, error => {
        console.log(error);
      }
    )
  }
}
