import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public arr:any=[
    {id:1001,title:"Android App Development",content:'Android (kitkat, lollipop, marshmallow), Sqlite Database, JSON Parsing, Google Map API Config, Facebook Integration',price:'16,000'},
    {id:1002,title:"Web Designing",content:'Web Page Design, UI/UX Design Using HTML5, CSS3, jQuery, JS, Responsive design, Bootstrap, Mobile App Design',price:'30,000'},
    {id:1003,title:'MEAN / MERN Stack Development',content:'Angular/React JS, Node.js, Express.js, MongoDB, Build full stack JavaScript app',price:'12,500'},
    {id:1004,title:"Full-Stack Development",content:'API Back-end Development,Front-end Development with Angular/React JS,API & Database Connectivity,Project',price:'25,000'},
    {id:1005,title:'ReactJS Frontend Development',content:'HTML, CSS, Javascript, Jquery,React Js, API Connectivity',price:' 16,000'},
    {id:1006,title:'Angular Frontend Development',content:'HTML, CSS, Javascript, Jquery,Angular, API Connectivity',price:'19,000'},
    {id:1007,title:'Dot Net Web Development',content:'Object Oriented Programming, MVC Architecture, .Net Controls, LINQ, JS, AJAX, Web Service',price:'15,500'},
    {id:1008,title:'PHP Web Development',content:'Object Oriented PHP, PHP Frameworks, MVC Architecture, Codeigniter, AJAX, jQuery, WordPress',price:'14,500'}
  ]
  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
  constructor(private  router:Router) { }

  ngOnInit(): void {
    
  
  }
  fullInfo(val:any)
  {
this.router.navigate(['/home/detailpage',val.id])
  }

}
