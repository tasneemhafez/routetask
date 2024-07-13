import { Component, OnInit } from '@angular/core';
import { JsonService } from './json.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _JsonService: JsonService) {}
  cusdata: any[] = [];
  trandata: any[] = [];
  mergedData: any = [];
  searchTerm: string = '';
  trmsearch!: string;
  data: any;
  show1: boolean = true;
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = false;
  show5: boolean = false;
  Select_Student: string = ' Select Student';

  ngOnInit() {
    this._JsonService.getDatacus().subscribe({
      next: (res) => {
        this.cusdata = res.customers;
        this.trandata = res.transactions;
        this.mergeArrays();
        console.log(this.mergedData);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  mergeArrays() {
    this.mergedData = this.cusdata.flatMap((cust) => {
      return this.trandata
        .filter((trans) => trans.customer_id == cust.id)
        .map((trans) => ({
          CustomerId: cust.id,
          Name: cust.name,
          TransId: trans.id,
          Date: trans.date,
          Amount: trans.amount,
        }));
    });
  }

  chartOptions1 = {
    title: {
      text: 'Ahmed Ali Transaction graph',
    },
    data: [
      {
        type: 'line',
        color: 'blue',

        dataPoints: [
          { label: 'Jan 1, 2022 ', y: 1000 },
          { label: 'Jan 2, 2022', y: 2000 },
          { label: 'Jan 3, 2022', y: 0 },
        ],
      },
    ],
  };

  chartOptions2 = {
    title: {
      text: 'Aya Elsayed Transaction graph',
    },
    data: [
      {
        type: 'line',
        color: 'green',

        dataPoints: [
          { label: 'Jan 1, 2022 ', y: 550, indexLabel: 'Lowest\u2193' },
          { label: 'Jan 2, 2022', y: 1300, indexLabel: 'Highest\u2191' },
          { label: 'Jan 3, 2022', y: 0 },
        ],
      },
    ],
  };
  chartOptions3 = {
    title: {
      text: 'Mina Adel Transaction graph',
    },
    data: [
      {
        type: 'line',
        color: 'green',

        dataPoints: [
          { label: 'Jan 1, 2022 ', y: 500, indexLabel: 'Lowest\u2193' },
          { label: 'Jan 2, 2022', y: 1250, indexLabel: 'Highest\u2191' },
          { label: 'Jan 3, 2022', y: 0 },
        ],
      },
    ],
  };
  chartOptions4 = {
    title: {
      text: 'Sarah Reda Transaction graph',
    },
    data: [
      {
        type: 'line',
        color: 'green',

        dataPoints: [
          { label: 'Jan 1, 2022 ', y: 750 },
          { label: 'Jan 2, 2022', y: 0 },
          { label: 'Jan 3, 2022', y: 0 },
        ],
      },
    ],
  };
  chartOptions5 = {
    title: {
      text: 'Mohamed Sayed Transaction graph',
    },
    data: [
      {
        type: 'line',
        color: 'green',

        dataPoints: [
          { label: 'Jan 1, 2022 ', y: 2500, indexLabel: 'Highest\u2191' },
          { label: 'Jan 2, 2022', y: 875, indexLabel: 'Lowest\u2193' },
          { label: 'Jan 3, 2022', y: 0 },
        ],
      },
    ],
  };

  show(num: Number): void {
    if (num == 1) {
      this.show1 = true;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.show5 = false;
      this.Select_Student = 'Ahmed Ali';
    } else if (num == 2) {
      this.show1 = false;
      this.show2 = true;
      this.show3 = false;
      this.show4 = false;
      this.show5 = false;
      this.Select_Student = 'Aya Elsayed';
    } else if (num == 3) {
      this.show1 = false;
      this.show2 = false;
      this.show3 = true;
      this.show4 = false;
      this.show5 = false;
      this.Select_Student = 'Mina Adel';
    } else if (num == 4) {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = true;
      this.show5 = false;
      this.Select_Student = 'Sarah Reda';
    } else if (num == 5) {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.show5 = true;
      this.Select_Student = 'Mohamed Sayed';
    }
  }
}
