import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})

// 앵귤러에서 파이프를 만드는 것은 간단하다.
// Class에 @Pipe 데코레이터를 붙인다음 파라미터로 name으로 세팅하고, 
// transform function만 구현하면 된다.
export class CustomPipesComponent implements OnInit {
  imageUrl: string = "";
  
  constructor() { }

  ngOnInit() {
  }

}
