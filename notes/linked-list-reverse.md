Liked List Reverse
```
first iteration
next = { data: 2, next: { data: 3, next: null } }
current.next = null
previous = { data: 1, next: null }
current = { data: 2, next: { data: 3, next: null } }

second iteration
next = { data: 3, next: null }
current.next = { data: 1, next: null }
previous = { data: 2, next: { data: 1, next: null } }
current = { data: 3, next: null }

third iteration
next = null
current.next = { data: 2, next: { data: 1, next: null } }
previous = { data: 2, next: { data: 1, next: null } }
current =  null

```