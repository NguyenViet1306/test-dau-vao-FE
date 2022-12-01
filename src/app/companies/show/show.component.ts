import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../service/Company.service";
import {Company} from "../../model/Company";
import {SlideInOutAnimation} from '../../animations';
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  animations: [SlideInOutAnimation]
})
export class ShowComponent implements OnInit {
  companies: Company[] = []
  p!: number
  page: number = 1;
  count: number = 0;
  tableSize: number | undefined = 2;
  tableSizes: any = [3, 6, 9];
  animationState = 'out';
  classToggle = 'close'



  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.display()
  }

  display() {
    this.companyService.findAll().subscribe((value) => {
      this.companies = value;
      // this.dataSource = value;
    })
  }

  findCompanyByName() {
    // @ts-ignore
    let name = document.getElementById("search").value
    if (name == null) {
      this.display()
    } else {
      this.companyService.findName(name).subscribe(value => {
        // @ts-ignore
        this.companies = value
      })
    }
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.display();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.display();
  }


  changeTableSize(size?: number) {
    this.tableSize = size
  }

  toggleShowDiv(divName: string) {
    if (divName === 'divA') {
      console.log(this.animationState);
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
      console.log(this.animationState);
      this.classToggle = this.animationState == 'out' ? 'close' : 'open'
    }
  }

}
