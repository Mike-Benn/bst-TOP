import { Tree } from "./tree";

let test = [1 , 7 , 4 , 23 , 8 , 9 , 4 , 3 , 5 , 7 , 9 , 67 , 6345 , 324];

let tree = Tree(test);
tree.setRoot(tree.buildTree(tree.getArray()));

//tree.prettyPrint(tree.getRoot());





