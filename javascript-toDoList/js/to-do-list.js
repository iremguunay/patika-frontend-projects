let listDOM = document.querySelector('#list')
//tüm görevleri içinde tutacak array
let tasks = []

//listeye yeni element eklemek için onClick newElement fonksiyonun içini doldurdum
//text input'un içinin dolu olup olmadığını kontrol ederek success/error mesajını gösterdim 
const newElement = () => {
    let task = document.querySelector('#task')
    if(task.value && !(/^\s*$/.test(task.value))) {
        tasks.push(task.value)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        addItem(task.value) 
        $('.success').toast('show') 
        
    } else {
        $('.error').toast('show')
    }
    task.value = ""
}

//listeye görev eklemek için ilgili method
const addItem = task => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${task} <span onclick="removeItem()" class="close">&times;</span>`
    liDOM.setAttribute("onclick", "checkedItem()")
    listDOM.append(liDOM)
}

//listeden görev silmek için ilgili method
const removeItem = () => {
    let itemDOM = document.querySelector('#list .close')
    // local storage'dan görevi silmek için önce tasks arrayinden sildim
    tasks.pop(itemDOM.parentNode.remove())
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

//liste ögesini yapıldı olarak işaretlemek için checked class'ı ekleme
const checkedItem = (e) => {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle("checked")
    }
}
listDOM.addEventListener('click', checkedItem)

// local storage'da görev varsa listeye ekleme methodu
const getLocalStorage = () => {
	(localStorage.getItem('tasks')) ?
		tasks = JSON.parse(localStorage.getItem('tasks')) :
		tasks = [];
	tasks.forEach(task => {
		addItem(task)
	})
}

getLocalStorage()