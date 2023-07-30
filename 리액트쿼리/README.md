- [리액트 쿼리](#리액트-쿼리)
  - [개요](#개요)
  - [스터디원🤔](#스터디원)
  - [택 3](#택-3)
    - [1. 기본 설정, Devtools, Options](#1-기본-설정-devtools-options)
    - [2. useQuery와 관련된 주요 리턴 데이터, 주요 옵션](#2-usequery와-관련된-주요-리턴-데이터-주요-옵션)
    - [3. useQuery 고급 기능 및 useQueryClient](#3-usequery-고급-기능-및-usequeryclient)
    - [4. Infinite Queries 및 초기 쿼리 데이터, Prefetching](#4-infinite-queries-및-초기-쿼리-데이터-prefetching)
    - [5. useMutation과 관련된 주요 기능 및 v5변경점](#5-usemutation과-관련된-주요-기능-및-v5변경점)
    - [6. 쿼리 무효화 및 캐시 데이터 업데이트, Optimistic Update](#6-쿼리-무효화-및-캐시-데이터-업데이트-optimistic-update)
    - [7. 기타 특징 및 고급 기능 -](#7-기타-특징-및-고급-기능--)
  - [시간](#시간)
  - [발표내용](#발표내용)

# 리액트 쿼리

![리액트쿼리](./img/reactquery.png)

## 개요

그동안 래퍼런스를 보고 기능구현이나 맞춰진형식에 코드를 짯다면 각종 디자인패턴을 익혀 상황에 맞는 서비스에맞는 코드구현이나 유연성있는 코드작성을 하기위해 시작

> 리액트는 함수형 프로그래밍 패러다임과 선언형 프로그래밍 스타일을 사용함.
> 컴포넌트 기반 아키텍처를 사용하여 개발자가 사용자 인터페이스를 구축할 수 있다. 이렇게 > 컴포넌트를 중심으로 구축하는 방식 때문에 리액트는 다양한 디자인 패턴을 가질 수 있다.

## 스터디원🤔

---

  <a href="https://github.com/nonjk2">
      <img src="https://github.com/nonjk2.png" width="100" height="100" />
  </a>
  <a href="https://github.com/helloworld442">
      <img src="https://github.com/helloworld442.png" width="100" height="100"/>
  </a>

  <a href="https://github.com/junho01052">
      <img src="https://github.com/junho01052.png" width="100" height="100"/>
  </a>

  <a href="https://github.com/Hyeon12">
      <img src="https://github.com/Hyeon12.png" width="100" height="100"/>
  </a>

   <a href="https://github.com/makepin2r">
      <img src="https://github.com/makepin2r.png" width="100" height="100"/>
  </a>

  <a href="https://github.com/kangsinbeom">
      <img src="https://github.com/kangsinbeom.png" width="100" height="100" style="border-radius : 999px"/>
  </a>
  <a href="https://github.com/taehyunkim3">
      <img src="https://github.com/taehyunkim3.png" width="100" height="100" style="border-radius : 999px"/>
  </a>
  <a href="https://github.com/TheON2">
      <img src="https://github.com/TheON2.png" width="100" height="100"/>
  </a>
  <a href="https://github.com/Kang-Gyeongwon">
      <img src="https://github.com/Kang-Gyeongwon.png" width="100" height="100"/>
  </a>
## 택 3

리액트쿼리 사용법과 옵션들에 대해 알아보자

### 1. 기본 설정, Devtools, Options

- React Query의 설치 및 초기 설정
- React Query Devtools의 설치 및 활용 방법
- React Query의 주요 옵션들에 대한 이해
- React Query의 전반적인 아키텍처와 데이터 흐름에 대한 이해

### 2. useQuery와 관련된 주요 리턴 데이터, 주요 옵션

민승 , 신범

- **useQuery 기본 문법**
- useQuery 주요 리턴 데이터, v4부터의 변화
- staleTime과 cacheTime, refetchOnMount, refetchOnWindowFocus, Polling, enabled refetch

### 3. useQuery 고급 기능 및 useQueryClient

도원 , 승현

- onSuccess, onError, onSettled
- select, keepPreviousData, placeholderData
- Parallel, Dependent Queries, useQueryClient
- useQuery의 delayQuery 이해 및 활용

### 4. Infinite Queries 및 초기 쿼리 데이터, Prefetching

태현 , 소현

- useQuery로 infinitequery를 비슷하게 사용법
- Infinite Queries 사용 방법
- Initial Query Data 설정 방법
- Prefetching의 이해 및 활용

### 5. useMutation과 관련된 주요 기능 및 v5변경점

준호 , 경원

- useMutation 기본 사용법
- mutate와 mutateAsync 비교
- cancelQueries 이해 및 활용
- invalidateQueries 이해 및 활용

### 6. 쿼리 무효화 및 캐시 데이터 업데이트, Optimistic Update

은석 ,

- Lazy Queries
- 쿼리 무효화 방법 및 활용
- 캐시 데이터 즉시 업데이트 방법
- Optimistic Update 이해 및 활용

### 7. 기타 특징 및 고급 기능 -

시간남는분만 하시길 권장

- useQueryErrorResetBoundary 이해 및 활용
- React Query와 Suspense의 통합 이해 및 활용
- Default Query Function 이해 및 활용
- React Query와 TypeScript의 통합 이해 및 활용

이렇게 각 주제를 세분화하면 주제별로 배울 내용이 균등하게 분배되고, 모든 중요한 옵션들에 대해 다룰 수 있을 것입니다.

[리액트 쿼리 Docs](https://tanstack.com/query/v5/docs/react/overview)

## 시간

## 발표내용

- 언제 이용하는지 사용하므로서 일어나는 일 정리
- 간단히 적용한 코드 예시 코드
- 약 1~5분 발표
