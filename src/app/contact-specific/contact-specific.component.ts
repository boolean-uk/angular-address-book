import { Component } from '@angular/core';
import { GlobalArrayService } from '../global-array.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-specific',
  templateUrl: './contact-specific.component.html',
  styleUrls: ['./contact-specific.component.css'],
})
export class ContactSpecificComponent {
  id!: number;

  constructor(
    private globalArrayService: GlobalArrayService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10); // Access route parameter
  }

  get contact() {
    return this.globalArrayService.getById(this.id);
  }
}
