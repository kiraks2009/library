function init() {
  document.getElementById("modalForm").reset();
}

window.onload = init;

let myLibrary = [];



function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
 
  //window.location.assign('#close');
  var title = document.getElementById("bTitle").value
  var author = document.getElementById("bAuthor").value
  var pages = document.getElementById("bPages").value
  var xRead = document.getElementById("bRead").value
 var read
  if (xRead=="yes"){
     read ="read";
  }else{
   read ="unread";
}

  
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
console.log(myLibrary.length); // display array length
console.log(myLibrary); //display array
displayBook(newBook);
localStorage.setItem('my_library', JSON.stringify(myLibrary));
/* $(document).ready(function(){
  alert("Book saved to library!!..");
  $('#modalForm').remove();
  $(":root")
  }); */
  document.getElementById("bTitle").value="";
  document.getElementById("bAuthor").value="";
  document.getElementById("bPages").value="";
  document.getElementById("bRead").value="yes";
  //close the modal form
  var modal = document.getElementById('id01');
  modal.style.reset;
  modal.style.display = "none";

}
//create table columns
function displayBook(newBook){

  // myLibrary.forEach((book, index) => {
  //     console.log(book);
  //     return(
  //         <div>
  //             `${book.name}`
  //         </div>
  //     )
  // });
  let div = document.createElement('div');
  div.classList.add("single-book");
  div.style.border="solid";
  div.style.width="14%";
  div.style.textAlign="10px";
  div.style.borderRadius="25px";
  div.style.float="left";
  div.style.justifyContent="center";
  div.style.marginRight="17px";



  let title = document.createElement('h5');
  title.innerHTML = newBook.title;
  title.style.textAlign="center";

  let author = document.createElement('p');
  author.innerHTML = newBook.author;
  author.style.textAlign="center";

  let pages = document.createElement('p');
  pages.innerHTML = newBook.pages;
  pages.style.textAlign="center";

  let read = document.createElement('p');
  read.innerHTML = newBook.read;
  read.style.textAlign="center";


  let bookStatusBtn = document.createElement('button')
  bookStatusBtn.style.textAlign="center";
  bookStatusBtn.style.border="solid";
  

  bookStatusBtn.innerHTML = "Book Status"
  bookStatusBtn.classList.add('book-statusBtn');

  div.appendChild(title);
  div.appendChild(author);
  div.appendChild(pages);
  div.appendChild(read);
  div.appendChild(bookStatusBtn);

  let mainDiv = document.getElementById('container');
  mainDiv.appendChild(div);

  /* // Status text
  if(newBook.read === read){
    read.innerHTML = "read";
}else{
  read.innerHTML = "Unread";
} */

//Status button
bookStatusBtn.onclick = function (){
    if(read.innerHTML === "read"){
        read.innerHTML = "Unread";
    } else{
        read.innerHTML = "read";
    }
    
    }
  



//remove book button
 function removeBook(){
    let removeBtn = document.createElement('button');
    removeBtn.style.textAlign="center";
    removeBtn.style.border="solid";
    removeBtn.style.borderRadius="12px";
    
    removeBtn.textContent = "Delete Book"
    removeBtn.classList.add('remove-bookBtn');

    div.appendChild(removeBtn);

    removeBtn.onclick = function(){
        mainDiv.removeChild(div);
        removeBtn.remove();
        console.log(myLibrary.splice(newBook.id));
        myLibrary.splice(newBook.id, 1);
        localStorage.setItem('my_library', JSON.stringify(myLibrary));
    }
}
removeBook();
}

//form fields validation 
// Form validation code will come here.
function validate() {

  //var x = document.forms["modalForm"]["fname"].value;
      
  if( document.forms["modalForm"]["bTitle"].value == "" ) {
     alert( "Please provide the book title." );
     document.forms["modalForm"]["bTitle"].focus();
     return false;
  }
  if( document.forms["modalForm"]["bAuthor"].value == "" ) {
     alert( "Please provide the author name !" );
     document.forms["modalForm"]["bAuthor"].focus();
     return false;
  }

     if( document.forms["modalForm"]["bPages"].value == "" ) {
      alert( "Please provide the page numbers!" );
      document.forms["modalForm"]["bPages"].focus();
      return false;

  }
  if( document.forms["modalForm"]["bPages"].value == "" || isNaN( document.forms["modalForm"]["bPages"].value ) ) {

     alert( "Please provide the book pages" );
     document.forms["modalForm"]["bPages"].focus();
     return false;
  }
  addBookToLibrary()
}

