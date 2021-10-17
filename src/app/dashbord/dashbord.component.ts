import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  userImg: string;
  defaultImg: string = 'https://lh3.googleusercontent.com/a-/AOh14GibyOLPfAZjAd-szPq2t8YoWzT4KyR60zCtsYve=s360-p-rw-no';
  users: any[];
  constructor() {
    setTimeout(() => {
      this.userImg = 'https://scontent.fcmn5-1.fna.fbcdn.net/v/t1.6435-9/62198179_2307400276197474_3122124264195489792_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEXxB3T2_gmy0aZTHGouvpno-ZuL3t4XVqj5m4ve3hdWvFAHF-e2hawZYKRiZY3LDXa3iX5I3L3zHTwa_-7riGj&_nc_ohc=xhfhNngJ5IgAX-SZ_i7&_nc_ht=scontent.fcmn5-1.fna&oh=db289a72859146bbb2e08ecd77ed5928&oe=618F98FC';
      this.users.push({ name: "mohamed", age: 1, speed: 1 });
    }, 4000);
    this.users = [
      { name: "issam", age: 29, speed: 55 },
      { name: "aziz", age: 23, speed: 88 },
      { name: "chaibia", age: 25, speed: 89 },
    ]
  }

  ngOnInit(): void {
  }

}
