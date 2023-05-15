import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  info1: string[]=["X",'1','x@gmail.com']

  info2: string[]=["Y",'2','Y@gmail.com']
  
  info3: string[]=["Z",'3','C@gmail.com']
  
  getInfo1():string[]{
  
    return this.info1
  
  }
  
  getInfo2():string[]{
  
    return this.info2
  
  }
  
  getInfo3():string[]{
  
    return this.info3
  
  }
  addInfo(info: string){

    this.info1.push(info)

    this.info2.push(info)

    this.info3.push(info)

    return this.info1

  }
  constructor() { }
}
