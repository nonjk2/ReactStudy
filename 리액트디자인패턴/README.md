## 목차

- [리액트 디자인패턴](#리액트-디자인패턴)
  - [개요](#개요)
  - [스터디원🤔](#스터디원)
  - [패턴 택 1](#패턴-택-1)
  - [시간](#시간)
  - [발표내용](#발표내용)
- [리액트 디자인패턴](#리액트-디자인패턴-1)
  - [**개요**](#개요-1)
  - [**스터디원🤔**](#스터디원-1)
  - [**패턴 택 1**](#패턴-택-1-1)
  - [**발표내용**](#발표내용-1)

# 리액트 디자인패턴

## 개요

그동안 래퍼런스를 보고 기능구현이나 맞춰진형식에 코드를 짯다면 각종 디자인패턴을 익혀 상황에 맞는 서비스에맞는 코드구현이나 유연성있는 코드작성을 하기위해 시작

> 리액트는 함수형 프로그래밍 패러다임과 선언형 프로그래밍 스타일을 사용함.
> 컴포넌트 기반 아키텍처를 사용하여 개발자가 사용자 인터페이스를 구축할 수 있다. 이렇게 > 컴포넌트를 중심으로 구축하는 방식 때문에 리액트는 다양한 디자인 패턴을 가질 수 있다.

## 스터디원🤔

---

  <a href="https://github.com/nonjk2">
      <img src="https://github.com/nonjk2.png" width="100" height="100"/>
  </a>
  <a href="https://github.com/helloworld442">
      <img src="https://github.com/helloworld442.png" width="100" height="100"/>
  </a>
  <a href="https://github.com/makepin2r">
      <img src="https://github.com/makepin2r.png" width="100" height="100"/>
  </a>
  <a href="https://github.com/TheON2">
      <img src="https://github.com/TheON2.png" width="100" height="100"/>
  </a>
  <a href="https://github.com/junho01052">
      <img src="https://github.com/junho01052.png" width="100" height="100"/>
  </a>

  <a href="https://github.com/Hyeon12">
      <img src="https://github.com/Hyeon12.png" width="100" height="100"/>
  </a>

  <a href="https://github.com/nayoung3669">
      <img src="https://github.com/nayoung3669.png" width="100" height="100"/>
  </a>

  <a href="https://github.com/doyoung1002">
      <img src="https://github.com/doyoung1002.png" width="100" height="100"/>
  </a>
  <a href="https://github.com/Haru-Im">
      <img src="https://github.com/Haru-Im.png" width="100" height="100"/>
  </a>
  <a href="https://github.com/taehyunkim3">
      <img src="https://github.com/taehyunkim3.png" width="100" height="100"/>
  </a>
  <a href="https://github.com/kangsinbeom">
      <img src="https://github.com/kangsinbeom.png" width="100" height="100"/>
  </a>

  <a href="https://github.com/khu107">
      <img src="https://github.com/khu107.png" width="100" height="100"/>
  </a>

## 패턴 택 1

- **옵저버 패턴 (Observer Pattern):** 이벤트 기반의 프로그래밍에서 주로 사용됩니다. (예: Redux) **도영**
- **고차 컴포넌트 패턴 (Higher-Order Component, HOC Pattern):** React에서 컴포넌트 로직을 재사용하기 위해 사용됩니다. **승현**
- **훅 패턴 (Hooks Pattern):** React Hooks를 사용하여 함수형 컴포넌트에서 상태와 생명주기 메서드를 사용할 수 있게 합니다. **건호**

<!-- - **싱글톤 패턴 (Singleton Pattern):** 특정 클래스의 인스턴스가 하나만 생성되도록 보장하는 패턴입니다. -->

- **모듈 패턴 (Module Pattern):** JavaScript에서 모듈의 개념을 구현하는 패턴입니다. **하루**
- **플라이웨이트 패턴 (Flyweight Pattern):** 메모리 사용량을 최소화하기 위해 공유 객체를 사용하는 패턴입니다. **은석**
- **프로토타입 패턴 (Prototype Pattern):** 객체를 복제하여 생성하는 패턴입니다. **은석**
- **팩토리 패턴 (Factory Pattern):** 객체 생성 로직을 캡슐화하는 패턴입니다. **소현**
- **컴파운드 패턴 (Compound Components Pattern):** React에서 여러 컴포넌트를 조합하여 사용하는 패턴입니다. **준호**
- **컨테이너 프레젠테이셔널 패턴 (Container-Presentational Pattern):** React와 같은 컴포넌트 기반의 프레임워크에서 UI와 로직을 분리하는 데 사용됩니다. **혜경**
- **믹스인 패턴 (Mixin Pattern):** 클래스나 객체에 기능을 동적으로 추가하는 패턴입니다. **민지**
- **프로바이더 패턴 (Provider Pattern):** 상태 관리 라이브러리에서 주로 사용됩니다. (예: React의 Context API) **민승**
  <!-- - **랜더 프롭 패턴 (Render Prop Pattern):** React에서 컴포넌트 로직을 재사용하는 또 다른 방법입니다. -->
  <!-- - **프록시 패턴 (Proxy Pattern):** 객체에 대한 접근을 제어하는 패턴입니다. -->
  - **매디에이터/미들웨어 패턴 (Mediator/Middleware Pattern):** 객체 간의 상호 작용을 중앙화하는 패턴입니다. (예: Redux 미들웨어)
    - [링크](https://fanatical-seed-8fa.notion.site/Mediator-Middleware-Pattern-8a6c93cb30e74439b5ad939832abeabe?pvs=4)
    <!-- - **커맨드 패턴 (Command Pattern):** 명령을 객체로 캡슐화하는 패턴입니다. -->

[디자인패턴 사이트 발췌](https://www.patterns.dev/posts)
[번역사이트](https://patterns-dev-kr.github.io/)

## 시간

## 발표내용

- 각패턴 장단점
- 예시 코드나 라이브러리
- 간단히 적용한 코드
- 등
- 약 1~4분 발표

# 리액트 디자인패턴

### **개요**

리액트는 함수형 프로그래밍 패러다임과 선언형 프로그래밍 스타일을 사용하여, 컴포넌트 기반 아키텍처로 개발자가 사용자 인터페이스를 구축할 수 있게 합니다. 이러한 컴포넌트 중심의 구축 방식 덕분에 리액트는 다양한 디자인 패턴을 가질 수 있습니다.

### **스터디원🤔**

은석

민승

승현

도원

준호

소현

나영

하루

태현

신범

### **패턴 택 1**

- **옵저버 패턴 (Observer Pattern)**
- **고차 컴포넌트 패턴 (Higher-Order Component, HOC Pattern)**
- **훅 패턴 (Hooks Pattern)**
- **모듈 패턴 (Module Pattern)**
- **플라이웨이트 패턴 (Flyweight Pattern)**
- **팩토리 패턴 (Factory Pattern)**
- **컴파운드 패턴 (Compound Components Pattern)**
- **컨테이너 프레젠테이셔널 패턴 (Container-Presentational Pattern)**
- **믹스인 패턴 (Mixin Pattern)**

[디자인패턴 참조 사이트](https://www.patterns.dev/posts)
[번역사이트](https://patterns-dev-kr.github.io/)

### **발표내용**

- 각 패턴의 장단점
- 예시 코드나 라이브러리
- 간단히 적용한 코드
- 약 1~4분 발표

---

**[https://thunder-resolution-e7a.notion.site/a8ca3710e4c74ab6b21dad1f6ec7ca4a?pvs=4](https://www.notion.so/a8ca3710e4c74ab6b21dad1f6ec7ca4a?pvs=21)**

!https://dynamic-assets.gather.town/v2/sprite-profile/avatar-gV7nljNpXAGHgAEnbBWv.yndGNo6Z7cBNiq5Prcoy.X6QJIf28SjmC6F-zHrcP.F56IKfmulWPHfqiHEDFc.wphl8X1IEynhSAEGJFn9.aKVFuGqu7agbN3fUavPm.png?d=.

**김혜경**

**컨테이너 프레젠테이셔널 패턴 :
[https://pitch-booklet-498.notion.site/b63a1684d174469b9b39687836a2b0c9?pvs=4](https://www.notion.so/b63a1684d174469b9b39687836a2b0c9?pvs=21)**

!https://dynamic-assets.gather.town/v2/sprite-profile/avatar-gfJduQhTScaZRFCiSZQS.5AJMWsaATmSg6cHFry_d.cXQguqgcMbROPIQ6kZLt.ca2mYxuF45sndpxl7sTw.png?d=.

**이도영**

**옵저버패턴 :
https://whereiserror.tistory.com/158**

!https://dynamic-assets.gather.town/v2/sprite-profile/avatar-ymthi9nHE2gHsaEh5wkA.ng3mnnSqfChk9Fnwz97C.jLU3XcvFuE4HWPAXPakX.LvKxWeFS6PoUnLg8wBvX.kK4FJONf8pLZlp6nSdCt.png?d=.

**임하루**

**모듈 패턴
https://developer-haru.tistory.com/55**

!https://dynamic-assets.gather.town/v2/sprite-profile/avatar-ty0CoZao8eIAgVnSKFg7.M60apoSFdxuWrPElE2HT.UsiDpdtgkO9m0wVhXhbA.jWRxPyatM2P0bdzSnf50.1a2zZbmJkgla7sOHvfdm.QYFpGnd8pmOqtsvpjww4.NKKDlTPYKtsW2G2M3ae1.png?d=.

**이소현**

**팩토리 패턴:
https://hyeon-e.tistory.com/206**

!https://dynamic-assets.gather.town/v2/sprite-profile/avatar-KPK1RNe5O32vJ8IhOicy.tsqp3bYePCFh2roXnyDN.dezdJbT17S9cLFSKehWZ.Xx1p8Kjv0qEg6WPV6niD.jWRxPyatM2P0bdzSnf50.png?d=.

**박민지**

**믹스인 패턴:
[https://www.notion.so/Mixin-baf089606135437ba26d5dddcfbe6c3e](https://www.notion.so/Mixin-baf089606135437ba26d5dddcfbe6c3e?pvs=21)**

!https://dynamic-assets.gather.town/v2/sprite-profile/avatar-gV7nljNpXAGHgAEnbBWv.IxFn4Is3OJFEuIQqAEKY.PSbuRWck1FQZyCxqdjKo.Xx1p8Kjv0qEg6WPV6niD.PkaqFzVEfiTjm99Jk0Ji.KdFp1XwJet15FjqdQa38.png?d=.

**이건호**

**미들웨어 패턴:
[https://fanatical-seed-8fa.notion.site/Mediator-Middleware-Pattern-8a6c93cb30e74439b5ad939832abeabe?pvs=4](https://www.notion.so/Mediator-Middleware-Pattern-8a6c93cb30e74439b5ad939832abeabe?pvs=21)**

**훅 패턴:
[https://fanatical-seed-8fa.notion.site/Hooks-Pattern-2087da985fb44b3e96a283205c8119ae?pvs=4](https://www.notion.so/Hooks-Pattern-2087da985fb44b3e96a283205c8119ae?pvs=21)**

!https://dynamic-assets.gather.town/v2/sprite-profile/avatar-Owh3rJLGGrWnafZevZoC.WsFjzMLccSIfj0CamBVC.Gk3dJr3nE15MeVt54zCM.gprKrlxYF8IQ5F4Jgpi2.ua6kq1m7YDtCPmdkEMGa.SVcjLcSFYvICOx3tmCjv.cgeNbftl8qaqyZrcFwjW.PUdIjdQmEZ8ihPdr06QG.yyoRXYcxTN2hUE5xfwX2.BvJ9Gudmx4Bv6h1S3b4b.png?d=.

**탁승현**

**HOC 패턴: [https://abounding-crow-bb3.notion.site/23-09-13-721333109fcf4451a1ce78bafce742a8?pvs=4](https://www.notion.so/23-09-13-721333109fcf4451a1ce78bafce742a8?pvs=21)**

**최은석**

**FlyWeight 패턴 :**

[https://www.notion.so/eunspopol/Flyweight-fdfe66b29e474eea84e8979c46c22667?pvs=4](https://www.notion.so/Flyweight-fdfe66b29e474eea84e8979c46c22667?pvs=21)
