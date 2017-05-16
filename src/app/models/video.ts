export class Video{
   
    constructor(
       public _id:string,
       public name:string,
       description:string,
       url:string,
       ratings:Array<any>
    ){
       
    }
}