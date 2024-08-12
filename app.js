let text = document.getElementById('text');
let treeleft = document.getElementById('tree-left');
let treeright = document.getElementById('tree-right');
let gateright = document.getElementById('gate-right');
let gateleft = document.getElementById('gate-left');

window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 +'px';
    treeleft.style.left = value * -1.5 +'px';
    treeright.style.right = value * 1.5 +'px';
    gateleft.style.left = value * -0.5 +'px';
    gateright.style.left = value * 0.5 +'px';
});