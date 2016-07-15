function Node(val){
  this.val = val;
  this.right = null;
  this.left = null;
}

function BST(){
  this.root = null;
}

BST.prototype.add = function(node){
  if(this.root == null){
    this.root = node;
    return node;
  }
  let _node = this.root;
  let _parent;
  while(_node){
    if(node.val < _node.val){
      parent = _node;
      _node = _node.left;
    } else if(_node.val < node.val){
      parent = node;
      _node = _node.right;
    }
  }

}


BST.prototype.remove = function(val){
  remove(this, val)
}

let remove = function(bst, val){
  let targetNode = findNodeByVal(this, val)
  // Needs some Guards

  if(bst.root == targetNode){
    // PENDING

  } else if(maxLeft(targetNode) != null ){
    let p = maxLeft(targetNode).parent;
    let n = maxLeft(targetNode).node;
    p.right = n.left;
    return true;
  } else if (minRight(targetNode) != null){
    let p = minRight(targetNode).parent;
    let n = minRight(targetNode).node;
    p.left = n.right;
    return true;
  }
  return false;

}

let maxLeft = function(root){
  let parent = root;
  let node = root.left;
  while(node){
    if(node.right == null){
      break;
    }
    parent = node;
    node = node.right;
  }

  return{
    parent: parent,
    node: node
  };
};


let minRight = function(root){
  let parent = root;
  let node = root.right;
  while(node){
    if(node.left == null){
      break;
    }
    parent = node;
    node = node.left;
  }

  return{
    parent: parent,
    node: node
  };
};


let findNodeByVal = function(bst, val){
  let node = bst.root;
  // NOTE: ADD guard for null or some cases
  while(node){
    if(node.val === val){
      return node;
    } else if (node.val < val){
      node = node.left;
    } else {
      node = node.right;
    }
  }

  // can not find
  return null;

}

let n1,n2,n3,n4,n5;
n1 = new Node(500);
n2 = new Node(1000);
n3 = new Node(200);
n4 = new Node(100);
n5 = new Node(400);



