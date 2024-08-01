//1. Person이라는 이름의 클래스를 정의해주세요. 이 클래스는 name,
//age 이라는 속성을 갖고, info라는 메서드를 갖습니다.
//info 메서드는 "저의 이름은 [name] 나이는 [age] 입니다." 를 출력해야 합니다.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  info() {
    console.log(`저의 이름은 ${this.name} 나이는 ${this.age} 입니다.`);
  }
}
const jung = new Person("yuno", 20);
jung.info();

class Student extends Person {
  constructor(name, age, study) {
    super(name, age);
    this.study = study;
  }
}
const student1 = new Student("준현", 12000);
student1.info();

class Tutee extends Person {
  info() {
    console.log(
      `저의 이름은 ${this.name} 나이는 ${this.age} 현재 ${this.study}를 학습하고 있습니다`
    );
  }
}
const tutee = new Tutee();

console.log(Student instanceof Person);
console.log(tutee instanceof Student);
// 6. Student 클래스가 Person 클래스의 하위 클래스인 확인하고,
//tutee 인스턴스가 Studnet 클래스의 인스턴스인지 확인하여 출력해보세요.
