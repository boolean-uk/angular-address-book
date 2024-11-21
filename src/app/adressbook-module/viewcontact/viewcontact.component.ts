import { Component, OnInit, inject } from '@angular/core';
import { AdressbookService } from '../adressbook.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent implements OnInit{
  
  contact: any;
  constructor(
    // The below is to get the current route
    private readonly route: ActivatedRoute
  ) {}


  private adressbookService = inject(AdressbookService);
  // Getting id using ActivatedRoute
  id = this.route.snapshot.paramMap.get('id');
  
  // Need to do this...
  async ngOnInit(): Promise<void> {
    this.contact = await this.adressbookService.fetchContactById(Number(this.id));

  }
}


