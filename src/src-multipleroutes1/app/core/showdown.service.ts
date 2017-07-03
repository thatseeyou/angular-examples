import { Injectable } from '@angular/core';
import * as showdown from 'showdown';

@Injectable()
export class ShowdownService {
    converter = new showdown.Converter();

    constructor() { }

    makeHtml(markdown:string) {
        return this.converter.makeHtml(markdown);
    }
}