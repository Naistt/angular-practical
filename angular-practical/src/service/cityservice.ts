import { Injectable } from '@angular/core';
    
@Injectable()
export class CityService {

    getAllCities() {
        return [
            {
                id: 0,
                name: 'Rio de Janeiro',
            },
            {
                id: 1,
                name: 'Montreal',
            },
            {
                id: 2,
                name: 'Bangkok',
            },
            {
                id: 3,
                name: 'Cape Town',
            },
            {
                id: 4,
                name: 'Paris',
            }
        ];
    }

    getCities() {
        return Promise.resolve(this.getAllCities());
    }
};