import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  products: any[] = [
    {
        id: 1,
        title: 'Ludo',
        poster: '../../../assets/lenovo.webp',
        synopsis: 'From a resurfaced sex tape to a rogue suitcase of money, four wildly different stories overlap at the whims of fate, chance and one eccentric criminal.',
        genres: ['Dramas', 'Chrime', 'Romance', 'Comedy', 'Thriller'],
        year: 2020,
        director: 'Anurag Basu',
        actors: ['Abhishek Bachchan', 'Aditya Roy Kapur', 'Rajkummar Rao', 'Sanya Malhotra', 'Fatima Sana Shaikh', 'Pankaj Tripathi', 'Rohit Saraf', 'Shalini Vatsa', 'Pearle Maaney'],
        hours: ['Wednesday', '19:30', '22:30'],
        room:1
    },
    {
        id: 2,
        title: 'Chhalaang',
        poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSecsneE9-lkQ-IgrYmXVWmeytZaONkwzkUhQFtKd5S8HNDHUlg',
        synopsis: 'Chhalaang is a hilarious, yet inspirational journey of Montu, a PT Master from a semi govt. funded school for whom teaching PT is just a job. When circumstances put everything he cares for at stake, including Neelu who he loves, Montu is forced to do what he\'s never done- TEACH. Through his journey, the film humorously addresses the value of Sports Education in school curriculum.',
        genres: ['Dramas', 'Comedy'],
        year: 2020,
        director: 'Hansal Mehta',
        actors: ['Rajkummar Rao', 'Nushrat Bharucha', 'Mohammed Zeeshan Ayyub'],
        hours: ['Monday', '19:30', '22:30'],
        room:2
    },
    {
        id: 12,
        title: 'Ludo',
        poster: 'https://miro.medium.com/max/576/1*GcpSMnMkAb26_2KEvTuVPA.jpeg',
        synopsis: 'From a resurfaced sex tape to a rogue suitcase of money, four wildly different stories overlap at the whims of fate, chance and one eccentric criminal.',
        genres: ['Dramas', 'Chrime', 'Romance', 'Comedy', 'Thriller'],
        year: 2020,
        director: 'Anurag Basu',
        actors: ['Abhishek Bachchan', 'Aditya Roy Kapur', 'Rajkummar Rao', 'Sanya Malhotra', 'Fatima Sana Shaikh', 'Pankaj Tripathi', 'Rohit Saraf', 'Shalini Vatsa', 'Pearle Maaney'],
        hours: ['Friday', '19:30', '22:30'],
        room:3
    },
    {
        id: 11,
        title: 'Chhalaang',
        poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSecsneE9-lkQ-IgrYmXVWmeytZaONkwzkUhQFtKd5S8HNDHUlg',
        synopsis: 'Chhalaang is a hilarious, yet inspirational journey of Montu, a PT Master from a semi govt. funded school for whom teaching PT is just a job. When circumstances put everything he cares for at stake, including Neelu who he loves, Montu is forced to do what he\'s never done- TEACH. Through his journey, the film humorously addresses the value of Sports Education in school curriculum.',
        genres: ['Dramas', 'Comedy'],
        year: 2020,
        director: 'Hansal Mehta',
        actors: ['Rajkummar Rao', 'Nushrat Bharucha', 'Mohammed Zeeshan Ayyub'],
        hours: ['Monday', '15:30', '18:30'],
        room:4
    },
    {
        id: 10,
        title: 'Ludo',
        poster: 'https://miro.medium.com/max/576/1*GcpSMnMkAb26_2KEvTuVPA.jpeg',
        synopsis: 'From a resurfaced sex tape to a rogue suitcase of money, four wildly different stories overlap at the whims of fate, chance and one eccentric criminal.',
        genres: ['Dramas', 'Chrime', 'Romance', 'Comedy', 'Thriller'],
        year: 2020,
        director: 'Anurag Basu',
        actors: ['Abhishek Bachchan', 'Aditya Roy Kapur', 'Rajkummar Rao', 'Sanya Malhotra', 'Fatima Sana Shaikh', 'Pankaj Tripathi', 'Rohit Saraf', 'Shalini Vatsa', 'Pearle Maaney'],
        hours: ['Wednesday', '10:30', '13:30'],
        room:5
    },
    {
        id: 9,
        title: 'Chhalaang',
        poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSecsneE9-lkQ-IgrYmXVWmeytZaONkwzkUhQFtKd5S8HNDHUlg',
        synopsis: 'Chhalaang is a hilarious, yet inspirational journey of Montu, a PT Master from a semi govt. funded school for whom teaching PT is just a job. When circumstances put everything he cares for at stake, including Neelu who he loves, Montu is forced to do what he\'s never done- TEACH. Through his journey, the film humorously addresses the value of Sports Education in school curriculum.',
        genres: ['Dramas', 'Comedy'],
        year: 2020,
        director: 'Hansal Mehta',
        actors: ['Rajkummar Rao', 'Nushrat Bharucha', 'Mohammed Zeeshan Ayyub'],
        hours: ['Tuesday', '13:30', '16:30'],
        room:1
    },
    {
        id: 8,
        title: 'Ludo',
        poster: 'https://miro.medium.com/max/576/1*GcpSMnMkAb26_2KEvTuVPA.jpeg',
        synopsis: 'From a resurfaced sex tape to a rogue suitcase of money, four wildly different stories overlap at the whims of fate, chance and one eccentric criminal.',
        genres: ['Dramas', 'Chrime', 'Romance', 'Comedy', 'Thriller'],
        year: 2020,
        director: 'Anurag Basu',
        actors: ['Abhishek Bachchan', 'Aditya Roy Kapur', 'Rajkummar Rao', 'Sanya Malhotra', 'Fatima Sana Shaikh', 'Pankaj Tripathi', 'Rohit Saraf', 'Shalini Vatsa', 'Pearle Maaney'],
        hours: ['Wednesday', '19:30', '22:30'],
        room:2
    },
    {
        id: 7,
        title: 'Chhalaang',
        poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSecsneE9-lkQ-IgrYmXVWmeytZaONkwzkUhQFtKd5S8HNDHUlg',
        synopsis: 'Chhalaang is a hilarious, yet inspirational journey of Montu, a PT Master from a semi govt. funded school for whom teaching PT is just a job. When circumstances put everything he cares for at stake, including Neelu who he loves, Montu is forced to do what he\'s never done- TEACH. Through his journey, the film humorously addresses the value of Sports Education in school curriculum.',
        genres: ['Dramas', 'Comedy'],
        year: 2020,
        director: 'Hansal Mehta',
        actors: ['Rajkummar Rao', 'Nushrat Bharucha', 'Mohammed Zeeshan Ayyub'],
        hours: ['Saturday', '19:30', '22:30'],
        room:3
    },
    {
        id: 6,
        title: 'Ludo',
        poster: 'https://miro.medium.com/max/576/1*GcpSMnMkAb26_2KEvTuVPA.jpeg',
        synopsis: 'From a resurfaced sex tape to a rogue suitcase of money, four wildly different stories overlap at the whims of fate, chance and one eccentric criminal.',
        genres: ['Dramas', 'Chrime', 'Romance', 'Comedy', 'Thriller'],
        year: 2020,
        director: 'Anurag Basu',
        actors: ['Abhishek Bachchan', 'Aditya Roy Kapur', 'Rajkummar Rao', 'Sanya Malhotra', 'Fatima Sana Shaikh', 'Pankaj Tripathi', 'Rohit Saraf', 'Shalini Vatsa', 'Pearle Maaney'],
        hours: ['Sunday', '19:30', '22:30'],
        room:5
    },
    {
        id: 5,
        title: 'Chhalaang',
        poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSecsneE9-lkQ-IgrYmXVWmeytZaONkwzkUhQFtKd5S8HNDHUlg',
        synopsis: 'Chhalaang is a hilarious, yet inspirational journey of Montu, a PT Master from a semi govt. funded school for whom teaching PT is just a job. When circumstances put everything he cares for at stake, including Neelu who he loves, Montu is forced to do what he\'s never done- TEACH. Through his journey, the film humorously addresses the value of Sports Education in school curriculum.',
        genres: ['Dramas', 'Comedy'],
        year: 2020,
        director: 'Hansal Mehta',
        actors: ['Rajkummar Rao', 'Nushrat Bharucha', 'Mohammed Zeeshan Ayyub'],
        hours: ['Thursday', '16:30', '19:30'],
        room:4
    },
    {
        id: 4,
        title: 'Ludo',
        poster: 'https://miro.medium.com/max/576/1*GcpSMnMkAb26_2KEvTuVPA.jpeg',
        synopsis: 'From a resurfaced sex tape to a rogue suitcase of money, four wildly different stories overlap at the whims of fate, chance and one eccentric criminal.',
        genres: ['Dramas', 'Chrime', 'Romance', 'Comedy', 'Thriller'],
        year: 2020,
        director: 'Anurag Basu',
        actors: ['Abhishek Bachchan', 'Aditya Roy Kapur', 'Rajkummar Rao', 'Sanya Malhotra', 'Fatima Sana Shaikh', 'Pankaj Tripathi', 'Rohit Saraf', 'Shalini Vatsa', 'Pearle Maaney'],
        hours: ['Tuesday', '12:30', '15:30'],
        room:3
    },
    {
        id: 3,
        title: 'Chhalaang',
        poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSecsneE9-lkQ-IgrYmXVWmeytZaONkwzkUhQFtKd5S8HNDHUlg',
        synopsis: 'Chhalaang is a hilarious, yet inspirational journey of Montu, a PT Master from a semi govt. funded school for whom teaching PT is just a job. When circumstances put everything he cares for at stake, including Neelu who he loves, Montu is forced to do what he\'s never done- TEACH. Through his journey, the film humorously addresses the value of Sports Education in school curriculum.',
        genres: ['Dramas', 'Comedy'],
        year: 2020,
        director: 'Hansal Mehta',
        actors: ['Rajkummar Rao', 'Nushrat Bharucha', 'Mohammed Zeeshan Ayyub'],
        hours: ['Friday', '17:30', '20:30'],
        room:4
    },

];

  ngOnInit(): void {
  }

}
