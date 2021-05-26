import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  getFriends() {
    let friends = [
      {
        id: 1,
        name: "Rachel Green",
        age: 22,
        friendshipLevel: 5
      },
      {
        id: 2,
        name: "Monica Geller",
        age: 26,
        friendshipLevel: 4
      },
      {
        id: 3,
        name: "Phoebe Buffay",
        age: 19,
        friendshipLevel: 5
      },
      {
        id: 4,
        name: "Joey Tribbiani",
        age: 27,
        friendshipLevel: 4
      },
      {
        id: 5,
        name: "Ross Geller",
        age: 24,
        friendshipLevel: 3
      }
    ];
    return friends;
  }

  constructor() { }

}
