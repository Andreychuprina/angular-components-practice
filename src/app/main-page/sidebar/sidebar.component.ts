import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPost } from '../../interfaces/post-interface';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    @Input() posts!: IPost[];
    @Output() onDeleteFromFavorites = new EventEmitter<IPost>();

    emitDeleteFromFavorites(post: IPost): void {
        this.onDeleteFromFavorites.emit(post);
    }
}
