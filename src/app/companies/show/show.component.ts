import {Component, OnInit, SimpleChanges} from '@angular/core';
import {CompanyService} from "../../service/Company.service";
import {Company} from "../../model/Company";
import {ActivatedRoute, Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  companies: Company[] = []
  p!: number
  page: number = 1;
  count: number = 0;
  tableSize: number | undefined = 1;
  tableSizes: any = [3, 6, 9];

  displayedColumns: string[] = ['id', 'name', 'customer', 'address', 'info'];
  dataSource: Company[] = []

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.display()
  }

  display() {
    this.companyService.findAll().subscribe((value) => {
      this.companies = value;
      this.dataSource = value;
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

}
