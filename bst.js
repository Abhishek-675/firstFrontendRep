class node{
    constructor(data){
        this.data= data;
        this.left= null;
        this.right= null;
    }
}

class binarySearchTree{
    constructor(){
        this.root= null;
    }

    insert(data){
        var newNode= new node(data);

        if(this.root==null) 
            this.root= newNode;
        else 
            this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode){
        if(newNode.data<node.data){
            if(node.left===null)
                node.left= newNode;
            else
                this.insertNode(node.left, newNode);
        }

        else{
            if(node.right===null)
                node.right= newNode;
            else{
                this.insertNode(node.right, newNode);
            }
        }

    }

    search(node, data){
        if(node===null)
            return false;
        else if(data<node.data)
            return this.search(node.left, data)
        else if(data>node.data)
            return this.search(node.right, data)
        else
            return true;
    }
}

var bst= new binarySearchTree();

bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);
bst.insert(17);
bst.insert(13);
bst.insert(5);
bst.insert(9);
bst.insert(27);

