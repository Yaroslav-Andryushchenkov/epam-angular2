import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  public currentUserToken: string;
  private readonly STORAGE_NAME: string = 'login_storage';
  constructor() {
    this.currentUserToken = null;
    let storageString = localStorage.getItem(this.STORAGE_NAME
    if (storageString) {
      let tokens = Object.keys(JSON.parse(storageString));
      if (tokens.length > 0) {
        this.currentUserToken = tokens[0];
      }
    } else {
      localStorage.setItem(this.STORAGE_NAME, JSON.stringify({}));
    }
  }
  public login(username: string): string {
    let storage = this.getStorage();
    let token: string;
    token = username + Date.now();
    storage[token] = username;
    localStorage.setItem(this.STORAGE_NAME, JSON.stringify(storage));
    return token;
  }
  public logout() {
    localStorage.removeItem(this.STORAGE_NAME);
  }
  public isAuthecated(token): boolean {
    let storage = this.getStorage();
    return storage.hasOwnProperty(token);
  }
  public getUserInfo(token): string {
    let storage = this.getStorage();
    return storage[token];
  }
  private getStorage() {
    return JSON.parse(localStorage.getItem(this.STORAGE_NAME));
  }

}
