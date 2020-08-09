//Initiallization of socket
const socket = io();

//Listen for new online visitors
socket.on('newVisitor',(visitors)=>{
  let count = document.getElementById('countVisitors');
  count.style.opacity = '0';
  setTimeout(()=>{
    count.innerText = visitors;
    count.style.opacity = '1';
  },2000)
})

socket.on('visitorLeft',(visitors)=>{
  let count = document.getElementById('countVisitors');
  count.style.opacity = '0';
  setTimeout(()=>{
    count.innerText = visitors;
    count.style.opacity = '1';
  },2000)
})
