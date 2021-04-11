// Add your code here



    const submitData = function (name,email){ 
      
      const answer = fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email})
      })

      .then(resp => resp.json())
      .then(json => showPage(json))
      .catch(function(error) {
        showPageError(error);
        alert("Bad things!");
        console.log(error.message);
      });
    return answer;
    }


    function showPage(idg){
      const body = document.querySelector('body');
      const h1 = document.createElement('h1');
      h1.innerHTML = `Id:  ${idg.id}`;
      body.appendChild(h1);
    }

    function showPageError(error){
      const bodySelect = document.querySelector('body');
      let lastLi = bodySelect.lastElementChild;
      bodySelect.removeChild(lastLi);
      const h1 = document.createElement('h1');
      h1.innerHTML = error;
      bodySelect.appendChild(h1);
    }
   
  //const answerG=submitData('s','s@hotmail.com');



