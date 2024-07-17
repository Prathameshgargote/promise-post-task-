const cl=console.log;
const cardContriner=document.getElementById("cardContriner") 
// const cardContriner=document.getElementById("cardContriner")

const formcontainer=document.getElementById("formcontainer")

const titleControl=document.getElementById("title")

const contentControl=document.getElementById("content")

const AddblogBtn=document.getElementById("AddblogBtn")


let Arr=[]

function generateUUID() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	  var r = Math.random() * 16 | 0,
		  v = c === 'x' ? r : (r & 0x3 | 0x8);
	  return v.toString(16);
	});
  }

  const onAddBlog=(ele)=>{
	ele.preventDefault();
	let NewObj={
		title:titleControl.value,
		content:contentControl.value,
		userID:generateUUID(),
	}
	cl(NewObj)
	formcontainer.reset();
	// return NewObj
	// formcontainer.reset();
	creatBlog(NewObj) 
	.then((res)=>{
		cl(res)
		return fetchBlog()
	 })
	 .then((res)=>{
		cl(res)
		 templating(res)
	 })
	 .catch((err)=>{
		cl(err)
		swal.fire({
			title:err,
			timer:4000,
			icon:`error`,
		})
	 })

 }

 let blogArr=[]
	// {
// 	title:"angular",
// 	contrnt:"asdfghjkjhc c vs ",
// 	id:1234,
//  },{
// 	title:"node Js",
// 	contrnt:"asdfghjbgnmfdbvnhegvbresdbdvsbfgdscvxvkjhc c vs ",
// 	id:76543,
//  },
 



 const creatBlog=(blog)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(() => {
			// let error=Math.random()>=.5?false:true;
			let error=blog.length===0
			if(!error){
				blogArr.push(blog)
				resolve(`new blog is created successfully`)
			}else{
				reject(`something went wrong while creating data`)
			}
			
		}, 2500);
	})
 }

 const fetchBlog=()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(() => {
			let error=Math.random()>=.5?false:true;
			// let error=blogArr.length===0;
			if(!error){
			// Arr=blogArr
			resolve(blogArr)
			}else{
				reject(`somthing went wrong while feaching data.`)
			}
			
		}, 1500);
	})
 }


 const templating=(arr)=>{
	let result='';
	arr.forEach(ele => {
		result+=`	<div class="col-md-4 mb-4">
				<div class="card">
					<div class="card-header">
						<h2>${ele.title}</h2>
					</div>
					<div class="card-body">
						<p>${ele.content}</p>
					</div>
					<div class="card-footer">
						<button class="btn btn-sm btn-outline-info">Edit</button>
						<button class="btn btn-sm btn-outline-danger">remove</button>

					</div>
				</div>
			</div>
		
		`
		// return result;
	});
	cardContriner.innerHTML=result;

 }


//  const onAddBlog=(ele)=>{
// 	ele.preventDefault();
// 	let NewObj={
// 		title:titleControl.value,
// 		content:contentControl.value,
// 		userID:generateUUID(),
// 	}
// 	formcontainer.reset();
// 	creatBlog(NewObj)

//  }

//  creatBlog(onAddBlog)
  

 formcontainer.addEventListener("submit",onAddBlog)