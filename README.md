# 이 프로젝트는 Angular study 프로젝트 입니다.

## 모듈 구조 tt
```
@NgModule({
  /*
     컴포넌트 등록
     1. 하나의 컴포넌트는 하나의 모듈에 등록 되어 있어야 한다. ( 여러 모델에 중복 등록 불가능 )
     2. 컴포넌트는 모듈에 등록 되어 있어야 사용 가능 하다.
  */
  declarations: [
    AppComponent
  ],
  // 다른 모듈 import
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SectionModule
  ],
  // 컴포넌트가 아닌 서비스 모듈
  providers: [],
  // 실행할 컴포넌트
  bootstrap: [AppComponent],
  // 컴포넌트를 export 하여 다른 컴포넌트에서 사용 가능 하게 설정
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class AppModule { }
```

## 컴포넌트 데이터 바인딩
1. 부모 -> 자식
- parent.component.ts
```
export class ParentComponent implements OnInit {

  present   // 필드 변수 생성

  ...

}
```
- parent.component.html
```
<app-child [inputData]="present"></app-child>
```

2. 자식 -> 부모
- child.component.ts
```
export class ChildComponent implements OnInit {

  // 속성 값 정의 (vue에서 프로퍼티 개념)
  @Input() inputData: string
  @Output() clickEvent = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
      console.log(changes)
      for(let propName in changes) {
        if (propName === 'inputData') {
            this.clickEvent.emit([data])
        }
      }
    }

  ...

}
```
- child.component.html
```
부모 컴포넌트에서 받은 데이터는 {{ inputData }} 입니다.
```

## 생성자에서 접근제한자 사용
- 아래 두 소스는 동일하다.
```
            test: number
constructor(
    test: number
) {
    this.test = test
}
```
```
constructor(
    private test: number
) { }
```

## 라우터 모듈의 정의 방법
1. 모듈에서 정의
2. 해당 컴포넌트에서 정의

## 라우터 모듈의 사용법 2가지
1. html에서 사용
```
<a [routerLink]="'[주소]'">이동</a>
```

2. 스크립트에서 사용
```
constructor(
    private router: Router
  ) { }

  onMovePage() {
    this.router.navigateByUrl('[주소]')
  }
```


## 서비스 등록 방법 3가지

-  모듈에 정의
```
@NgModule({
  declarations: [
    ...
  ],
  exports: [
    ...
  ],
  imports: [
    ...
  ],
  // 서비스 등록
  providers: [
    Service
  ]
})
export class Module { }

```

-  컴포넌트에 정의
```
@Component({
  selector: '...',
  templateUrl: 'xxx.html',
  styleUrls: ['xxx.scss'],
  providers: [Service]  // 서비스 등록
})
export class Component implements OnInit {

```

-  서비스에 정의
```
@Injectable(
  {
    providedIn: 'root' // 전역에 정의
    providedIn: Comment // 특정 컴포넌트에 정의
  }
)
export class Service {
```

- 생성자 주입
```
constructor(
    private service: Service
  ) { }
```
## 생명 주기 (lifecycle)
- Angualer 공식 가이드 참조 ( https://angular.io/guide/lifecycle-hooks )

| Hook Method | 설명 | 타이밍 |
|---|---|---|
| ngOnChanges() | Angular가 데이터 바인딩 된 입력 속성을 설정하거나 재설정 할 때 응답합니다. 이 메서드는 SimpleChanges현재 및 이전 속성 값 의 개체를 받습니다.<br><br>이것은 매우 자주 발생하므로 여기서 수행하는 모든 작업은 성능에 상당한 영향을 미칩니다. | ngOnInit()하나 이상의 데이터 바인딩 된 입력 속성이 변경 되기 전과 변경 될 때마다 호출 됩니다.
| ngOnInit() | Angular가 먼저 데이터 바인딩 된 속성을 표시하고 지시문 또는 구성 요소의 입력 속성을 설정 한 후 지시문 또는 구성 요소를 초기화합니다. | 첫 번째 ngOnChanges().
| ngDoCheck() | Angular가 자체적으로 감지 할 수 없거나 감지 할 수없는 변경 사항을 감지하고 조치를 취합니다.| ngOnChanges()모든 변경 감지 실행 직후와 ngOnInit()첫 번째 실행 직후에 호출 됩니다.
| ngAfterContentInit() | Angular가 외부 콘텐츠를 구성 요소의 보기 또는 지시문이 있는 보기에 투영 한 후 응답합니다.
| ngAfterContentChecked() | Angular가 지시문 또는 구성 요소에 투영 된 내용을 확인한 후 응답합니다. | 이후 ngAfterContentInit()및 이후 마다 호출 됩니다 ngDoCheck().
| ngAfterViewInit() | Angular가 구성 요소의 뷰와 자식 뷰 또는 지시문이 포함 된 뷰를 초기화 한 후 응답합니다. | 첫 번째 이후에 한 번 호출 ngAfterContentChecked()됩니다.
| ngAfterViewChecked() | Angular가 구성 요소의 뷰와 자식 뷰 또는 지시문이 포함 된 뷰를 확인한 후 응답합니다. | 이후 ngAfterViewInit()및 모든 후속 ngAfterContentChecked().
| ngOnDestroy() | Angular가 지시문 또는 구성 요소를 파괴하기 직전에 정리하십시오. Observable을 구독 취소하고 이벤트 핸들러를 분리하여 메모리 누수를 방지하십시오. | Angular가 지시문 또는 구성 요소를 파괴하기 직전에 호출됩니다.

## Vue 생명 주기와 비교
| Angular | Vue |
|---|---|
| ngOnInit | created
| ngAfterContentInit | beforeMount
| ngAfterContentChecked | mounted
| ngAfterViewInit | beforeUpdate
| ngAfterViewChecked | updated

## 부모 컴포넌트 자식 컴포넌트 생명 주기 순서

1. ngOnInit (부모)
2. ngDoCheck (부모)
3. ngAfterContentInit (부모)
4. ngAfterContentChecked (부모)
5. ngOnInit (자식)
6. ngDoCheck (자식)
7. ngAfterContentInit (자식)
8. ngAfterContentChecked (자식)
9. ngAfterViewInit (자식)
10. ngAfterViewChecked (자식)
11. ngAfterViewInit (부모)
12. ngAfterViewChecked (부모)

## 파일 자동 생성 명령어
1. ng generate <schematic> [options]
2. ng g <schematic> [options]

- 자주 쓰이는 명령어

| 명령어 | 약자 | 예제|
|---|---|---|
| component | c | ng g c [컴포넌트 명] |
| module | m | ng g m [모델 명] |
| service | s | ng g s [서비스 명] |
