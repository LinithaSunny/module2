class Employe{

    empno: number ;
    ename : string;
    sal : number;
    attendance : any;
    
   constructor(){

       this.empno = 101;
       this.ename = "abc";
       this.sal = 20000;
       this.attendance = 18;
    }
   //  constructor(empno: number, ename: string, sal : number, attendance: any){

   //     this.empno = empno;
   //     this.ename = ename;
   //     this.sal = sal;
   //     this.attendance = attendance;
   //  }


   print():void{
         
        console.log(this.empno, this.ename, this.sal, this.attendance);
        console.log(typeof this.attendance === "number" );
     }


}


// var emp = new Employe();
var emp1 = new Employe();
emp1.empno = 102;
var emp2 = new  Employe();
emp2.empno = 103;
emp.print();

var emparray1 : Employe[] = [emp,emp1, emp2];

for (let index = 0; index < emparray1.length; index++) {
   const element = emparray1[index];
     element.print();
   
}

var emparray2: Employe[]= [];

console.log(typeof(emparray2));

emparray2[0] = emp;

emparray2.push(emp);
emparray2.push(emp1);
emparray2.push(emp2);


for (let index = 0; index < emparray2.length; index++) {
   const element = emparray2[index];
     element.print();
   
}





