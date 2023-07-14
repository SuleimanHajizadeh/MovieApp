import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies = [
      { id: 1, name: "movie 1", description: "MD Suleiman", imageUrl: "1.jpg" },
      { id: 1, name: "movie 1.1", description: "MD House", imageUrl: "1.jpg" },
      { id: 2, name: "movie 2", description: "Patch Adams", imageUrl: "2.jpg" },
      { id: 3, name: "movie 3", description: "Fury", imageUrl: "3.jpg" },
      { id: 4, name: "movie 4", description: "The Boy In The Striped Pyjamas", imageUrl: "4.jpg" },
      { id: 5, name: "movie 5", description: "Biohackers", imageUrl: "5.jpg" },
      { id: 6, name: "movie 6", description: "Extraction 2", imageUrl: "6.jpg" },
      { id: 7, name: "movie 7", description: "Avatar", imageUrl: "7.jpg" },
      { id: 8, name: "movie 8", description: "The Queen's Gambit", imageUrl: "8.jpg" },
      { id: 9, name: "movie 9", description: "Love Again", imageUrl: "9.jpg" }
  ];
  return {movies};
  }

  constructor() { }
}
