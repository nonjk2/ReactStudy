# Next.js

## Next.js는 무엇이고 어떤 철학을 가지고 있는가 ?

<br>

### Next.js 는 무엇인가

리액트는 SPA이고 웹 모바일 앱을 손쉽게 만들수 있게 해줌 필요한것만 업데이트 해주기 때문

그리고 보통 react router dom 을 사용하여 라우팅을함

> 그렇다면 Next.js는 ?

Frameworks : 큰단위의 솔루션 골격을 정해줌
Libraries : UI라던가 가져다가 쉽게 쓸수있음

Next.js

Full-stack
File-based routing
SEO, Image
Font Optimization , Server Side Rendering

### Next.js 의 철학

2016년도에 Next.js 개발됨
Next.js는 리액트를 베이스로 하고있음
2015년에 설립된 Vercel에서

Vercel은 PaaS를 제공

PaaS는 (Cloud Platform as a Service)

#### Next.js는 왜 필요한가?

<br>
Next.js가 어필한점

**6가지 원칙**

- 이것저것 복잡한 설정을 하지않아도 쉬울것
- 한공간에서 풀스텍
- 개발자가 신경쓰지않아도 코드 스플리팅이나 서버사이드랜더링을 시켜주겠다.
- 코드스플리팅은 잘게잘게 잘라서 사용자에게 보여주는것
- 데이타 패칭을 설정가능하게 만들겠다. client에서 보여주냐 server에서 보여주냐
- 요청사항을 예상가능하게 만들겠다. 페이지에서 필요한것만
- 배포를 손쉽게 만들겠다.

#### nextjs v13

- react 18버전
- 터보팩
- 많은것들이 추가됌
- 배울게 많아짐
- app 라우팅

#### nextjs 를 배우기위한 조건

- 리액트의 유명한 기능 대부분과 개념을 알아야함
- 리액트 만으로는 힘든 한계점
- 그외

#### 그렇다면 리액트 만으로는 힘든 한계점은 ?

- Client Side Rendering 리액트가 사용하는방법

  - 랜더링 하는 주체자가 클라이언트 (브라우저 크롬, 사파리)
  - 리액트 소스코드를 컴파일
  - **장점** : 한번 로딩 되면 빠른 UX 제공 (서비스), 서버의 부하가 작음
  - **단점** : FCP (First contentful content) 페이지 로딩 시간이 길다 TTV (time to view) , 자바스크립트 활성화 필수임 ,SEO 최적화가 힘듬 , 보안에 취약함 , **CDN**에 캐시가 안됨
    - CDN(content delivery network) : 로드밸런서 보자

  이러한 단점들을 고치기위해 나온게 NEXTjs 에서 제공하는 **ISR , SSG**

  > 단점 확인하는법 네트워크탭에서 (default 제한) 느린 3G로 바꾸면 확연히 차이가남

### 랜더링 기법

#### SSG (Static Site Generation)

- 랜더링 하는 주체자가 서버, 빌드할때 렌더링 -> 정적인 사이트만들때에
  - 장점 : 페이지 로딩 시간 TTV ~~쥰나~~빠름
    - 자바스크립트 필요없음
    - SEO 최적화가 좋음
    - 보안이 뛰어남
    - CDN에 캐시가 됨
  - 단점 : 데이터가 정적임 사용자별 정보 제공의 어려움
  - 이래서 나온게 ISR , SSR

#### ISR (Incremental Static ReGeneration)

- 랜더링 하는 주체자가 서버 , 언제 랜더링 하냐 , 주기적으로 렌더링
  - SSG와 동일한 원리이지만 정해진 주기에 따라 데이터를 가져옴
  - 장점 :
    - {...SSG.장점}
    - 데이터가 주기적으로 업데이트됨
  - 단점 :
    - 실시간 데이터가 아님
    - 사용자별 정보 제공의 어려움
    - 이런 문제점을 해결하기 위해 나온게 **SSR**

#### SSR 특징 , 장/단점

- 랜더링 하는 주체자가 서버, 언제 렌더링 하냐 ? **요청시 서버에서 렌더링해서 줌**
  - 장점 :
    - {...SSG.장점}
    - 실시간 데이터를 사용
  - 단점 :
    - SSG, ISR 보다 느릴수있음
    - 서버의 과부하가 걸릴 수 있음 (overhead가 높아짐)
    - CDN에 캐시가 안됨!

> 하나의 완벽한 랜더링 솔루션은 없다

### 하이브리드의 매력

혼합 특정 **목적**을 달성하기 위해 **두개 이상**(이중성 CSR, SSG, ISR , SSR)의 기능이나 요소를 결합

목적 : 성능 좋은 강력한 웹앱

- home : ISR
- about : SSG
- profile : SSR/CSR
- contact : CSR

#### 하이 드레이션 (중요)

하이드레이션 : "stay hydrated" 물로 가득채우다.
즉 , *리액트*로 가득 채우다.

#### 개발시 중요 포인트

TTV ( Time To View )
TTI ( Time To Interact )

**CSR**

- 빈페이지를 보여주고
- form HTML 먹이고
- Js 적용

**SSR**

- 한번에 Index.html 만들어진 것을 받음

사용자에게 보여지거나 기능들이 적용되기 전과 후의 간극 그것을 줄여야함

### 언제 어떤걸 쓰면 좋은지 정리

**Next.js Decision Tree**

사용자의 로그인이 필요?

- yes :
  - CSR SSR Hybrid(SSG+CSR)
- no :
  - static ? :
    - yes :
      - often(자주변경)? :
        - yes : SSR || ISR|SSR+CSR
        - no : ISR
    - no : SSG 사용 예) 블로그

## Intro

```shell
npx create-next-app@latest --experimental-app
```

### Dynamic Routing

4.9 static [params] 넣는법

```tsx
export function generateStaticParams() {
  const products = ["key", "key2"];
  return products.map((product) => ({
    slug: product,
  }));
}
```

### Build

yarn build 시 경로랑 빌드된시간 다보임

### NotFound

[notFound](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)

### Layout

### Link

4.20
preFetch
개발환경 (yarn dev)로 실행 X

제품환경 (yarn build,yarn start)로 실행 O

공식 문서 내용

Prefetching은 오직 제품(환경)에서만 사용가능합니다.(yarn dev=개발환경), (yarn build,yarn start= 제품환경)
Prefetching은 사용중인 <Link> component가 화면(viewport)에 보일때 실행된다. (마우스와 상관X)

### SEO

### components

- 클라이언트 컴포넌트가 뭔가요?

브라우저에서 실행되어야 할 코드(버튼 클릭하면 숫자 증가 시켜주셈)를 클라이언트로 보내지는 컴포넌트가 바로 클라이언트 컴포넌트.

- 클라이언트 컴포넌트가 왜 서버에서 실행되나요?

클라이언트 컴포넌트(숫자 0, 증가 버튼)를 포함한 HTML 정적 페이지(강의에서 localhost)가 프리렌더링 되어 브라우저에 전달되기 때문. 버튼 클릭했을 때 숫자 증가 시켜주는 건 안 되지만, 숫자와 버튼 정도는 정적 페이지에 미리 만들어 줌! 따라서, 클라이언트 컴포넌트라고 무시하고 넘기는 게 아니기 때문에 "안녕! - 클라이언트"가 실행되는 것!

- 그래서 언제 클릭하면 숫자 증가되나요?

컴포넌트 실행에 필요한 js와 react 코드를 다운받아야지 하이드레이션이 일어나고 컴포넌트가 렌더링 될 수 있기 때문에 코드를 다운 받고, 하이드레이션이 발생해야 렌더링 돼서 드디어 "버튼 클릭하면 숫자 증가 시켜주셈" 기능이 가능해짐.

### routing 폴더 app 은 서버노드환경 컴포넌트임!

### 'use Client'

클라이언트 컴포넌트!

### Loading

suspense태그를 활용함
suspense는
loading 의 한계
경로내에 페이지 컴포넌트를 크게 감싸기때문에 중첩 Suspense 구현이 안됌

-> 이를 위해서 page 컴포넌트에 내용을 작은 단위로 분리하여 직접 Suspense API 를 사용하면 됌
