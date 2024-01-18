import React from 'react';

function ReactLayer() {
  return (
    <div className="layer layer3 react none">
      <div className="layer__contents">
        <h3>리액트 블로그</h3>
        <span className="small">최신 코딩 관련 영상을 볼 수 있습니다.</span>
        <span className="mail"></span>
        <div className="img">
          <img src="img/bg01.png" alt="bg" />
        </div>
        <p>
          프로토타입을 작성해본 적이 없었던 와중에 Figma라는 툴이 새롭게 나오게 되었고 이걸 프로젝트에 적용하여 프로토타입을 작성해보면 좋을 것 같다고 말씀하셔서 적용하게 되었습니다.
          사실상 기술적인 면과 크게 관련되어 있진 않지만 프로토타입을 작성하면서 배웠던 점은 개발을 하기전에 뭘 개발해야 할지 명확하게 파악할 수 있었다는 점 입니다. 본래, 개발을 할
          때는 의식의 흐름으로 개발을 하고는 했는데 프로토타입을 통해서 체계적인 구조를 세우는 방법과 실제로 시연해봄으로써 발생할 수 있는 버그/예외 케이스 등에 대해 예측 할 수
          있었습니다.
        </p>
        <h4>Figma</h4>
        <div className="img">
          <img src="https://github.com/baeharam/Privacy-of-Animal/raw/master/portfolio/prototype.png" alt="prototype" />
        </div>
        <p>
          프로토타입을 작성해본 적이 없었던 와중에 Figma라는 툴이 새롭게 나오게 되었고 이걸 프로젝트에 적용하여 프로토타입을 작성해보면 좋을 것 같다고 말씀하셔서 적용하게 되었습니다.
          사실상 기술적인 면과 크게 관련되어 있진 않지만 프로토타입을 작성하면서 배웠던 점은 개발을 하기전에 뭘 개발해야 할지 명확하게 파악할 수 있었다는 점 입니다. 본래, 개발을 할
          때는 의식의 흐름으로 개발을 하고는 했는데 프로토타입을 통해서 체계적인 구조를 세우는 방법과 실제로 시연해봄으로써 발생할 수 있는 버그/예외 케이스 등에 대해 예측 할 수
          있었습니다.
        </p>
        <p>
          어플을 만들 때 기존 방식을 사용하면 Java/Swift를 사용해서 안드로이드/iOS를 각각 개발하는 것이 일반적인데, 프로젝트를 진행하던 시기에 마침 크로스 플랫폼 프레임워크인
          Flutter가 베타버전으로 나왔습니다. 바로 적용해보고자 했지만 프레임워크가 Dart라는 언어를 사용했기 때문에 해당 언어도 배우게 되었습니다. 결국, 새로운 언어와 새로운
          프레임워크를 배워야했고 정말 낯설었지만 이런 환경을 통해 공식문서로 학습하는 방법과 깃헙 이슈를 이용해 커뮤니케이션 하는 방법 을 배울 수 있었습니다. 아래 사진은 제가
          Flutter 저장소에 문의했던 이슈들입니다.
        </p>
      </div>
      <div className="layer__footer">
        <div>😏 리액트를 이용하여 블로그를 작업하였습니다.</div>
        <div>
          <span>view</span>
          <span>code</span>
        </div>
      </div>
    </div>
  );
}

export default ReactLayer;
