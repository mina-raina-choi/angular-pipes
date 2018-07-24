import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-pipes',
  templateUrl: './async-pipes.component.html',
  styleUrls: ['./async-pipes.component.css']
})
export class AsyncPipesComponent implements OnInit {
  promiseData: object;
  promise: Promise<object>;

  constructor() { }

  ngOnInit() {
    this.promise = this.getPromise();
    // this.getPromise().then(v => this.promiseData = v); 
    // 콜백의 결과값을 변수에 직접 바인딩했던 것과 달리 별다른 바인딩작업을 하지 않고도 async 파이프를 사용해promise의 값을 출력
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise complete!"), 3000);
    });
  }
}
