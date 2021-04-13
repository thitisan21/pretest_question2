import { Component } from '@angular/core';
import { CategoriesService } from "src/app/services/categories.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'question2';
  dataTable: string[] = [];
  dataShow: string[] = [];
  constructor(
    private categoriesService: CategoriesService
  ) { }
  ngOnInit() {
    this.categoriesService.getCategories().subscribe((data) => {
      this.dataTable = data
      this.dataShow = data
    })
  }
  onChangeEvent(value: any) {
    const txtSearch = value.target.value
    var dataOld = this.dataTable
    this.dataShow = dataOld.filter((res) => res.includes(txtSearch))
  }
}
