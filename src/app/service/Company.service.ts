import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "../model/Company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Company[]> {
    return this.httpClient.get<Company[]>("http://localhost:8081/api");
  }

  findOne(id?: number): Observable<Company> {
    return this.httpClient.get<Company>("http://localhost:8081/api/" + id);
  }

  create(company?: any): Observable<Company> {
    return this.httpClient.post<Company>("http://localhost:8081/api", company);
  }

  update(company?: Company): Observable<Company> {
    return this.httpClient.put<Company>("http://localhost:8081/api/update", company);
  }

  delete(id?: number): Observable<Company> {
    return this.httpClient.delete<Company>("http://localhost:8081/api/delete/" + id);
  }

  findName(name?: string): Observable<Company[]> {
    return this.httpClient.get<Company[]>("http://localhost:8081/api/findCompanyByName/" + name)
  }
}
