import { Tree } from "./tree";
/*
let test = [1 , 7 , 4 , 23 , 8 , 9 , 4 , 3 , 5 , 7 , 9 , 67 , 6345 , 324];

let tree = Tree(test);
tree.setRoot(tree.buildTree(tree.getSortedArray()));


tree.prettyPrint(tree.getRoot());

tree.rebalance();

tree.prettyPrint(tree.getRoot());
*/
function printArray(arr) {
    let value = "";
    for (let i = 0; i < arr.length; i++) {
        value = value + `${arr[i]} `;
    }
    console.log(value);

}
function main() {
    let testArray = [];

    for (let i = 0; i < 25; i++) {
        testArray.push(Math.ceil(Math.random() * 100));
    }
    let testTree = Tree(testArray);
    testTree.setRoot(testTree.buildTree(testTree.getSortedArray()));
    
    console.log("Test 1 - isBalanced - Expected result is True");
    console.log(testTree.isBalanced());
    console.log();
    console.log("Test 2 - Print all elements in level, pre, post, and in order.");
    console.log("inOrder Traversal");
    printArray(testTree.inOrder());
    console.log();
    console.log("preOrder Traversal");
    printArray(testTree.preOrder());
    console.log();
    console.log("postOrder Traversal");
    printArray(testTree.postOrder());
    console.log();
    console.log("levelOrder Traversal");
    printArray(testTree.levelOrder());
    console.log();
    console.log("Test 3 - Unbalance the tree and confirm it is unbalanced using isBalanced.");
    testTree.insertValue(101);
    testTree.insertValue(102);
    testTree.insertValue(103);
    testTree.insertValue(104);
    testTree.insertValue(105);
    console.log(testTree.isBalanced());
    console.log();
    console.log("Test 4 - Balance the tree by calling rebalance and then confirm the tree is balanced using isBalanced");
    testTree.rebalance();
    console.log(testTree.isBalanced());
    console.log();
    console.log("Test 5 - Print all elements in level, pre, post, and in order.");
    console.log("inOrder Traversal");
    printArray(testTree.inOrder());
    console.log();
    console.log("preOrder Traversal");
    printArray(testTree.preOrder());
    console.log();
    console.log("postOrder Traversal");
    printArray(testTree.postOrder());
    console.log();
    console.log("levelOrder Traversal");
    printArray(testTree.levelOrder());
    console.log();
    testTree.prettyPrint(testTree.getRoot());
    
}


main();




/*
*/





