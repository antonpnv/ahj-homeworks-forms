!function(){"use strict";let e=!1;document.addEventListener("DOMContentLoaded",(()=>{document.addEventListener("click",(t=>{const{target:o}=t,n=o.getAttribute("data-popover"),r=document.querySelector(".popover");if(e)return void(r&&(r.remove(),e=!1));if(!n)return;const d=document.createElement("div");d.className="popover",d.innerHTML=n,document.body.append(d),function(e,t){const o=e.getBoundingClientRect();let n=o.left+(e.offsetWidth-t.offsetWidth)/2;n<0&&(n=0);let r=o.top-t.offsetHeight-5;r<0&&(r=o.top+e.offsetHeight+5),t.style.left=`${n}px`,t.style.top=`${r}px`}(o,d),e=!0})),document.addEventListener("mouseout",(e=>{const{relatedTarget:t}=e,o=document.querySelector(".popover");o&&!t.classList.contains("popover")&&o.remove()}))}))}();
//# sourceMappingURL=main.js.map