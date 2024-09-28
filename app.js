let canvas=document.querySelector('#canvas');
let ctx=canvas.getContext('2d');
let slct=document.getElementsByTagName('select')[0];
// window 
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let prevX=null;
let prevY=null;
let draw=false;
let clrs=document.querySelectorAll('.clr');
console.log(clrs);
let clrArr=Array.from(clrs);
// forEach -> massive, forIn -> object
clrArr.forEach(clr=>{
	clr.addEventListener("click",()=>{
		ctx.strokeStyle=clr.dataset.clr;
	});
});
window.addEventListener("mousedown", (e)=> draw=true);
window.addEventListener("mouseup", (e)=> draw=false);
window.addEventListener("mousemove", (e)=>{
	if(prevX==null || prevY==null || !draw){
		prevX=e.clientX;
		prevY=e.clientY;
	}
	console.log(e);
	let mouseX=e.clientX
	let mouseY=e.clientY
	ctx.beginPath(); // zurgiin zamiig ehluuleh
	ctx.moveTo(prevX,prevY); // mousenii bairshil
	ctx.lineTo(mouseX,mouseY); // tuhain bairshild zurah
	ctx.stroke(); // zursan line-iig gargaj ireh
	prevX=e.clientX;
	prevY=e.clientY;
});
let clearBtn=document.querySelector('.clear');
clearBtn.addEventListener('click',()=>{
	// alert();
	ctx.clearRect(0,0,canvas.width,canvas.height);
});
// save canvas
let saveBtn=document.querySelector('.save');
saveBtn.addEventListener('click',()=>{
	let data=canvas.toDataURL('imag/png');
	let a=document.createElement('a');
	a.href=data;
	a.download="test.png";
	a.click();
})
function px(){
	if(slct.value==1){
		ctx.lineWidth=1;
	}
	if(slct.value==2){
		ctx.lineWidth=2;
	}
	if(slct.value==3){
		ctx.lineWidth=3;
	}
	if(slct.value==4){
		ctx.lineWidth=4;
	}
	if(slct.value==5){
		ctx.lineWidth=5;
	}
}