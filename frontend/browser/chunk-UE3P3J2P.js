import{a as T,b as V,c as W,d as N,e as D,f as k,g as q,h as F}from"./chunk-EGDXBXUX.js";import{f as w,g as E,h as y,m as S,o as v}from"./chunk-XWZFTEIV.js";import{Ca as M,Ga as b,Ma as C,Oa as n,Pa as o,Ra as h,Sa as g,Ta as a,Ua as l,Va as x,Wa as u,Xa as _,Ya as f,Z as d,_ as p,ta as c,ya as P}from"./chunk-U7OWAT4O.js";function B(m,i){if(m&1){let t=h();n(0,"div",17)(1,"form",18),g("ngSubmit",function(){d(t);let s=a().$implicit,r=a();return p(r.updatePost(s.id))}),n(2,"div",19)(3,"label",20),l(4,"Edit Title:"),o(),n(5,"input",21),f("ngModelChange",function(s){d(t);let r=a().$implicit;return _(r.title,s)||(r.title=s),p(s)}),o()(),n(6,"div",19)(7,"label",22),l(8,"Edit Content:"),o(),n(9,"textarea",23),f("ngModelChange",function(s){d(t);let r=a().$implicit;return _(r.content,s)||(r.content=s),p(s)}),o()(),n(10,"button",24),l(11,"Save"),o(),n(12,"button",25),g("click",function(){d(t);let s=a(2);return p(s.cancelEdit())}),l(13,"Cancel"),o()()()}if(m&2){let t=a().$implicit;c(5),u("ngModel",t.title),c(4),u("ngModel",t.content)}}function H(m,i){if(m&1){let t=h();n(0,"li",13)(1,"div")(2,"h5"),l(3),o(),n(4,"p"),l(5),o()(),n(6,"div")(7,"button",14),g("click",function(){let s=d(t).$implicit,r=a();return p(r.toggleEdit(s.id))}),l(8,"Edit"),o(),b(9,B,14,2,"div",15),n(10,"button",16),g("click",function(){let s=d(t).$implicit,r=a();return p(r.deletePost(s.id))}),l(11,"Delete"),o()()()}if(m&2){let t=i.$implicit,e=a();c(3),x(t.title),c(2),x(t.content),c(4),C("ngIf",e.editingPost===t.id)}}var I=class m{constructor(i){this.http=i}post={title:"",content:""};editingPost=0;posts=[];ngOnInit(){this.fetchPosts()}fetchPosts(){this.http.get("http://localhost:8000/posts/list").subscribe({next:i=>{this.posts=i},error:i=>{console.error("Error fetching posts:",i)}})}toggleEdit(i){this.editingPost=i,console.log("Editing post ID:",this.editingPost)}cancelEdit(){this.editingPost=0,console.log("Edit canceled")}updatePost(i){let t=this.posts.find(e=>e.id===i);t&&this.http.put(`http://localhost:8000/posts/${i}/update/`,t).subscribe({next:e=>{console.log("Post updated successfully:",e),this.editingPost=0,this.fetchPosts()},error:e=>{console.error("Error updating post:",e)}})}deletePost(i){this.http.delete(`http://localhost:8000/posts/${i}/delete/`).subscribe({next:()=>{console.log("Post deleted successfully"),this.posts=this.posts.filter(t=>t.id!==i)},error:t=>{console.error("Error deleting post:",t)}})}createPost(){this.http.post("http://localhost:8000/posts/create/",this.post).subscribe({next:i=>{console.log("Post created successfully:",i),this.post={title:"",content:""},window.location.reload()},error:i=>{console.error("Error creating post:",i)}})}static \u0275fac=function(t){return new(t||m)(P(S))};static \u0275cmp=M({type:m,selectors:[["app-manage-posts"]],decls:21,vars:3,consts:[[1,"container","mt-4"],[1,"text-center","mb-4"],[1,"card","p-4","shadow-lg","border-0","rounded-3","mx-auto",2,"max-width","600px",3,"ngSubmit"],[1,"mb-3"],["for","title",1,"form-label","fw-bold"],["id","title","type","text","name","title","placeholder","Escribe el t\xEDtulo aqu\xED","required","",1,"form-control","form-control-lg",3,"ngModelChange","ngModel"],["for","content",1,"form-label","fw-bold"],["id","content","name","content","rows","5","placeholder","Escribe el contenido aqu\xED","required","",1,"form-control","form-control-lg",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary","btn-lg","w-100"],[1,"mt-4"],[1,"text-center","mb-3"],[1,"list-group"],["class","list-group-item d-flex justify-content-between align-items-center",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],[1,"btn","btn-warning","btn-sm","me-2",3,"click"],["class","mt-3",4,"ngIf"],[1,"btn","btn-danger","btn-sm",3,"click"],[1,"mt-3"],[1,"mb-3",3,"ngSubmit"],[1,"mb-2"],["for","editTitle",1,"form-label"],["id","editTitle","type","text","name","editTitle","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","editContent",1,"form-label"],["id","editContent","name","editContent","rows","3","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-success","btn-sm","me-2"],["type","button",1,"btn","btn-secondary","btn-sm",3,"click"]],template:function(t,e){t&1&&(n(0,"div",0)(1,"h2",1),l(2,"Gestionar Posts"),o(),n(3,"form",2),g("ngSubmit",function(){return e.createPost()}),n(4,"h4",1),l(5,"Crear Nuevo Post"),o(),n(6,"div",3)(7,"label",4),l(8,"T\xEDtulo:"),o(),n(9,"input",5),f("ngModelChange",function(r){return _(e.post.title,r)||(e.post.title=r),r}),o()(),n(10,"div",3)(11,"label",6),l(12,"Contenido:"),o(),n(13,"textarea",7),f("ngModelChange",function(r){return _(e.post.content,r)||(e.post.content=r),r}),o()(),n(14,"button",8),l(15,"Crear Post"),o()(),n(16,"div",9)(17,"h3",10),l(18,"Posts"),o(),n(19,"ul",11),b(20,H,12,3,"li",12),o()()()),t&2&&(c(9),u("ngModel",e.post.title),c(4),u("ngModel",e.post.content),c(7),C("ngForOf",e.posts))},dependencies:[F,k,T,V,W,q,D,N,y,w,E,v],encapsulation:2})};export{I as ManagePostsComponent};
