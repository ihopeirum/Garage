window.onload = function () {

  var current;
  var btn = document.querySelectorAll('.btn_tab')
  var btns = document.querySelector('.tab_Wrap')

  // 1. 기존의 btn 에서 active 를 먼저 제거해 준 후,
  // 가장 최근에 클릭 한 btn에 active 를 넣어준다.
  // for(i = 0; i < btn.length; i++) {
  //   btn[i].addEventListener('click', btnHandler);
  // }
  // function btnHandler() {
  //   for (i = 0; i < btn.length; i++) {
  //     btn[i].classList.remove('active');
  //   }
  //   this.classList.add('active');
  // }


  // 2. 익명함수를 이용하기
  // 익명함수 current 는 현재 '클릭 했던 것'
  // 을 기억해 두는 용도.
  // 기억해 뒀던 current 의 값만 active 를 빼면 된다.
  function btnHandler() {
    if (current) {
      current.classList.remove('active')
    }
    this.classList.add('active');
    current = this;
  }
  for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', btnHandler)
  }

  // 3.이벤트 위임
  // tab요소의 부모에게 이벤트 줄 요소결정권을 위임하는 것
  // "target"은 부모의 여러 자식들 중에서 실제로 클릭된 것을 가리킴
  // target 은 eventlistener 함수일 때만 사용 가능함
  // function active(elem) {
  //   elem.classList.add('active');
  //   current = elem;
  // }
  // function inactive(elem) {
  //   elem.classList.remove('active');
  // }
  // function btnHandler(e) {
  //   if (current) {
  //     inactive(current);
  //   }
  //   active(e.target);
  // };
  // btns.addEventListener('click', btnHandler);
  // >> 문제점 : 자식들 간 gap 을 클릭하면 부모영역에 active 적용됨

}