import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Block } from '../models';

@Injectable()
export class BlockService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Block[]>(`${environment.apiUrl}/blocks`);
    }

    getById(blockId: number) {
        return this.http.get(`${environment.apiUrl}/blocks/` + blockId);
    }

    create(block: Block) {
        return this.http.post(`${environment.apiUrl}/blocks/add`, block);
    }

    update(block: Block) {
        return this.http.put(`${environment.apiUrl}/blocks/` + block.blockId, block);
    }

    delete(blockId: string) {
        return this.http.delete(`${environment.apiUrl}/blocks/` + blockId);
    }
}
