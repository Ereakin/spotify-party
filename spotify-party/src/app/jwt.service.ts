import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root',
})
export class JwtService {
    constructor() {}

    DecodeToken(token): { sub: string; iat: number; exp: number } {
        return jwt_decode(token);
    }
}
