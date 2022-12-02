import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../service/Company.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  editForm: any;
  company: any;

  constructor(private companyService: CompanyService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.companyService.findOne(this.id).subscribe((data) => {
        this.company = data
        this.editForm = new FormGroup({
          id: new FormControl,
          name: new FormControl(data.name),
          address: new FormControl(data.address),
          customer: new FormControl(data.customer),
        })
      })
    })
  }

  edit() {
    this.companyService.update(this.id ,this.editForm.value).subscribe();
    this.router.navigate(["/"]);
  }
}
