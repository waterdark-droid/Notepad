import { Injectable } from '@angular/core';
import { Note } from './types/note.interface';

@Injectable({
  providedIn: 'root'
})
export class NotesDataService {

  constructor() { }

  notes: Note[] = [
//     {
//       id: 1,
//       title: 'Title 1',
//       content: `
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio. Ut tellus elementum sagittis vitae et leo duis ut. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Imperdiet proin fermentum leo vel orci porta. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Mauris pharetra et ultrices neque. Ut etiam sit amet nisl. Morbi enim nunc faucibus a pellentesque. Lectus vestibulum mattis ullamcorper velit sed. Porttitor lacus luctus accumsan tortor posuere ac. A cras semper auctor neque vitae. Tempor commodo ullamcorper a lacus. Nibh cras pulvinar mattis nunc sed blandit.

// Purus in mollis nunc sed id semper. Sit amet tellus cras adipiscing enim eu turpis. Ut eu sem integer vitae justo eget magna. Feugiat scelerisque varius morbi enim. Amet consectetur adipiscing elit pellentesque habitant. Ipsum dolor sit amet consectetur adipiscing elit. Leo urna molestie at elementum eu facilisis. Magna sit amet purus gravida quis blandit. Gravida in fermentum et sollicitudin ac. Eget duis at tellus at urna. Eu consequat ac felis donec.
//       `,
//       color: '#FF3D3D',
//       createdAt: new Date('17-12-2023')
//     },
//     {
//       id: 2,
//       title: 'Title 2',
//       content: `
//       Lorem ipsum dolor sit amet, consectetur adipiscing 
//       elit, sed do eiusmod tempor incididunt ut labore 
//       et dolore magna aliqua. Pharetra et ultrices neque 
//       ornare. Aliquet eget sit amet tellus cras adipiscing...
//       `,
//       color: '#FF833D',
//       createdAt: new Date('17-12-2023')
//     }
  ];

 
  colors: string[] = [
    "#FF3DD4",
    "#FF3D3D",
    "#FF833D",
    "#923DFF",
    "#68FF50"
  ];
}
