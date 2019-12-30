import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-night',
  templateUrl: './night.component.html',
  styleUrls: ['./night.component.css']
})
export class NightComponent implements OnInit {

  data = [];

  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.build1();
  }

  build1(){
    this.apiservice.build_1()
        .subscribe(da =>{
          var trial=da
          console.log(trial)
          var t = trial
          for (let i =0;i<t.length;i++){
            if("total_pass" in t[i]){
              t[i].test_id = t[i]["test_id"]
              t[i].test_name=t[i]["test_name"]
              t[i].suit_id = t[i]["suit_id"]
              t[i].suit_name = t[i]["suit_name"]
              t[i].status=t[i]["status"]
              t[i].total_fail = t[i]["total_fail"]
              t[i].total_pass = t[i]["total_pass"]
              t[i].total = t[i]["total"]
              t[i].starttime = t[i]["starttime"]
              t[i].endtime = t[i]["endtime"]
              //console.log(this.Test)

            this.data.push(t[i])
            }
           }
         });

  }

}
