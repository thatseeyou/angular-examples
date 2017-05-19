import { Component, OnInit } from '@angular/core';
import { NewsItem } from './news-item';
import { NewsService } from './news.service';

@Component({
  selector: 'top10',
  providers: [ NewsService ],
  templateUrl: './top10.component.html',
  styleUrls: [ './top10.component.css' ]
})
export class Top10Component implements OnInit {
    private news: NewsItem[];
    private overNumber = 1;

    constructor(private newsService:NewsService) {}

    ngOnInit(): void {
        this.newsService.getNews().then(news => this.news = news);
    }

    over(item:NewsItem): void {
        this.overNumber = item.number;
        console.log(item);
    }
}
