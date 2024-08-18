import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrl: './department-detail.component.css'
})
export class DepartmentDetailComponent {
  constructor(private route: ActivatedRoute, private router: Router) {  }

  departmentId:any;

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get("id") || "");
    // this.departmentId = id;
    /*Snapshot method used. 
      drawback: Bcz of it, only URL updates on click of back/next & vies stays same.
                when back/next is clicked; angualr checks if same comp can be reused.
      And it uses same component; hence ngOnInit() is not called again & view is not updated.
      Instead paramMap() is used. It returns an observable to wich if we subscribe;
      we get updated value to kodify the view.
    */

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get("id") || "");
      this.departmentId = id;
    });
  };

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(["/departments", previousId]);
  };

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(["/departments", nextId]);
  };

  goToDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(["/departments", {id: selectedId}]);
  };
}
