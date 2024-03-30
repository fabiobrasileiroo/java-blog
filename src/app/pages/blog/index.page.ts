import { Component } from '@angular/core';
import { injectContentFiles } from '@analogjs/content';
import PostAttributes from '../../post-attributes';
import { RouterLink } from '@angular/router';
import { HeaderLandingPageComponent } from 'src/app/page/header-landing-page/header-landing-page.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Blog Archive</h1>
    @for (post of posts;track post.attributes.slug) {
      <div  class="flex justify-center items-center pt-5 h-96">
        <a [routerLink]="['/blog/', post.attributes.slug]">
          <h2 class="post__title">{{ post.attributes.title }}</h2>
          <p class="post__desc">{{ post.attributes.description }}</p>
        </a>
      </div>
    }
  `,
  styles: [
    `
      a {
        text-align: left;
        display: block;
        margin-bottom: 2rem;
      }

      .post__title,
      .post__desc {
        margin: 0;
      }
    `,
  ],
})
export default class HomeComponent {
  readonly posts = injectContentFiles<PostAttributes>();
}
