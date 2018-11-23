import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-employee-list',
  template: `
    <p>
      employee-list works!
    </p>
    <ul class="items">
    <li *ngFor="let emp of employee" >
    {{emp.id}}, {{emp.name}}
    </li>
</ul>

  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public selectedId;
  employee = [
    {"id": 1, "name": "naresh"},
    {"id": 2, "name": "hemadri"},
    {"id": 3, "name": "navitha"},
    {"id": 4, "name": "kavitha"},
    {"id": 5, "name": "mahesh"}
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
