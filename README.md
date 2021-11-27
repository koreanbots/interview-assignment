# 웹 개발자 과제

해당 브랜치는 `웹 개발자` 직군의 사전 과제를 위한 브랜치입니다.

아래에 적혀있는 기능을 구현하시고 지원해주시면 됩니다.

## 참고 사항 

* ``example`` 폴더 내에 있는 예제 코드를 참고하여 제작해주시면 됩니다!
* 사이트의 디자인은 평가 기준에 포함되지 않습니다. Pure HTML만 하셔도 좋으며, Bootstrap, Bulma, Materialize, Ant Design 등을 사용하셔도 좋습니다.
* 각 기능 구현 설명마다 ``페이지:``라고 미리 엔드포인트 페이지를 안내해드리고 있으며, 이를 따라 구현해주세요.
  - 참고: 이를 위해서 Create React App를 사용했을 경우 라우터 라이브러리를 본인이 원하는 바에 따라 선택 해주세요. react-router, wouter 등을 사용하셔도 좋습니다.
  - 예시: Next.js일 경우 ``페이지: /terms``라면 ``/pages/terms.tsx`` 파일에 기능 구현.

# 프로젝트 셋업

Create Next App 또는 Create React App 둘 중 하나를 선택해 **아래 설치 스크립트**만 실행하여 셋업 해주시길 바랍니다.
[example 폴더](https://github.com/koreanbots/interview-assignment/tree/web-developer/example)를 다운로드 받아 사용하셔도 좋습니다.

* **주의사항:** 제공된 설치 스크립트에 다른 옵션을 붙여 사용한게 적발될 경우 즉시 탈락 처리입니다.
  - 예외 사항1: ``npx`` 명령어를 부득이하게 사용하기 어려운 경우 ``yarn create`` 명령어를 사용하여 셋업하시길 바랍니다.
  - 예외 사항2: 지원자 본인의 문제로 정상적인 사전 과제 수행이 어려운 경우, 면접관에게 사전 통보 후 정상적인 사전 과제 수행을 위한 새로운 설치 스크립트를 제공 요청하여 주시길 바랍니다.

## Create Next App

```sh
$ npx create-next-app koreanbots-interview
```

## Create React App

```sh
$ npx create-react-app koreanbots-interview
```

## 기능

아래 기능들을 구현해주세요!

### 기본적인 API 요청

* **페이지:** /basic

한국 디스코드 리스트의 웹사이트는 여러 API 엔드포인트에 대한 요청이 이루어지고 있습니다.

[https://koreanbots.dev/api](https://koreanbots.dev/api)를 향한 기본적인 요청을 해보세요.

브라우저에서 제공하는 HTTP API를 사용하시거나 라이브러리를 사용하여 요청 해보시면 됩니다.

봇 API든, 서버 API든, 한국 디스코드 리스트 API의 엔드포인트를 아무거나 선택하여 요청해보세요.
  - 로그인이 필요한 API에 요청할 경우, 유저의 access token을 브라우저 스토리지에서 불러오는 등 프로덕션 환경이라고 가정하여 코드를 작성 해주세요.

#### Next.js 환경일 경우

[Next.js 문서](https://nextjs.org/docs/basic-features/data-fetching)를 확인한 후 선택한 API 엔드포인트에 따른 올바른 데이터 프로세싱 기법을 사용 해주세요.

## 데이터 프로세싱

#### 느린 응답 API 핸들링

* **페이지:** /lazyapi
* 엔드포인트 스펙 [https://koreanbots.dev/api/data/lazy]:
  - POST 요청만 받습니다.
  - ``Content-Type: application/json`` 헤더가 있어야 합니다.
  - ``Authorization: (...)`` 헤더가 있어야 합니다. (유저의 access token을 브라우저 스토리지에서 불러오는 등 프로덕션 환경이라고 가정합니다.)
  - Body 내용에 아래 내용을 넣어주세요.
    ```json
    {
      "url": "https://koreanbots.dev/api/data/lazy"
    }
    ```
  - 응답:
    ```json
    { 
      "code": 200,
      "message": "Ok"
    }
    ```

한국 디스코드 리스트 API에서 서버가 요청에 응답할때까지 과도하게 오래 걸리는 [https://koreanbots.dev/api/data/lazy](https://koreanbots.dev/api/data/lazy) 엔드포인트가 있다고 가정하고, 아래 본인의 환경에 따라 처리해주세요.

##### React 환경일 경우

요청이 15초 이상 걸릴 경우 이를 취소하고 사용자에게 오류를 통보 해주세요.

##### Next.js 환경일 경우

본인이 원하는 캐싱 방식으로 처리 해주세요. Next.js 스펙에 포함된 기능이든 외부 라이브러리든 상관 없습니다.

#### 드물게 변경이 일어나는 데이터 프로세싱

* **페이지:** /terms
* 엔드포인트 스펙 [https://koreanbots.dev/api/data/terms]:
  - GET, PUT 요청을 받으나, 이 기능 구현에서는 GET만 사용합니다.
  - 응답:
  ```json
  {
    "content": "..."
  }
  ```

한국 디스코드 리스트 API에서 이용 약관 같이 드물게 데이터가 변경되지만 응답 시간이 늘어지는 가상의 [https://koreanbots.dev/api/data/terms](https://koreanbots.dev/api/data/terms) 엔드포인트가 있다고 가정하고, 아래 본인의 환경에 따라 처리해주세요.

##### React 환경일 경우

사용자가 해당 페이지에 접속할 경우, API에서 데이터를 불러오고 이를 사용자에게 보여준 후, __캐싱 날짜와 함께__ 로컬 스토리지에 저장해주세요. 
또한, 추후 사용자가 재접속했을 경우, 캐시가 존재하는지 확인하고 캐시가 존재한다면 먼저 해당 캐시를 렌더링 후 캐싱 날짜를 확인 해주세요. 
캐싱 날짜로부터 6시간이 지났다면 캐시를 삭제하고 다시 API에서 데이터 불러오고 캐시에 저장하는 절차를 진행 해주시고 
만약 6시간이 지나지 않았다면 그대로 두세요.

##### Next.js 환경일 경우

Next.js 스펙에 포함된 기능을 사용해 빌드 타임에 해당 이용 약관을 미리 캐시해두고, 이를 사용자에게 보여주는 등의 처리를 해주세요.
해당 캐시는 6시간마다 업데이트 되어야 합니다.


#### 렌더링되는 내용이 긴 데이터

* **페이지:** /license
* 엔드포인트 스펙 [https://koreanbots.dev/api/data/license]:
  - GET 요청만 받습니다.
  - 응답:
  ```json
  {
    "content": "..."
  }
  ```

한국 디스코드 리스트 API에서 라이선스 같이 엄청나게 긴 내용이 응답되는 [https://koreanbots.dev/api/data/license](https://koreanbots.dev/api/data/license) 엔드포인트가 있다고 가정하고,
타 외부 라이브러리를 사용해 사용자가 내용이 한꺼번에 렌더링되는 것이 아닌 스크롤할때마다 동적으로 내용을 렌더링하는 페이지를 구현 해주세요.

* 힌트: React Native의 FlatList

##### Next.js 환경일 경우

기본적으로 SSR인 Next.js 환경에서 이 기능을 CSR로 구현 해주세요. 스크롤할때마다 동적으로 렌더링하는 것도 포함되어야 합니다.

### 봇 리스트 페이지 구현

* **페이지:** /bots
* 엔드포인트 스펙 [https://koreanbots.dev/api/data/bots]:
  - GET, POST, PUT, DELETE 요청을 받으나, 이 기능 구현에서는 GET만 사용합니다.
  - 응답: [공식 문서 내용과 동일합니다](https://koreanbots.dev/developers/docs/%EC%97%94%EB%93%9C%ED%8F%AC%EC%9D%B8%ED%8A%B8/%EB%B4%87)

한국 디스코드 리스트 API에서 봇 리스트를 제공하는 [https://koreanbots.dev/api/data/bots](https://koreanbots.dev/api/data/bots) 엔드포인트가 있다고 가정하고,
본인의 스타일대로 봇 리스트를 구현 해주세요.

##### Next.js 환경일 경우

무조건 SSR로 구현 해주세요.

## 평가 기준

* (Create Next App 선택 시) 데이터 프로세싱 (SSR, SSG, ISR) 기능들의 대해서 필요한 렌더링 기술에 따라 능동적이고 알맞은 선택.
  - 용어 정리:
    - CSR: Client Side Rendering. 서버에서 처리하기 너무 무겁다고 판단해 일반적인 Create React App처럼 useEffect를 통한 데이터 프로세싱을 사용할 경우 CSR 데이터 프로세싱을 사용했다고 판단합니다.
    - SSR: Server Side Rendering. getServerSideProps를 올바르게 사용한 경우 SSR 데이터 프로세싱을 사용했다고 판단합니다. Next.js v12에 도입된 React Server Components 사용은 권장하지 않으며, 면접관의 의도를 벗어난 답변입니다.
    - SSG: Static Site Generation. getStaticProps를 올바르게 사용한 경우 SSG 데이터 프로세싱을 사용했다고 판단합니다.
    - ISR: Incremental Static Regeneration. getStaticProps에 ISR를 위한 올바른 옵션을 붙여 사용한 경우 ISR 데이터 프로세싱을 사용했다고 판단합니다.

* 독창성

* (가산점) 타 라이브러리를 사용하여 캐싱 프로세스 최적화 및 성능 개선.
  - 힌트: [Vercel GitHub](https://github.com/vercel) 내에 이미 관련 프로젝트가 존재함.
  - 참고: 면접관이 생각하지도 못한 본인만의 캐싱 프로세스 최적화 방법을 사용해 면접관이 생각한 올바른 답변과 비교해 더 효율적이거나 동등할 경우 더 높은 가산점 부여.
  
* (가산점) 도커 파일 구성

## 유의사항

- 엣지케이스 등 기타 발생할 수 있는 버그도 고려해주세요.
- 질문이 있으시다면 한국 디스코드 리스트 채용 디스코드로 문의 부탁드립니다.
