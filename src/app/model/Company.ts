export class Company {
  id?: number;
  name?: string;
  address?: string;
  customer?: string;

  constructor(id: number, name: string, address: string, customer: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.customer = customer;
  }
}
