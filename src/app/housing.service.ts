import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor() {}
  housingLocationList: Housinglocation[] = [
    {
      id: 1,
      name: 'Sunshine Villa',
      city: 'Mumbai',
      state: 'MH',
      photo: 'assets/myHomes.jpg',
      availableUnits: 99,
      wifi: true,
      laundry: false,
    },
    {
      id: 2,
      name: 'FlowerPot',
      city: 'Delhi',
      state: 'Delhi',
      photo: 'assets/Homes1.jpg',
      availableUnits: 99,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'HoneyBeen',
      city: 'Badodara',
      state: 'Gujrat',
      photo: 'assets/Homes2.jpg',
      availableUnits: 99,
      wifi: true,
      laundry: true,
    },
    {
      id: 4,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: '/assets/Homes3.jpg',
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: '/assets/Homes4.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: '/assets/Homes5.jpg',
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: '/assets/Homes6.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Morning Housings',
      city: 'Sweden',
      state: 'CA',
      photo: '/assets/Homes7.jpg',
      availableUnits: 6,
      wifi: false,
      laundry: false,
    },
  ];

  getAllHousingLocations(): Housinglocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): Housinglocation | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
