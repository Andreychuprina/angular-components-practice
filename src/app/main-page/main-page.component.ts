import { Component } from '@angular/core';
import { IPost } from '../interfaces/post-interface';

@Component({
    selector: 'app-main-page',
    templateUrl: 'main-page.component.html',
    styleUrls: ['main-page.component.scss']
})
export class MainPageComponent {
    favoritesPosts: IPost[] = [];
    recommendedPosts: IPost[] = [
        {
            id: 1,
            title: 'Hello',
            desc: 'Hello I am Andrey'
        },
        {
            id: 2,
            title: 'Angular',
            desc: 'Hello I am Angular'
        },
        {
            id: 3,
            title: 'Js',
            desc: 'Hello I am Js'
        }
    ];

    addToFavoritesHandler(post: IPost): void {
        this.deletePostFromRecommended(post);
        this.addPostToFavorites(post);
        console.log('favoritesPosts', this.favoritesPosts);
        console.log('recommendedPosts', this.recommendedPosts);
    }

    private deletePostFromRecommended(post: IPost): void {
        this.recommendedPosts = this.recommendedPosts.filter(postItem => postItem.id !== post.id);
    }

    private addPostToFavorites(post: IPost): void {
        this.favoritesPosts.push(post);
    }

    deleteFromFavoritesHandler(post: IPost) {
        this.deletePostFromFavorites(post);
        this.addPostToRecommended(post);
    }

    private deletePostFromFavorites(post: IPost): void {
        this.favoritesPosts = this.favoritesPosts.filter(postItem => postItem.id !== post.id);
    }

    private addPostToRecommended(post: IPost): void {
        this.recommendedPosts.push(post);
    }
}
