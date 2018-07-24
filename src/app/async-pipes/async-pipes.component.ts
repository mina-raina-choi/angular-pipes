import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-async-pipes',
  templateUrl: './async-pipes.component.html',
  styleUrls: ['./async-pipes.component.css']
})
export class AsyncPipesComponent implements OnInit {
  // AsyncPipe with promises
  promiseData: object;
  promise: Promise<object>;

  // AsyncPipe with observables
  observableData: number;
  // subscription: any;
  observable: Observable<number>;

  constructor() { }

  ngOnInit() {
    this.promise = this.getPromise();
    // this.getPromise().then(v => this.promiseData = v); 
    // 콜백의 결과값을 변수에 직접 바인딩했던 것과 달리 별다른 바인딩작업을 하지 않고도 async 파이프를 사용해promise의 값을 출력

    this.subscribeObservable();
    this.observable = this.getObservable();

  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise complete!"), 3000);
    });
  }


  getObservable() { 
    return Observable
        .interval(1000)
        .take(10)
        .map((v) => v * v);
  }

  subscribeObservable() { 
    // this.subscription = this.getObservable()
    //     .subscribe( v => this.observableData = v);
  }

  ngOnDestroy() { 
    // if (this.subscription) {
    //   this.subscription.unsubscribe();
    // }
  }
}
