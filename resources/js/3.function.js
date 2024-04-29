function test() {
    console.log("test() 함수 실행")
}

test();

const test2 = function() {
    console.log("test2 함수 실행");
    console.log(arguments);
}

test2("num1" , 20);

/**
 * 
 * Arrow Function
 * 
 * js는 함수가 생성될 때마다 this가 생성된다.
 * 함수가 생성되면 window 객체에 저장이 된다.
 */

// this가 생성되지 않는다.
// arguments도 생성되지 않는다.
// 부모의 this를 물려받는다.
const arrow1 = () => {
    console.log(this);
}

arrow1();
