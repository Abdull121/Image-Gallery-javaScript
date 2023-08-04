window.onload= function(){
    modal();
}
function modal(){
   var showImg = document.getElementsByClassName("main-img");
for(var i=0;i<showImg.length;i++){
    showImg[i].onclick= function(){
        openModal(this.src);
    }
}

   
}
function openModal(imgSource){
    document.getElementById("modal").style.display="flex";
    document.getElementById("modal-img").src=imgSource


}

// cross button
document.getElementById("crossBtn").onclick= function(){
    document.getElementById("modal").style.display ="none";

}


