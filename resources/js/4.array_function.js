let members = [
    'odg',
    '김지원',
    '김수현',
    '이주빈'
];
// push
// console.log(members.push('눈여'));
// console.log(members);

// //splice()
// console.log(members.splice(0,2));

//concat()
console.log(members.concat('이주빈'));
console.log(members);

members = [
    'odg',
    '김지원',
    '김수현',
    '이주빈',
    'ydg'
];

let members2 = [
    ...members
    // ...는 members에 있는 모든 요소 복사
]
// console.log(members2);
// console.log('----------------------------------');
let memberInfo = {
    name: 'odg',
    age: 20,
    gender: 'M'
}

let memberInfo2 = {
    ...memberInfo,
    age : 12
}
console.log(memberInfo);
console.log(memberInfo2);

// console.log('----------------------------------');

// //join()

console.log(members2.join()); // 배열을 string으로 변경해서 출력
console.log(members2.join('/')); // 기본 구분자는 ',' , 원하는걸로 구분자 변경 가능
console.log(members2.join(' '));

//sort()
members2.sort();
console.log(members2);
console.log(members2.reverse()); // 역순 정렬

let numbers = [1,9,7,5,3]

console.log(numbers);

// a,b를 비교, 버블정렬
// 1) a를 b보다 나중에 정렬하고자 한다면 0보다 큰 수를 반환
// 2) a를 b보다 먼저 정렬하려한다면 0보다 작은 수 반환
// 3) 원래 순서를 유지하고 싶다면 0을 반환
numbers.sort((a,b) => {
    console.log(a + " : " +b);
    // return a > b ? 1 : -1; // 오름차순 정렬
    return a > b ? 1 : -1; // 내림차순 정렬
});

// (a, b) => return a < b ? 1 : -1; 한 줄로 리턴 시 중괄호 생략 가능

numbers.sort((a,b) => a > b ? 1 : -1);
console.log(numbers);

console.log("-------------------------------------");

// map: 기존 배열의 요소를 전부 반복하면서 
// return된 값으로 새로운 배열을 만들어주는 함수
console.log(members2.map((m) => m));
console.log(members2.map((m) => {
    if(m.length > 3) {
        return '[vip]' + m;
    } else {
        return '[normal]' + m;
    }
}));

let tmpMembers = [];
for(let m of members2) {
    tmpMembers.push(m+1);
}
console.log(tmpMembers);

let classList = [{
    className : "자바 1장",
    time : "12:00",
    classNo: 1
}, {
    className : "자바 2장",
    time : "13:00",
    classNo: 2
},{
    className : "자바 3장",
    time : "14:00",
    classNo: 3
},{
    className : "자바 4장",
    time : "15:00",
    classNo: 4
}];

let studentList = [{
    name:"odg1",
    classNo : 1
}, {
    name:"odg2",
    classNo : 2
}, {
    name:"odg3",
    classNo : 3
},{
    name:"odg4",
    classNo : 4
},{
    name:"odg5",
    classNo : 4
}];

console.log(studentList.map((s) => {
    for(let c of classList) {
        if(s.classNo === c.classNo) {
            return {
                ...c,
                ...s
            }
        }
    }
    // filter로 변경해보기

    return s;
}));

// filter()
let numbers2 = [1,7,6,3,8];
// tmp2 = numbers2.filter(x => x % 2 === 0);
// console.log(tmp2);

// // find()
console.log(numbers2.find(n => n % 2 ===0));

// findIndex()
console.log(numbers2);
console.log(numbers2.findIndex(n => n % 2 ===0));

// reduce
console.log(numbers2.reduce((p,n) => p+n, 0));

// 분석해보자
// reduce((,배열의 요소) => {}, 초기값)
// 배열을 통해 특정 변수 하나를 만들 때
console.log(numbers2.reduce((sum,n) => {
    if(n%2 === 1) {
        sum.push(n);
    }
    return sum;
}, [])); // 두번째 파라미터는 p의 초기값


