class node{
    constructor(data){
        this.data= data;
        this.left= null;
        this.right= null;
    }
}

class binaryTree{
    constructor(){
        this.root= null;
    }

    //Iterative
    preorderTraversal(root){
    if(!root) return [];
    const stack= [root];
    const result= [];

    while(stack.length){
        let node= stack.pop();
        result.push(node.val);
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }

    return result;
    }

    //Recursive
    preorderTraversal(root){
    if(!root) return null;
    const result= [];
 
    const preorder= (node)=>{
        if(!node) return null;
 
        result.push(node.val);
        if(node.left) preorder(node.left);
        if(node.right) preorder(node.right);
    }
 
    preorder(root);
    return result;
    }
}

