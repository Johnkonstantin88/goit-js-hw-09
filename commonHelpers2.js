import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as m,_ as l}from"./assets/vendor-f5a478b7.js";const s=m||l,o=document.querySelector(".feedback-form");o.addEventListener("input",s(i,500));o.addEventListener("submit",c);const r="feedback-form-state",n={email:"",message:""};u();function i(e){n[e.target.name]=e.target.value,localStorage.setItem(r,JSON.stringify(n))}function u(){const e=JSON.parse(localStorage.getItem(r));if(e!==null){const{elements:{email:t,message:a}}=o;t.value=e.email,a.value=e.message}}function c(e){e.preventDefault();const{elements:{email:t,message:a}}=e.currentTarget;if(t.value.trim()===""||a.value.trim()==="")return alert("Fill in all fields");console.log({email:t.value.trim(),message:a.value.trim()}),e.currentTarget.reset(),localStorage.removeItem(r),f()}function f(){n.email="",n.message=""}
//# sourceMappingURL=commonHelpers2.js.map
