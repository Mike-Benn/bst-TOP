export { Node };


function Node(val) {
    let value = val;
    let left = null;
    let right = null;
    


    const getValue = () => value;

    const getLeft = () => left;

    const getRight = () => right;



    const setValue = (val) => {
        value = val;
    }

    const setLeft = (node) => {
        left = node;
    }

    const setRight = (node) => {
        right = node;
    }


    return {
        getValue,
        getLeft,
        getRight,
        setValue,
        setLeft,
        setRight,
    }


}