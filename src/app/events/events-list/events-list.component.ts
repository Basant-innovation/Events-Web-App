import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.scss"],
})
export class EventsListComponent implements OnInit {
  event = {
    id: 1,
    name: "Angular Connect",
    date: "9/26/2013",
    time: "10:00 am",
    price: "599.99",
    imageUrl: "/assets/images/angularconnect-shield.png",
    location: {
      address: "1023 DT",
      city: "london",
      country: "England",
    },
  };
  constructor() {}

  ngOnInit() {}
}
