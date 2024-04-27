import { Node } from "./node";
export { Tree };

function Tree() {
    let root;
    let sortedArray;
    

    const getRoot = () => root;

    const getArray = () => sortedArray;

    const setRoot = (val) => {
        root = val;
    };

    const sortArray = (arr) => {
        let sorted = [];
        let duplicates = [];
        
        for (let i = 0; i < arr.length; i++) {
            if (duplicates[arr[i]] === undefined) {
                duplicates[arr[i]] = 1;
                sorted.push(arr[i]);
            } 
        }
        sorted.sort((a , b) => a - b);
        sortedArray = sorted;
        return sorted;
    }

    const getMidIndex = (sorted) => {
        return Math.floor(sorted.length / 2);
    }

    const buildTree = (sorted) => {
        if (sorted.length === 0) {
            return null;
        }

        let midIndex = getMidIndex(sorted);
        let leftArray = sorted.slice(0 , midIndex);
        let rightArray = sorted.slice(midIndex + 1 , sorted.length);

        let rootNode = Node();
        rootNode.setValue(sorted[midIndex]);
        rootNode.setLeft(buildTree(leftArray));
        rootNode.setRight(buildTree(rightArray));

        return rootNode;
        
    }

    const prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
          return;
        }
        if (node.getRight() !== null) {
          prettyPrint(node.getRight(), `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.getLeft() !== null) {
          prettyPrint(node.getLeft(), `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };
     

    
    return {
        getRoot,
        getArray,
        setRoot,
        sortArray,
        buildTree,
        prettyPrint,

    }
}