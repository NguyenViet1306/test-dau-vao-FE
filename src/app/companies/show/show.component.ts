import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CompanyService} from "../../service/Company.service";
import {Company} from "../../model/Company";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  companies: Company[] = []
  constructor(private companyService: CompanyService,
              ) {
  }

  ngOnInit(): void {
    this.display()
  }

  display() {
    this.companyService.findAll().subscribe((data) => {
      this.companies = data
    })
  }



}
