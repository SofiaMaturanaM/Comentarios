const boton = document.getElementById("btn");

boton.addEventListener("click", () => {
    let comments = document.getElementById("comment").value;
    document.getElementById("comment").value = "";
    const cont = document.getElementById("cont");
    const newComment = document.createElement("div");
    const trash = document.createElement("i");
    trash.classList.add("fa", "fa-trash", "trash");
    const contComment = document.createElement("p");
    let textNewComment = document.createTextNode(comments);
    contComment.appendChild(textNewComment);
    newComment.appendChild(trash);
    newComment.appendChild(contComment);
    cont.appendChild(newComment);


    trash.addEventListener("click", () => {
        cont.removeChild(newComment);
    })


})