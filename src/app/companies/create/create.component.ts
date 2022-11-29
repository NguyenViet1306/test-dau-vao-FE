import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../service/Company.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private companyService: CompanyService,
              private router: Router) {
  }

  ngOnInit(): void {
  }
  createForm = new FormGroup({
    id: new FormControl,
    name: new FormControl(""),
    address: new FormControl(""),
    customer: new FormControl(""),
  })

  create(){
    this.companyService.create(this.createForm.value).subscribe()
    this.createForm.reset()
    this.router.navigate(["/"]);
  }
}
