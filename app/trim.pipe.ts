import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim',
  standalone: true,
})
export class trim implements PipeTransform {
  transform(customer: any[], term: string): any[] {
    if (!customer) {
      return customer;
    }

    return customer.filter((customer) => customer.Amount == term);
  }
}
