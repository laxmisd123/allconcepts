import { Component, OnInit } from '@angular/core';
//import { TaskdataService } from ".taskdata.service";
//import { Task } from './task';
import { TaskdataService } from '../taskdata.service';
import { Task } from '../task';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  arr: Task[] = [];
  constructor(private _data: TaskdataService) {}

  ngOnInit() {}
  onSaveTask(f) {
    this._data.addTask(f.value).subscribe((data: any) => {
      console.log(data);
    });
  }
}
