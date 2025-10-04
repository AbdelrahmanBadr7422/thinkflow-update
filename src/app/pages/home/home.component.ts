import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts = [
  {
    id:1,
    title: "FauxPilot - an open-source GitHub Copilot server",
    url: "github.com/moyix",
    comments: 49,
    points: 86,
    username: "fniephaus"
  },
  {
    id:2,
    title: "Y Combinator narrows current cohort size by 40%, citing downturn and funding",
    url: "techcrunch.com",
    comments: 20,
    points: 63,
    username: "npalli"
  },
  {
    id:3,
    title: "Nonprofit markups.org is exposing the most egregious new car prices",
    url: "themanual.com",
    comments: 33,
    points: 28,
    username: "TreyGuy"
  },
  {
    id:4,
    title: "RTEMS Real Time Operating System",
    url: "rtems.org",
    comments: 8,
    points: 766,
    username: "TreyGuy"
  },
  {
    id:5,
    title: "I used DALL-E 2 to generate a logo",
    url: "jacobmartins.com",
    comments: 281,
    points: 288,
    username: "fniephaus"
  },
  {
    id:6,
    title: "DALL-E 2 prompt book [pdf]",
    url: "dallery.gallery",
    comments: 82,
    points: 38,
    username: "npalli"
  },
  {
    id:7,
    title: "The Pickleball Troll",
    url: "thepickler.com",
    comments: 16,
    points: 37,
    username: "alphabetting"
  },
  {
    id:8,
    title: "Show HN: Property Trends Scraped from Zillow",
    url: "pillr.io",
    comments: 77,
    points: 88,
    username: "tndibona"
  },
  {
    id:9,
    title: "Use one big server",
    url: "specbranch.com",
    comments: 447,
    points: 1089,
    username: "pcmludqlq"
  },
  {
    id:10,
    title: "What is an isogeny? (2019)",
    url: "johndcook.com",
    comments: 4,
    points: 12,
    username: "hasheddan"
  }
];

}
