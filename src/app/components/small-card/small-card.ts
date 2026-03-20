import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.html',
  styleUrl: './small-card.css',
})
export class SmallCard implements OnInit {

  @Input()
  photoCover:string = "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png"
  @Input()
  cardTitle:string = "NOVA SÉRIE ANUNCIADA"

  constructor() {}

  ngOnInit(): void {}
}
