import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {
    
    rangeRandom(min: number, max: number) : number{
       return Math.floor(
            Math.random() * (max - min) + min
        )
    }
}
