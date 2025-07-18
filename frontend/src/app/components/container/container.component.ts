import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FirebaseService } from '../../core/services/firebase.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CardComponent, CommonModule],
  providers: [FirebaseService],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent implements OnInit {
  private _firebaseService = inject(FirebaseService);

  ngOnInit(): void {
    this._firebaseService.getChapterDays(0).subscribe((result) => {
      console.log({ result });
    });
  }

  chapters = [
    {
      title: 'Chapter 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, dictum libero id, suscipit eros. Duis rutrum blandit orci, a elementum mauris imperdiet vel.',
    },
    {
      title: 'Chapter 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, dictum libero id, suscipit eros. Duis rutrum blandit orci, a elementum mauris imperdiet vel.',
    },
    {
      title: 'Chapter 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, dictum libero id, suscipit eros. Duis rutrum blandit orci, a elementum mauris imperdiet vel.',
    },
    {
      title: 'Chapter 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, dictum libero id, suscipit eros. Duis rutrum blandit orci, a elementum mauris imperdiet vel.',
    },
    {
      title: 'Chapter 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, dictum libero id, suscipit eros. Duis rutrum blandit orci, a elementum mauris imperdiet vel.',
    },
    {
      title: 'Chapter 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, dictum libero id, suscipit eros. Duis rutrum blandit orci, a elementum mauris imperdiet vel.',
    },
  ];
}
