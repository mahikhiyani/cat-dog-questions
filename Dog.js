class Dog{
constructor(){
 this.title1 = createElement('h1');
    this.question1 = createElement('h3');
    this.option1= createElement('h4');
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
    this.title1.html("dog Quize");
    this.title1.position(350, 0);

   this.question1.html("Question:- what does a dog eat?" );
  this.question1.position(150, 80);
   this.option1.html("1:Macadamia nuts  " );
   this.option1.position(150, 100);
   this.option2.html("2: chocolates, icecream " );
   this.option2.position(150, 120);
   this.option3.html("3:  Almond" );
   this.option3.position(150, 140);
   this.option4.html("4: Dairy products,Chicken " );
   this.option4.position(150, 160);


    this.title2.html("Cat Quize");
    this.title2.position(350, 0);

   this.question2.html("Question:- What is a group of pet dogs called?" );
  this.question2.position(150, 80);
   this.option5.html("1:pack" );
   this.option5.position(150, 100);
   this.option6.html("2:troop" );
   this.option6.position(150, 120);
   this.option7.html("3: loveliness" );
   this.option7.position(150, 140);
   this.option8.html("4: PLAGUE " );
   this.option8.position(150, 160);
}
}