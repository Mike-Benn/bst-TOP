import { Node } from "./node";
export { Tree };

function Tree(arr) {
    let root;
    let sortedArray = arr;
    let duplicateArray = [];
    
    const sortArray = (arr) => {
        let sorted = [];
        
        for (let i = 0; i < arr.length; i++) {
            if (duplicateArray[arr[i]] === undefined) {
                duplicateArray[arr[i]] = 1;
                sorted.push(arr[i]);
            } 
        }
        sorted.sort((a , b) => a - b);
        sortedArray = sorted;
        
    }

    

    const getRoot = () => root;

    const getSortedArray = () => sortedArray;

    const getDuplicateArray = () => duplicateArray;

    const setRoot = (val) => {
        root = val;
    };


    

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

    const insert = (value) => {
        let newNode = Node(value);

        if (duplicateArray[value] === undefined) {
            let currNode = root;
            duplicateArray[value] = 1;

            while (true) {
                if (value < currNode.getValue()) {
                    if (currNode.getLeft() !== null) {
                        currNode = currNode.getLeft();
                        
                    } else if (currNode.getLeft() === null) {
                        currNode.setLeft(newNode);
                        break;

                    }
                }
                
                if (value > currNode.getValue()) {
                    if (currNode.getRight() !== null) {
                        currNode = currNode.getRight();
                    
                    } else if (currNode.getRight() === null) {
                        currNode.setRight(newNode);
                        break;
                    }
                }
            }
            
        }
    }

    const prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
            return;
        }
        if (node.getRight() !== null) {
            prettyPrint(node.getRight(), `${prefix}${isLeft ? "\u2502   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "\u2514\u2500\u2500 " : "\u250C\u2500\u2500 "}${node.getValue()}`);
        if (node.getLeft() !== null) {
            prettyPrint(node.getLeft(), `${prefix}${isLeft ? "    " : "\u2502   "}`, true);
        }
    };
    
     
      sortArray(sortedArray);
    
    return {
        getRoot,
        getSortedArray,
        getDuplicateArray,
        setRoot,
        sortArray,
        buildTree,
        insert,
        prettyPrint,

    }
}