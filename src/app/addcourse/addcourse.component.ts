import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {
  courseTitle=""
  courseDescription=""
  courseDuration=""
  distributor=""
  courseDate=""
  courseVenue=""
constructor(private api:ApiService){}
  

  readValues=()=>
  {
  let data:any={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"distributor":this.distributor,"courseDate":this.courseDate,"courseVenue":this.courseVenue}
  console.log(data)
  this.api.addcourse(data).subscribe(

    (response:any)=>{

      console.log(response)
      if(response.status=="success"){alert("course added succesfully")}
      else{
        alert("something went wrong")
        this.courseTitle=""
        this.courseDate=""
        this.courseDescription=""
        this.courseDuration=""
        this.courseVenue=""
        this.distributor=""
      }

    }

  )

}
  }

