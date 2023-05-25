const insertHTML = document.querySelector(".insert");
window.addEventListener("keydown", (e) => {
  insertHTML.innerHTML = `

    <div class='key'>
        <h1> Key.Code</h1>
        <small>    ${e.key} </small> 
    </div>

    <div class='key'>
        <h1> Key.keyCode</h1>
        <small>    ${e.keyCode} </small> 
    </div>

    <div class='key'>
        <h1> Key.Code</h1>
        <small>    ${e.code} </small> 
    </div>

  `;
});
