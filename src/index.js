import { Tree } from "./tree";

let test = [1 , 7 , 4 , 23 , 8 , 9 , 4 , 3 , 5 , 7 , 9 , 67 , 6345 , 324];
let tree = Tree();
tree.sortArray(test);
let root = tree.buildTree(tree.getArray());
tree.setRoot(root);
console.log(tree.getArray());
console.log(tree.getRoot().getLeft().getRight().getLeft().getValue());
tree.prettyPrint(tree.getRoot());





