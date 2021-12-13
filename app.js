
document.getElementById('myfile')
.addEventListener('change', function() {

var fr=new FileReader();
fr.onload=function(){
    if(document.mainForm.myfile.value.lastIndexOf(".txt")==-1) {
        alert("Please upload only .txt extention file");
        return false;
    }
    else{
        document.getElementById('fileno')
            .textContent=fr.result;
    }
   
}
  
fr.readAsText(this.files[0]);
})

