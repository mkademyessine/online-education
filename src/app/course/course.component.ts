import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [
    {'id':1,'name':'Learn Angular','description':'this a test for me to know whether it works or not','image':'../../assets/angular.jpg'},
    {'id':2,'name':'Learn TypeScript','description':'this a test for me to know whether it works or not','image':'../../assets/typescript.jpg'},
    {'id':3,'name':'Learn Nodejs','description':'this a test for me to know whether it works or not','image':'../../assets/nodejs.jpg'},
    {'id':4,'name':'Learn Reactjs','description':'this a test for me to know whether it works or not','image':'../../assets/reactjs.jpg'}
  ]

}
