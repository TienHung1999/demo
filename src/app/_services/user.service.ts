import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    api ="http://localhost:3000/posts";
    comment="http://localhost:3000/comments";
    constructor(private http: HttpClient) { }

    getProduct() {
        return this.http.get<any>(this.api)
    }

    getAll() {
        return this.http.get<User[]>(`/users`);
    }

    register(user: User) {
        return this.http.post(`/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`/users/${id}`);
    }
    getPro(){
        return this.http.get<any>(this.comment)
    }

    getId(id: number){
        return this.http.get<any>(this.comment +'/'+id)
    }
}