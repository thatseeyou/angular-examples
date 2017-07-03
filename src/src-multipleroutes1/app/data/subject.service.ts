import { Injectable } from '@angular/core';

export class Subject {
    constructor(
        public path: string, 
        public subject: string,
        public markdown: string
    ) {}
}

let subjects = [ 
    new Subject(
        "web-rtc",
        "WebRTC",
`## 개요
* 제목 : WebRTC
* 목표 : 브라우저에서의 API, 동작 방식 및 프로토콜을 이해한다.

----
## 상세 설명
최근에 사파리 브라우저에서도 WebRTC를 지원한다는 공식 발표가 있었습니다. 드디어 주요 브라우저는 모두 WebRTC를 지원하게 되었습니다. 때가 무르익었습니다.

WebRTC는 RTC(Real Time Communication)을 브라우저를 통해서 하자는 것이지요. 가장 큰 응용은 화상 전화입니다. 브라우저에서 화상 전화를 하기 위해서는 카메라, 마이크에 대한 접근이 가능해야 하며 빠른 통신을 위해서 P2P 통신을 지원해야 합니다. 이런 기능을 브라우저에서 할 수 있게 됩니다.

P2P 통신은 토렌트 같은 응용을 가능하게 합니다. 이미 [WebTorrent](https://webtorrent.io)같은 흥미로운 프로젝트도 있습니다. 다음 iOS 11에서는 브라우저를 통해 토렌트 파일 다운로드가 가능해지겠네요(현재 관련 앱은 등록 거부됨).

회사 제품과 관련해서는 'WebRTC를 막아주시오'와 같은 요구 사항을 처리해야 할 일도 발생하겠지요. 프로토콜에 대한 분석도 필요합니다. 

----
## 추천 교재
### [WebRTC 프로그래밍](http://book.naver.com/bookdb/book_detail.nhn?bid=9770677)
![WebRTC 프로그래밍](http://bookthumb.phinf.naver.net/cover/097/706/09770677.jpg?type=m140&udate=20161223)

* 원제 : Getting Started with WebRTC
* 저자 : 롭 맨슨 (역자 류영선)
* 출판사 : 에이콘출판 | 2015.11.19
* 페이지 : 140
* 정가 : 14,000 원
* 국내 번역서는 1권 밖에 보이지 않네요. 원서로는 더 많은 종류의 책이 있습니다.

----
## 참고 자료
`
    ),
    new Subject(
        "typescript",
        "TypeScript",
`## 개요
* 제목 : TypeScript
* 목표 : TypeScript를 이용해서 웹 프로그래밍을 할 수 있다. 웹 개발자라면 알아야 하는 필수 지식이 되었다.

----
## 상세 설명
TypeScript는 컴파일 과정을 통해서 자바스크립트 코드를 생성하지만 새로운 언어가 아니라 자바스크립트를 확장하는 방식으로 구현되어 있어서 CoffeeScript 처럼 새로운 문법을 익히지 않아도 된다.

다음의 특징을 갖고 있다.

* 정적 타입 지원 : 모든 변수에 number, string, interface와 같은 타입을 지정할 수 있다. TypeScript를 지원하는 Visual Studio Code와 같은 편집기는 컴파일 타임에 타입을 점검하여 사전에 상당한 오류를 잡아낸다. 런타임에 "이런 속성 없습니다"와 같은 대부분의 오류를 사전에 찾아낼 수 있게 한다. 

* ES6와 같은 최신 기능 : 최근의 자바스크립는 ES2015, ES2016 등과 같이 매우 빨리 발전을 하고 있다. 최신의 기능을 사용하고 싶어도 브라우저 호환성 때문에 사용을 꺼리게 된다. TypeScript는 최신의 기능을 사용하더라도 ES3, ES5와 호환되는 코드로 변환을 해 주기 때문에 걱정없이 최신 기능을 사용할 수 있다. Babel이 제공하는 기능과 유사하다.

* Visual Studio Code와 같은 최신 도구의 지원 : Visual Studio, Xcode, Eclipse 등에서 C++, Swift, Java 을 사용할 때 누렸던 코드 자동 완성, 안전한 리팩토링 등의 이점을 자바스크립트에서도 활용할 수 있게 되었다. 이제 더 이상 인자로 넘겨주어야 할 오브젝트의 형태 파악에 시간을 쓰지 않아도 된다.  

* 성숙도 : Angular, Ionic과 같은 프레임워크는 TypeScript로 작성이 되어 있으며 유명 자바스크립트 라이브러리도 TypeScript에서 사용할 수 있도록 선언(C에서 헤더파일과 유사)파일을 제공하고 있다.

TypeScript는 MS에서 개발을 했으며 이미 다양한 오픈소스에서 채택되어 활용되고 있다. 구글도 얼마전에 사내에서 사용하는 주요 언어로 TypeScript를 지정했다.

자바스크립트의 활용도는 단순 웹을 넘어서 서버, 앱의 영역까지 확장되어 가고 있으며 TypeScript는 자바스크립트 프로그래밍을 즐겁게 만들어 준다.

----
## 선수 지식
사실상 최근 자바스크립트는 모듈 구성을 이용하기 때문에 이에 대한 이해가 선행되어야 한다. 대부분의 내용을 도구나 라이브러리를 사용하는 것이기 때문에 스터디 진행 중에 함께 학습하면 충분할 것으로 본다.

* NPM : TypeScript 설치, 라이브러리 설치 등에 사용한다. Node를 설치하면 함께 설치된다.
* 모듈 로더 : 컴파일 타임에 TypeScript가 모듈을 찾더라도 런타임에는 모듈 로딩까지 자동으로 해 주는 것은 아니다. 그래서 [SystemJS](https://github.com/systemjs/systemjs)와 같은 모듈 로더를 사용해야 한다.

----
## 추천 교재
관련 책들도 출간되고 있지만 1~2년 정도 지난 내용을 다루고 있기 때문에 온라인 자료를 중심으로 학습을 하는 것이 바람직하다.

### [공식 tutorial](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
### [공식 handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)

----
## 참고 자료
### [TypeScript 주 개발자의 직접 설명](https://channel9.msdn.com/Events/Build/2017/B8088/player)
터보 파스칼, 델파이, C# 등의 언어를 개발한 유명 개발자의 직강입니다. 비디오를 한 번 보면 전체적으로 파악하는데 도움이 됩니다. 자동 번역 같지만 한글 자막도 나오네요.

### [다양한 TypeScript 예제들](https://github.com/thatseeyou/jspm-typescript-examples)
'최신 웹 개발' 교육 과정에 활용하기 위해서 직접 작성한 코드이다. 다양한 라이브러리를 TypeScript와 어떻게 함께 사용할 수 있는지를 확인할 수 있을 것이다.

`
    ),
    new Subject(
        "bash",
        "Bash",
`## 개요
* 제목 : Bash
* 목표 : Unix 계열 OS의 기본 쉘로 오랫동안 사용한 bash를 능수능란하게 다루어 업무 생산성을 극대화한다.

----
## 상세 설명
Bourne shell이 발전한 형태인 bash는 Linux, macOS 등의 기본 쉘로 오랜 세월 사용해 왔고 앞으로도 계속 사용할 것이다. 알아서 손해볼 일은 생기지 않을 것이다.

특히 빈번히 발생하는 반복적인 업무에 쉘 스크립트를 활용한 자동화를 하게 되면 지루한 업무를 신속하고 정확하게 끝낼 수 있게 된다.

최근에는 WIndows에서도 bash를 지원하기 시작해서 활용 가능성은 무한하다고 할 수 있을 것이다.

----
## 추천 교재
### [리눅스 커맨드 라인 쉘 스크립트 바이블](http://book.naver.com/bookdb/book_detail.nhn?bid=11091654)
![리눅스 커맨드 라인 쉘 스크립트 바이블](http://bookthumb.phinf.naver.net/cover/110/916/11091654.jpg?type=m140&udate=20161015)

* 원제 : Linux Command Line and Shell Scripting BIBLE (3rd Edition)
* 저자 : 리처드 블룸, 크리스틴 브레스 (역자 트랜지스터팩토리)
* 출판사 : 스포트라잇북 | 2016.09.26
* 페이지 : 824
* 정가 : 38,000 원

### [온라인 - gitbook - Bash shell script](https://www.gitbook.com/book/mug896/shell-script/details)

----
## 참고 자료

`
    ),
];

@Injectable()
export class SubjectService {
    constructor() { }

    getSubjects():Subject[] {
        return subjects;
    }

    getFirstSubject() {
        return subjects[0];
    }

    getSubject(path:string) {
        return subjects.find((subject) => subject.path == path ? true : false);
    }
}