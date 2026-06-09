import { db } from './firebase.js';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp }
from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

window.showPage=(id)=>{
 document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
 document.getElementById(id).classList.add('active');
};

window.addPost=async()=>{
 const text=document.getElementById('postInput').value.trim();
 if(!text) return;
 await addDoc(collection(db,'posts'),{user:'익명',text,createdAt:serverTimestamp()});
 document.getElementById('postInput').value='';
};

onSnapshot(query(collection(db,'posts'),orderBy('createdAt','desc')),(snap)=>{
 const postList=document.getElementById('postList');
 postList.innerHTML='';
 snap.forEach(doc=>{
  const d=doc.data();
  postList.innerHTML+=`<div class="post"><b>${d.user}</b><p>${d.text}</p></div>`;
 });
});

window.sendMessage=async()=>{
 const text=document.getElementById('chatInput').value.trim();
 if(!text) return;
 await addDoc(collection(db,'messages'),{user:'익명',text,createdAt:serverTimestamp()});
 document.getElementById('chatInput').value='';
};

onSnapshot(query(collection(db,'messages'),orderBy('createdAt')),(snap)=>{
 const chatBox=document.getElementById('chatBox');
 chatBox.innerHTML='';
 snap.forEach(doc=>{
  const d=doc.data();
  chatBox.innerHTML+=`<div class="message"><b>${d.user}</b><p>${d.text}</p></div>`;
 });
});
