import {Component, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CompanyService} from "../../service/Company.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  id: any;
  company: any;

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

  ngOnChanges(changes: SimpleChanges): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.companyService.findOne(this.id).subscribe((data)=>{
        this.company = data
      })
    })
  }
}
