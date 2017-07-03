import { Injectable } from '@angular/core';

export class Group {
    constructor(
        public path: string, 
        public displayName: string,
        public members: string[]
    ) {}
}

let groups = [ 
    new Group(
        "modern-web-development",
        "최신 웹 개발",
        ['강현아', '지종현', '조재영', '최가희', '박진아', '김미소', '강명진']
    ),
    new Group(
        "linux-network",
        "리눅스 네트워크",
        ['최연경', '임종배', '강준석', '배기철', '강명진', '박성욱']
    ),
    new Group(
        "understanding-css",
        "CSS의 이해",
        ['김주연', '안소영', '이한호']
    ),
];

@Injectable()
export class GroupService {

    constructor() { }

    getGroups():Group[] {
        return groups;
    }

    getFirstGroup() {
        return groups[0];
    }

    getGroup(path:string) {
        return groups.find((group) => group.path == path ? true : false);
    }
}