import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-small-card',
  imports: [RouterLink],
  templateUrl: './small-card.html',
  styleUrl: './small-card.css',
})
export class SmallCard implements OnInit {

  @Input()
  photoCover:string = "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png"
  @Input()
  cardTitle:string = "NOVA SÉRIE ANUNCIADA"
  @Input()
  Id:string = "0"

  constructor() {}

  ngOnInit(): void {}
}
