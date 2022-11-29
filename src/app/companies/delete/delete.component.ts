import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CompanyService} from "../../service/Company.service";
import {Company} from "../../model/Company";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id: any;
  company?: Company;

  constructor(private route: ActivatedRoute,
              private companyService: CompanyService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.companyService.findOne(this.id).subscribe((data)=>{
        this.company = data
        console.log(data)
      })
    })

  }
  delete(){
    this.companyService.delete(this.id).subscribe()
    this.router.navigate(["/"]);
  }
}
