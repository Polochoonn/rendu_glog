function hideThis(id){
  var obj = document.getElementById(id);
  obj.style.display = "none";
  }

  
function showThis(id)
  {
  var obj = document.getElementById(id);
  obj.style.display = "block";
  }


// Fonction pour récupérer un le nom d'un élément 
  function getName(id){
    var name = document.getElementById(id).value;
    return name;
  }





  function uploadFiles() {
    var files = document.getElementById('upload_pdb').files;
    if(files.length==0){
        alert("Please first choose or drop any file(s)...");
        hideThis('container-molecule2-close');
        return;
    }
    var filenames="";
    for(var i=0;i<files.length;i++){
        filenames+=files[i].name+"\n";
    }
}

function targetPopup(form) {
  window.open('', 'formpopup', 'width=400,height=400,resizeable,scrollbars');
  form.target = 'formpopup';
}
