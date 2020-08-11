Breadth First Search || Level Order Traversal

           4
          / \
        2    5
      /  \     \
    1     3     7
               /  \
              6    8

Using a queue (FIFO)
<-[4]<-
Output [4,2,5,1,3,7,6,8]

if(root === null) return []

let res = [4]
let q = []
q.push(root)

while(q.length !== null)
  1. curr = q.pop()
  2 q.push(curr.value)
  if(curr !== null)
    3. Enqueue left child
    4. Enqueue right child


Depth First Search

1. Tavel as fas we can along a particular branch as long as we can.
2. Back out of the current branch
3. Try other branches along the way

Pre Order
  Action
  Left
  Right

In Order BST left is always < current node
             right is always > current node
  Left
  Action
  Right

Post Order
  Left
  Right
  Action


Graph Traversal

              C
            /   \
    A --- B       E  --- F --- D
            \   /   \   /
              H       G

id   edges
A: [B]
B: [A, C, H]