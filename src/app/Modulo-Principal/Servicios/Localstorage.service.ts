import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  SetStorage(key: string,data: any){
     localStorage.setItem(key,JSON.stringify(data));
  }

  GetStorage(key: string):any
  {
      return JSON.parse(localStorage.getItem(key))
  }

  RemoveStorage(key: string){
     localStorage.removeItem(key);
  }

  RemoveAll(){
     localStorage.clear();
  }
}
