const option2;option3
class Cat{
constructor() {
    this.title1 = createElement('h1');
    this.question1 = createElement('h3');
    this.option1 = createElement('h4');
   this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');

    this.title2 = createElement('h1');
    this.question2 = createElement('h3');
    this.option5 = createElement('h4');
   this.option6 = createElement('h4');
    this.option7 = createElement('h4');
    this.option8 = createElement('h4');

}
display(){
    this.title1.html("Cat Quize");
    this.title1.position(350, 0);

   this.question1.html("Question:- what does a cat eat?" );
  this.question1.position(150, 80);
   this.option1.html("1: chocolates " );
   this.option1.position(150, 100);
   this.option2.html("2: cooked meat and fish " );
   this.option2.position(150, 120);
   this.option3.html("3: Citrus fruits " );
   this.option3.position(150, 140);
   this.option4.html("4: Dairy products " );
   this.option4.position(150, 160);

    this.title2.html("Cat Quize");
    this.title2.position(350, 0);

   this.question2.html("Question:- What is a group of cats called?" );
  this.question2.position(150, 80);
   this.option5.html("1:embarrassment" );
   this.option5.position(150, 100);
   this.option6.html("2:colonies" );
   this.option6.position(150, 120);
   this.option7.html("3:clowder" );
   this.option7.position(150, 140);
   this.option8.html("4: murder" );
   this.option8.position(150, 160);
}
}