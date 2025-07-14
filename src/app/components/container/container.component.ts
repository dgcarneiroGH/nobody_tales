import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent {
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
