(()=>{"use strict";!function(){const e=document.getElementById("board");for(let t=0;t<8;t++)for(let l=0;l<8;l++){const n=document.createElement("div"),s=document.createElement("div");n.id=`${t}x${l}`,n.classList.add("square"),(t+l)%2==0?n.classList.add("cream"):n.classList.add("tan"),e.append(n),(t+l)%2==1&&t<3&&s.classList.add("red"),(t+l)%2==1&&t>4&&s.classList.add("black"),n.append(s)}}(),((e,t,l)=>{e(!0),e(!1);let n=!1;n=!n,console.log(`Begin ${n?"Red":"Black"} player's turn`),t.getMarkerLocations(n).forEach((e=>{null!=(e=>{const[l,n]=e,{isRed:s,isKing:a}=t.getSquare(e),r=s?1:-1,o=[{x:l+r,y:n+1},{x:l+r,y:n-1},{x:l-r,y:n+1},{x:l-r,y:n-1}],c=[];for(let e=0;e<o.length;e++)e>1&&!a||o[e].x<0||o[e].x>7||o[e].y<0||o[e].y>7||null==t.getSquare([o[e].x,o[e].y])&&c.push([o[e].x,o[e].y]);return c.length>0?c:null})(e)&&console.log(e,"can make a move")}))})((e=>{const t=[];return{isRed:e,takeMarker:e=>{t.push(e)},checkMarkersTaken:()=>t.length}}),(e=>{const t=[],l=()=>{for(let l=0;l<8;l++){const n=[];for(let t=0;t<8;t++){let s=null;(l+t)%2==1&&l<3&&(s=e(!0)),(l+t)%2==1&&l>4&&(s=e()),n.push(s)}t.push(n)}console.log("Gameboard initialized")};return l(),{board:t,getSquare:e=>{const[l,n]=e;return t[l][n]},updateSquare:(e,l)=>{const[n,s]=e;null!==t[n][s]&&l?console.log("square occupied"):null==t[n][s]&&l?t[n][s]=l:l||(t[n][s]=null)},getMarkerLocations:e=>{const l=[];for(let n=0;n<t.length;n++)for(let s=0;s<t[n].length;s++)null!=t[n][s]&&t[n][s].isRed===e&&l.push([n,s]);return l},reset:()=>{t.splice(0,t.length),l()}}})(((e=!1)=>({isRed:e,isKing:!1}))))})();