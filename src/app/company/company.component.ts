import { Component, OnInit } from '@angular/core';
import {Company} from "../model/Company";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CompanyService} from "../service/Company.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: Company[] = []
  idp?: number
  companyForm!: FormGroup;

  constructor(private companyService: CompanyService,
              private formGroup: FormBuilder) {

  }

  ngOnInit(): void {
    this.displayCompanies()
    this.companyForm = this.formGroup.group({
      id: [''],
      name: [''],
      address: [''],
      customer: [''],
    })
  }

  displayCompanies() {
    this.companyService.findAll().subscribe(value => {
      this.companies = value
      console.log(value)
    })
  }

  displayFormCreate() {
    let modal = document.getElementById("myModal");
    // @ts-ignore
    modal.style.display = "block";
    // @ts-ignore
    this.setUpFormCreate()

  }

  setUpFormCreate() {
    // @ts-ignore
    document.getElementById("name").value = ""
    // @ts-ignore
    document.getElementById("address").value = ""
    // @ts-ignore
    document.getElementById("customer").value = ""
    // @ts-ignore
    document.getElementById("titleFrom").innerHTML = "Tạo mới công ty";
    // @ts-ignore
    document.getElementById("buttonCreate")!.hidden = false
    // @ts-ignore
    document.getElementById("buttonUpdate")!.hidden = true
  }

  setUpFormUpdate(company: Company) {
    this.companyForm.patchValue(company)
    // @ts-ignore
    document.getElementById("titleFrom").innerHTML = "Chỉnh sửa công ty";
    // @ts-ignore
    document.getElementById("buttonCreate")!.hidden = true
    // @ts-ignore
    document.getElementById("buttonUpdate")!.hidden = false
    // @ts-ignore
    document.getElementById("myModal").style.display = "block"
  }

  closeFromCreate() {
    let modal = document.getElementById("myModal");
    // @ts-ignore
    modal.style.display = "none";
  }

  createCompany() {
    let company = {
      id: this.companyForm.value.id,
      name: this.companyForm.value.name,
      address: this.companyForm.value.address,
      customer: this.companyForm.value.customer
    }
    this.companyService.create(company).subscribe(value => {
      this.createSuccess()
      // @ts-ignore
      document.getElementById("myModal").style.display = "none"
      this.displayCompanies()
      console.log(value)
    }, error => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Tạo mới thất bại',
        showConfirmButton: false,
        timer: 1500
      })
    })
    // @ts-ignore
    document.getElementById("rest").click()
  }

  createSuccess() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tạo mới thành công',
      showConfirmButton: false,
      timer: 1500
    })
  }

  updateForm(id?: number) {
    this.idp = id;
    this.companyService.findOne(this.idp).subscribe(value => {
      this.setUpFormUpdate(value)
    })
  }

  updateCompany(){
    let company = {
      id: this.idp,
      name: this.companyForm.value.name,
      address: this.companyForm.value.address,
      customer: this.companyForm.value.customer,
    }

    Swal.fire({
      title: 'Bản có chắc chắn muốn chỉnh sửa?',
      showDenyButton: true,
      confirmButtonText: 'Chỉnh sửa',
      denyButtonText: `Hủy`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // @ts-ignore
        this.companyService.update(company).subscribe(value => {
          // @ts-ignore
          this.setUpFormUpdate(value)
          // @ts-ignore
          document.getElementById("myModal").style.display = "none"
          this.displayCompanies()
        }, error => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Chỉnh sửa thất bại',
            showConfirmButton: false,
            timer: 1500
          })
        })
        Swal.fire('Chỉnh sửa thành công!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Hủy bỏ!', '', 'info')
      }
    })

  }

  deleteCompany(id?: number){
    this.idp = id
    Swal.fire({
      title: 'Bạn có chắc chắn muốn xóa?',
      text: "Dữ liệu sẽ không thể khôi phục!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý!',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        this.companyService.delete(id).subscribe(value => {
          this.displayCompanies()
        }, error => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Xóa thất bại',
            showConfirmButton: false,
            timer: 1500
          })
        })
        Swal.fire(
          'Xóa thành công!',
          'Dữ liệu đã bị xóa bỏ',
          'success'
        )
      }
    })
  }

}
