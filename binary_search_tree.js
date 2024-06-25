// Binary Search Tree

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
class BSTree {
    constructor(){
        this.root = null;
    }

    isTreeEmpty(){
        return this.root === null;
    }
    makeTree(val){
        let newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode){
        if(root.value > newNode.value){
            if(root.left === null){
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if(root.right === null){
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }
    search(root, val){
        if(root === null){
            return false;
        } else if(root.value === val){
            return true;
        } else if(root.value > val){
            return this.search(root.right, val);
        } else {
            return this.search(root.right, val);
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }    
}
let bst = new BSTree();
bst.makeTree(20);
bst.makeTree(3);
bst.makeTree(21);
bst.makeTree(30);

bst.preOrder(bst.root);
bst.inOrder(bst.root);
bst.postOrder(bst.root);

console.log(bst.search(bst.root, 30));

console.log(bst);