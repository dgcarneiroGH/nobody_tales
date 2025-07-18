import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import { LikeComponent } from '../like/like.component';

@Component({
  selector: 'app-card',
  imports: [CommonModule, LikeComponent, CommentComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
})
export class CardComponent {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() content: string = '';

  //TODO: Puedes añadir la librería para usar colores de las imágenes de fondo y darle ese color a las letras de las targetas
}
