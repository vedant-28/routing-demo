import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent {
  constructor(private route: ActivatedRoute) { }

  selectedId:any;
  departments:any = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Java"},
    {"id": 3, "name": "Spring"},
    {"id": 4, "name": "React"},
    {"id": 5, "name": "MongoDB"},
  ];

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get("id") || "");
      this.selectedId = id;
    });
  };

  isSelected(departments:any) {
    return departments.id === this.selectedId;
  };
}