import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content implements OnInit{

  photoCover:string = "https://s2.glbimg.com/G2SdEgmv80StKpqKXR5cN6IU62g=/smart/e.glbimg.com/og/ed/f/original/2020/03/09/viuva-negra-scarlett-johansson.jpg"
  contentTitle:string = "VIÚVA NEGRA"
  contentDescription:string = "Ullamco ex fugiat labore nisi sunt amet non pariatur ad magna veniam laborum deserunt. Laborum eu enim sit dolore consequat occaecat aute velit quis sit do sunt reprehenderit. Anim consectetur duis ullamco officia consectetur."

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
