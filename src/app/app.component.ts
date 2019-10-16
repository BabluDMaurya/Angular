import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AG8';
  // cond = 1 > 0;
  // public choose = '';
  // setvalue(drp:any){
  //   this.choose = drp.target.value;
  // }
  // Students:any[] = [{'name':'Bablu'},{'name':'rohit'},{'name':'Rajiv'},{'name':'Rahul'},{'name':'Ravi'}];
  // students:any[];
  // constructor(){
  //   this.students = [
  //     {
  //       'id':'0',
  //       'name':'Bablu',
  //       'gender':'Mail',
  //       'age':'27',
  //       'course':'MCA'
  //     },
  //     {
  //       'id':'1',
  //       'name':'Rohan',
  //       'gender':'Mail',
  //       'age':'27',
  //       'course':'MCA'
  //     },
  //     {
  //       'id':'2',
  //       'name':'Rahul',
  //       'gender':'Mail',
  //       'age':'27',
  //       'course':'BCA'
  //     },
  //     {
  //       'id':'3',
  //       'name':'Ravi',
  //       'gender':'Mail',
  //       'age':'27',
  //       'course':'MCA'
  //     },
  //     {
  //       'id':'4',
  //       'name':'Rajiv',
  //       'gender':'Mail',
  //       'age':'27',
  //       'course':'MCA'
  //     }
  //   ];
  // }
  // getMoreStudents():void{
  //   this.students = [
  //     {
  //       'id':'0',
  //       'name':'Bablu',
  //       'gender':'Mail',
  //       'age':'27',
  //       'course':'MCA'
  //     },
  //     {
  //       'id':'1',
  //       'name':'Rohan',
  //       'gender':'Mail',
  //       'age':'27',
  //       'course':'MCA'
  //     },
  //     {
  //       'id':'2',
  //       'name':'Rahul',
  //       'gender':'Mail',
  //       'age':'27',
  //       'course':'BCA'
  //     },
  //     {
  //       'id':'3',
  //       'name':'Ravi',
  //       'gender':'Mail',
  //       'age':'27',
  //       'course':'MCA'
  //     },
  //     {
  //       'id':'4',
  //       'name':'Rajiv',
  //       'gender':'Mail',
  //       'age':'27',
  //       'course':'MCA'
  //     },
  //     {
  //       'id':'5',
  //       'name':'Ram',
  //       'gender':'Mail',
  //       'age':'27',
  //       'course':'CA'
  //     }
  //   ];
  // }
  // trackByStudents(index:number,students:any):string{
  //   return students.studentid;
  // }
    // countryDetails:any[] =[
    //   {
    //     'country':'India',
    //     'people':[
    //       {
    //         'name':'Bablu'
    //       },
    //       {
    //         'name':'Rohan'
    //       }
    //     ]
    // },{
    //   'country':'UK',
    //   'people':[
    //     {
    //       'name':'Bob'
    //     },
    //     {
    //       'name':'Ran'
    //     }
    //   ]
    // }
    // ];
    // getcolor(country){
    //   switch(country){
    //     case 'India':
    //     return 'red';
    //     case 'UK':
    //     return 'green';
    //   }
    // }
    // users=[
    //   'ram',
    //   'shyam',
    //   'bhola',
    //   'shohan'
    // ];
    // getcssclass(flag:string){
    //   let cssclass;
    //   if(flag=="mode"){
    //     cssclass ={
    //       'one':true,
    //       'two':true,
    //     }
    //   }else{
    //     cssclass ={
    //       'one':false,
    //       'two':true,
    //     }
    //   }
    //   return cssclass;
    // }

    ////////////////-----Interpolation Binding----------//////////
    // firstName:string = 'Bablu';
    // lastName:string = 'Maurya';
    // pxsolid:string = '1';
    // cols:number = '3';
    // OnClick(){
    //   console.log('Hello World!');
    // }
    // show(){
    //   alert("Hello");
    // }
    data:string = 'WDIPL';
    data1:string = 'Rahul One sdfhskdfh';
}
