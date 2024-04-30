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


    const levelOrderHelper = (callBack , queueArr , valueArray) => {
        let queue = queueArr;
        
        if (queue.length < 1) {
            return valueArray;
        }

        let node = queue.shift();

        if (node.getLeft() !== null) {
            queue.push(node.getLeft());
        }
        if (node.getRight() !== null) {
            queue.push(node.getRight());
        }

        if (callBack && typeof callBack === 'function') {
            valueArray.push(callBack(node.getValue()));
        } else {
            valueArray.push(node.getValue());
        }
        
        return levelOrderHelper(callBack , queue , valueArray);

    }

    const levelOrder = (callBack) => {
        let valArr = [];
        let queue = [];
        queue.push(root);
        return levelOrderHelper(callBack , queue , valArr);
        
    }


    const preOrderHelper = (callBack , root , valueArray) => {

        if (root === null) {
            return valueArray;
        }

        if (callBack && typeof callBack === 'function') {
            valueArray.push(callBack(root.getValue()));
        } else {
            valueArray.push(root.getValue());
        }
        preOrderHelper(callBack , root.getLeft() , valueArray);
        preOrderHelper(callBack , root.getRight() , valueArray);

        
        return valueArray;
    }

    const preOrder = (callBack) => {
        let valArr = [];
        return preOrderHelper(callBack , root , valArr);
    }

    const inOrderHelper = (callBack , root , valueArray) => {
        if (root === null) {
            return valueArray;
        }

        inOrderHelper(callBack , root.getLeft() , valueArray);
        if (callBack && typeof callBack === 'function') {
            valueArray.push(callBack(root.getValue()));
        } else {
            valueArray.push(root.getValue());
        }
        inOrderHelper(callBack , root.getRight() , valueArray);

        return valueArray;

    }

    const inOrder = (callBack) => {
        let valArr = [];
        return inOrderHelper(callBack , root , valArr);
    }

    const postOrderHelper = (callBack , root , valueArray) => {
        if (root === null) {
            return valueArray;
        }

        postOrderHelper(callBack , root.getLeft() , valueArray);
        postOrderHelper(callBack , root.getRight() , valueArray);
        if (callBack && typeof callBack === 'function') {
            valueArray.push(callBack(root.getValue()));
        } else {
            valueArray.push(root.getValue());
        }

        return valueArray;

    }

    const postOrder = (callBack) => {
        let valArr = [];
        return postOrderHelper(callBack , root , valArr);
    }

    const depth = (nodeValue) => {
        if (duplicateArray[nodeValue] !== undefined) {
            let depthVal = 0;
            let currNode = root;
            while (currNode !== null) {
                if (nodeValue === currNode.getValue()) {
                    break;
                } else {
                    depthVal++;
                    if (nodeValue > currNode.getValue()) {
                        currNode = currNode.getRight();
                    } else {
                        currNode = currNode.getLeft();
                    }
                }
            }
            return depthVal;
        } else {
            return "That value does not exist within the binary tree.";
        }
    }

    const heightHelper = (node) => {
        if (node === null) {
            return -1;
        }

        let leftHeight = heightHelper(node.getLeft());
        let rightHeight = heightHelper(node.getRight());

        let maxHeight = Math.max(leftHeight , rightHeight);

        return maxHeight + 1;

    }

    const height = (node) => {

        if (node === null || duplicateArray[node.getValue()] === undefined) {
            return "That value does not exist within the binary tree.";
        } else {
            return heightHelper(node);
        }
    }

    const isBalanced = () => {
        let leftHeight = height(root.getLeft());
        let rightHeight = height(root.getRight());
        
        return (leftHeight - rightHeight <= 1 && leftHeight - rightHeight >= -1);
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
        levelOrder,
        preOrder,
        inOrder,
        postOrder,
        depth,
        height,
        isBalanced,
        prettyPrint,
        


    }
}

