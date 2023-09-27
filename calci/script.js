
function insert(num){
    document.form.textview.value=document.form.textview.value+num;
  }
  
  function equals() {
    var txt = document.form.textview.value;
    try {
        if (txt) {
            var result = eval(txt);
            if (isNaN(result) || !isFinite(result)) {
                document.form.textview.value = 'ERROR';
                alert("something went wrong");
            } else {
                document.form.textview.value = result;
            }
        } 
    } catch (error) {
        document.form.textview.value = 'ERROR';
    }
}
  
  function clean(){
    document.form.textview.value="";
  }
  
  function back(){
  var txt=document.form.textview.value;
 document.form.textview.value=txt.substring(0,txt.length-1);
  }