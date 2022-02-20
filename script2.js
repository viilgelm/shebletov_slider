let formData;

function onlyNumber(event) {
    if ("1234567890".indexOf(event.key) == -1)
      event.preventDefault();
          
  }
  function onlyMail(event) {
    if ("~#№$%^&*()_-++{[ ]}><,/?".indexOf(event.key) != -1)
      event.preventDefault();
  }
  function onlyName(event) {
    if ("абвгдуёжзийклмнопрстуфчцчшщъыь эюя".indexOf(event.key) == -1){ 
     event.preventDefault();
        
      
    }
    


    
  }
btn.onclick = function(event) {
    
    let form  = document.getElementById("form");
    formData = new FormData(form);
    
    const testDriveInfo = Object.fromEntries(formData.entries());
    console.log(testDriveInfo);
     localStorage.setItem ("testDrive", JSON.stringify(testDriveInfo));
}