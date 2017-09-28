### DB schema
```
board: {
    bid1: {
        name: '나랑 놀자',
        white: false,
        black: false
    },
    bid2: {
        name: '나랑 놀지 말자'
        white: '고수',
        black: '하수'
    }
},
history: {
    bid1: {
        0: {
            turn: 1
            idx: 33,
        }
        1: {
            turn: -1
            idx: 34,
        }
    }
}
```