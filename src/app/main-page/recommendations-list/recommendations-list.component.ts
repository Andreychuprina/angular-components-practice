import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPost } from '../../interfaces/post-interface';

@Component({
  selector: 'app-recommendations-list',
  templateUrl: './recommendations-list.component.html',
  styleUrls: ['./recommendations-list.component.scss']
})
export class RecommendationsListComponent {
  @Input() posts!: IPost[];
  @Output() onAddToFavorites = new EventEmitter<IPost>();

  emitAddToFavorites(post: IPost): void {
    this.onAddToFavorites.emit(post);
  }
}
