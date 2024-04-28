import { Node } from "./node";
export { Tree };

function Tree(arr) {
    let root;
    let sortedArray = arr;
    let duplicateArray = [];
    


    const getRoot = () => root;

    const getSortedArray = () => sortedArray;

    const getDuplicateArray = () => duplicateArray;

    const setRoot = (node) => {
        root = node;
    };


    // Returns the middle index of an array
    const getMidIndex = (sorted) => {
        return Math.floor(sorted.length / 2);
    }


    // Sorts an array in ascending order after removing any duplicate values, sets sortedArray Tree variable with the sorted array
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


    // Takes an array and builds a Binary Search Tree from the array
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
        duplicateArray[rootNode.getValue()] = 1;

        return rootNode;
        
    }

    const minValue = (node) => {
        let lowestNode = node;
        while (lowestNode.getLeft() !== null) {
            lowestNode = lowestNode.getLeft();
        }
        return lowestNode.getValue();
    }

    const updateDuplicateArray = (value , str) => {
        if (str === "+") {
            duplicateArray[value] = 1;
        } else if (str === "-") {
            duplicateArray[value] = undefined;
        }
    }

    // Takes a value and inserts a node, if it's not a duplicate, into it's correct position in the tree based on it's value
    const insertValue = (value) => {
        let newNode = Node(value);

        if (duplicateArray[value] === undefined) {
            updateDuplicateArray(value , "+");
            if (root !== null) {
                let currNode = root;

                while (true) {
                    if (value < currNode.getValue()) {
                        if (currNode.getLeft() !== null) {
                            currNode = currNode.getLeft();
                            
                        } else if (currNode.getLeft() === null) {
                            currNode.setLeft(newNode);
                            break;

                        }
                    } else {
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
            } else {
                setRoot(newNode);
            }
        }
    }
        
    

    const deleteValueHelper = (node , value) => {
        
        if (node === null) {
            return null;
        }
        
        if (value < node.getValue()) {
            node.setLeft(deleteValueHelper(node.getLeft() , value));

        } else if (value > node.getValue()) {
            node.setRight(deleteValueHelper(node.getRight() , value));

        } else if (node.getValue() === value) {
            if (node.getRight() === null) {
                             
                return node.getLeft();
            } else if (node.getLeft() === null) {
                 
                return node.getRight();

            } else {
                node.setValue(minValue(node.getRight()));
                node.setRight(deleteValueHelper(node.getRight() , node.getValue()));
                



            }
        } 

        
        return node;


    }

    const deleteValue = (value) => {
        if (duplicateArray[value] !== undefined) {
            updateDuplicateArray(value , "-");
            setRoot(deleteValueHelper(getRoot() , value));
            
        } else {
            console.log("That value does not exist within the binary search tree.");
        }
    }
    
    const find = (value) => {
        if (duplicateArray[value] !== undefined) {
            let currNode = root;
            while (currNode !== null) {
                if (value < currNode.getValue()) {
                    currNode = currNode.getLeft();
                } else if (value > currNode.getValue()) {
                    currNode = currNode.getRight();
                } else {
                    return currNode;
                }
                
            }
        } else {
            console.log("This node does not exist within the binary search tree.");
        }
    }

    // Displays tree in console
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
        insertValue,
        deleteValue,
        find,
        prettyPrint,
        


    }
}