import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {
public deptid:any;
public courseVal:any;
public detail:any=[
 
  {id:1001,header:'Angular Front-end Development',subheader:'Why Learn Advanced Front-end Teachnologies ( Angular )',para:'Basic front-end development is to convert web application design (UX) files into User Interface (UI) of the web application through HTML, JavaScript (JS) and CSS coding. Its advanced part is the implementation of Angular.Front-end developers in the industry has equally high demand as the Back-end developers. As they complement each other.',duration:'The total duration of training is 90 Hrs. The full course takes around 3 months time to complete.',fees:'14,000'},
  {id:1002,header:'Web Designing',subheader:'Why Learn PHP',para:'PHP is currently ranked as the most sought-after skill in JOB Market. For freshers with training on PHP courses in Kolkata, it is easy to step into the IT industry. PHP is free as well as secured web scripting language. This is the reason for its widespread popularity in the world of internet. PHP runs on more than 20 million websites including Facebook & Wikipedia.There are many PHP training centers in Kolkata.',duration:'The total duration of training is 140 Hrs.Training generally gets conducted on 3 days per week, for 3 hours per day. The full course takes around 4 months time to complete.',fees:'14,500'},
  {id:1003,header:'MEAN / MERN Stack Development',subheader:'Why Learn Advanced Front-end Teachnologies ( Angular )',para:'Basic front-end development is to convert web application design (UX) files into User Interface (UI) of the web application through HTML, JavaScript (JS) and CSS coding. Its advanced part is the implementation of AngularFront-end developers in the industry has equally high demand as the Back-end developers. As they complement each other.',duration:'The total duration of training is 90 Hrs. The full course takes around 3 months time to complete.',fees:'14,000'},
  {id:1004,header:'Full-Stack Development',subheader:'What is MEAN / MERN Stack Development',para:'MEAN / MERN is a collection of JavaScript-based technologies. In MEAN Stack we use MongoDB, Express.js, Angular, and Node.js, and in MERN Stack we use MongoDB, Express.js, React JS, and Node.js to develop web applications.MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas.Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',duration:'The total duration of training is 180 Hrs. The full course takes around 5 months time to complete.',fees:'25,000'},
  {id:1005,header:'PHP Web ReactJS Frontend Development',subheader:'Why Learn PHP',para:'PHP is currently ranked as the most sought-after skill in JOB Market. For freshers with training on PHP courses in Kolkata, it is easy to step into the IT industry. PHP is free as well as secured web scripting language. This is the reason for its widespread popularity in the world of internet. PHP runs on more than 20 million websites including Facebook & Wikipedia.There are many PHP training centers in Kolkata.',duration:'The total duration of training is 140 Hrs.Training generally gets conducted on 3 days per week, for 3 hours per day. The full course takes around 4 months time to complete.',fees:'14,500'},
  {id:1006,header:'Angular Front-end Development',subheader:'Why Learn Advanced Front-end Teachnologies ( Angular )',para:'Basic front-end development is to convert web application design (UX) files into User Interface (UI) of the web application through HTML, JavaScript (JS) and CSS coding. Its advanced part is the implementation of Angular.Front-end developers in the industry has equally high demand as the Back-end developers. As they complement each other.',duration:'The total duration of training is 90 Hrs. The full course takes around 3 months time to complete.',fees:'14,000'},
  {id:1007,header:'Dot Net Web Development',subheader:'What is MEAN / MERN Stack Development',para:'MEAN / MERN is a collection of JavaScript-based technologies. In MEAN Stack we use MongoDB, Express.js, Angular, and Node.js, and in MERN Stack we use MongoDB, Express.js, React JS, and Node.js to develop web applications.MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas.Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',duration:'The total duration of training is 180 Hrs. The full course takes around 5 months time to complete.',fees:'25,000'},
  {id:1008,header:'PHP Web Development',subheader:'Why Learn PHP',para:'PHP is currently ranked as the most sought-after skill in JOB Market. For freshers with training on PHP courses in Kolkata, it is easy to step into the IT industry. PHP is free as well as secured web scripting language. This is the reason for its widespread popularity in the world of internet. PHP runs on more than 20 million websites including Facebook & Wikipedia.There are many PHP training centers in Kolkata.',duration:'The total duration of training is 140 Hrs.Training generally gets conducted on 3 days per week, for 3 hours per day. The full course takes around 4 months time to complete.',fees:'14,500'}
]


constructor(private actroute:ActivatedRoute) { 
  this.deptid=this.actroute.snapshot.paramMap.get('id')
}

  ngOnInit(): void {
    this.detail.map((x:any) =>{
     if( x.id==this.deptid)
this.courseVal=x;
    })
   
  }

}
