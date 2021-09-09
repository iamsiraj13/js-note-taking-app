const noteListDiv = document.querySelector('.note-list');
let noteId = 1;


function Note(id , title , content){
    this.id = id;
    this.title = title;
    this.content = content;
}

// all event listener 
eventListener();
function eventListener(){
    document.getElementById('add-note-btn').addEventListener('click',addNewNote);
}

function addNewNote(){
    const noteTitle = document.getElementById('note-title');
    const noteContent = document.getElementById('note-content');
    
    if(validateInput(noteTitle, noteContent)){
        let notes = [];

        let noteItem = new Note(noteId,noteTitle.value,noteContent.value);
        noteId++;
        notes.push(noteItem);

        createNote(noteItem);
    }
}

// validate input 
function validateInput( title, content){
    if( title.value != '' && content.value != ''){
        return true;
    }else{
        if(title.value == '') title.classList.add('warning');
        if(content.value == '')content.classList.add('warning');
        setTimeout(()=>{
            title.classList.remove('warning')
            content.classList.remove('warning')
        },1500);
    }
}

// create new note

function createNote(noteItem){
    const div = document.createElement('div');
    div.classList.add('note-item');
    div.setAttribute('data-it',noteItem.id);
    div.innerHTML = `
    <h3>${noteItem.title}</h3>
                <p>${noteItem.content}</p>
                <button type="button" class="btn delete-note-btn"><span><i class="fas fa-trash"></i> Remove</span></button>
    `;

    noteListDiv.appendChild(div);
}