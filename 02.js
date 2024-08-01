//1. 출력값과 출력되는 값의 이유를 설명해주세요

var name = "yuno";

function myName() {
  var name = "yuno2";
  function a() {
    console.log(name);
  }
  return a();
}

myName(); //yuno2 , a함수를 실행 -> 상위스코프 name="yono2"

//2. 출력값과 출력되는 값의 이유를 설명해주세요

function test() {
  var x = 1;

  if (true) {
    var x = 2;
  }

  console.log(x);
}

test(); // 1 , 현재스코프 내에 x= 1

//3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.

const nameObj = {
  name: "yuno",
  method: function () {
    const arrow = () => {
      console.log(`화살표 함수 : ${this.name}`);
    };
    function normal() {
      console.log(`일반 함수 : ${this.name}`);
    }
    arrow();
    normal();
  },
};

nameObj.method(); //화살표함수는 return해주지만 일반함수는 return해주지 않는다
