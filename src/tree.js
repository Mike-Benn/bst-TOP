import { Node } from "./node";
export { Tree };

function Tree() {
    let root;

    const getRoot = () => root;

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

        return sorted;
    }

    const buildTree = (arr) => {

    }

    
    return {
        getRoot,
        setRoot,
        sortArray,
        buildTree,
    }
}