import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { ComentFormComponent } from './coments/coment-form/coment-form.component';
import { ComentListComponent } from './coments/coment-list/coment-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboutUsComponent, 
    ContactUsComponent, HomeComponent, SingleCategoryComponent, 
    SinglePostComponent, TermsAndConditionComponent, FooterComponent, 
    CategoryNavbarComponent, ComentFormComponent, ComentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-blog-app';
}
