import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggleMenu($event: MouseEvent) {
    // var dd = $event.composedPath();
    // dd[4];
    var dd = document.getElementsByClassName("sidenav-menu");
    dd[0].classList.toggle("hide");
    // location.reload(true);
    history.go(0);
  }


  constructor() { }

  ngOnInit(): void {
  }

//   ngOnChanges
//   ⇒ component가 생성될 때 가장 먼저 일어나는 게 속성 바인딩(@Input() 데코레이터 같은거)
//   ⇒ 부모로부터 어떤 값을 받았는 지 확인하고나서 component가 생성되어야 하기 때문에!
//   ngOnInit
//   ⇒ component가 생성될 때
//   ⇒ 사실 constructor가 제일 먼저 시작되기는 하는데 가급적이면 ngOnInit에 적어라.
//   ⇒ component가 처음 생성될 때 불려지고 그 이후에는 불려지지 않는다. (changes랑 다르게)
//   ngDoCheck
//   ⇒ init: 한 번 불려지면 끝.그 이후로 불려지지 않는다.check: component 내에서 움직임만 있어도 그거를 감지해서 로직을 실행함.

//   ngAfterContentInit
//   ⇒ content랑 view는 조금 다르다.
//   ⇒ 부모 content > 자식 > 부모 view
//   ⇒ 부모 component상에서 자식 component의 내용에 대해서는 알 수가 없다.그래서 selector 내부에 기입해도 나타나지 않음.이걸 받아오는 방법이 transclude ? 인데 부모에서 작성하고 자식 component내부에 < ng - content > </>
//   ⇒ view의 경우 전체 태그내용이 전부 렌더링돼서 불려졌을 때.그래서 자식 view관련 hook이 다 불려진 후에 부모의 view hook이 불려짐.
//   ngAfterContentChecked
//   ngAfterViewInit
//   ngAfterViewChecked

//   ngDestroy
//   ⇒ component가 사라지면 발동 ? 등장 ?




}
