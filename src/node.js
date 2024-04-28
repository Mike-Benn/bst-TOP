export { Node };


function Node(val) {
    let value = val;
    let left = null;
    let right = null;
    let parent = null;


    const getValue = () => value;

    const getLeft = () => left;

    const getRight = () => right;

    const getParent = () => parent;

    const setValue = (val) => {
        value = val;
    }

    const setLeft = (node) => {
        left = node;
    }

    const setRight = (node) => {
        right = node;
    }

    const setParent = (node) => {
        parent = node;
    }

    return {
        getValue,
        getLeft,
        getRight,
        getParent,
        setValue,
        setLeft,
        setRight,
        setParent
    }


}