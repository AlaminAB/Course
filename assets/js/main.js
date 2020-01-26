


// display function 
function display(){
	this.insert= document.querySelector(".insert");
	this.form= document.querySelector("#form");
	this.Username= document.querySelector("#Username");
	this.Course= document.querySelector("#Course");
	this.author= document.querySelector("#author");
	this.loding= document.querySelector("#loading");
	this.button= document.querySelector(".btn");
}

// validation 
display.prototype.validation=function(button){
if(this.value == ""){
	this.classList.remove("border-sky");
	this.classList.add("border-red");


}else{
	this.classList.remove("border-red");
	this.classList.add("border-sky");
	button.disabled = false;
}

}

// card function 
display.prototype.card= function(img,name,course,author){
	let div = document.createElement("div");
	div.classList.add("col-md-3","mb-5");
	div.innerHTML=`<div class="card">
	<img class="card-img-top" src="assets/img/${img}.jpg" alt="Card image cap">
	<div class="card-body">
	<ul>
	<li><span class="name-title">Name :</span> <span class="name">${name.value}</span></li>
	<li><span class="course-title">Course :</span> <span class="course">${course.value}</span></li>
	<li><span class="author-title">Author :</span> <span class="author">${author.value}</span></li>
	</ul>
	</div>
	</div>`;
	this.insert.appendChild(div);

};

// all event listerner 
display.prototype.addEvent=function(){
	const b= new display();
	this.form.addEventListener("submit",function(e){
		e.preventDefault()
		b.loding.style.display="block";
		const random= Math.floor(Math.random()*3+1);
		setTimeout(function(){
			b.card(random,this.Username,this.Course,this.author);
			this.Username.value = "";
			this.Course.value = "";
			this.author.value = "";
			b.loding.style.display="none";
			b.Username.classList.remove("border-sky");
			b.Course.classList.remove("border-sky");
			b.author.classList.remove("border-sky");
			
		},1000)
	});

	this.Username.addEventListener("blur",this.validation)
	this.Course.addEventListener("blur",this.validation)
	this.author.addEventListener("blur",this.validation)
	
}

// call all function 
document.addEventListener('DOMContentLoaded', function(){
	let a = new display();
	a.addEvent();
});