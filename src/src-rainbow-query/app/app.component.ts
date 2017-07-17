import { Component, OnInit } from '@angular/core';
import { LoggerService } from './core/logger.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
    <h2>Palette</h2>
    <ul>
        <li><a [routerLink]="['./']" [queryParams]="rainbowQueryParams">Rainbow</a></li>
        <li><a [routerLink]="['./']" [queryParams]="grayscaleQueryParams">Gray scale</a></li>
    </ul>
    <div class="palette">
        <palette-item *ngFor="let p of paletteNames;index as i" [color]="colors[i]" (colorChange)="onColorChange(i, $event)"></palette-item>
    </div>
    `,
    styles: [
    `
        .palette {
            display: flex;
        }
        palette-item {
            display: inline-block;
        }
    `
    ]
})
export class AppComponent implements OnInit { 
    readonly paletteNames = ['p0',   'p1',     'p2',     'p3',    'p4',   'p5',   'p6'    ];
    readonly rainbow      = ['red',  'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];
    readonly grayscale    = ['#222', '#444',   '#666',   '#888',  '#aaa', '#ccc', '#eee'  ];
    get rainbowQueryParams() {
        return this.colors2queryParams(this.rainbow);
    } 
    get grayscaleQueryParams() {
        return this.colors2queryParams(this.grayscale);
    } 

    colors = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];

    constructor(
        private logger:LoggerService, 
        private router:Router,
        private route:ActivatedRoute
        ) {}

    ngOnInit() {
        // this.logger.startLoggingRouterEvent();

        this.route.queryParamMap.subscribe(map => {
            console.log(`${this.constructor.name}::queryParamMap changed`);
            // take care of only keys of colors
            map.keys.forEach(key => {
                let index = this.paletteNames.indexOf(key);
                if (index >= 0) {
                    if (this.colors[index] != map.get(key)) {
                        console.log(`${this.constructor.name}::this.colors[${index}] = ${map.get(key)}`);
                        this.colors[index] = map.get(key)
                    }
                }
            })
        })
    } 

    onColorChange(index:number, color:string) {
        console.log(`${this.constructor.name}::onColorChange index = ${index}, color = ${color}`);

        this.colors[index] = color;
        let queryParams = this.colors2queryParams(this.colors);

        // change only
        this.router.navigate(['./'], {queryParams:queryParams});
    }

    // convert the array of colors to queryParams
    // - combine paletteNames and colors
    colors2queryParams(colors: string[]) {
        let query = this.paletteNames.reduce((acc:any, cur, index) => {
            acc[cur] = colors[index];
            return acc;
        }, {})

        return query;
    }
}