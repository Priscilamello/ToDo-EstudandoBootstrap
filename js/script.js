const inputBox = document.querySelector('#entrada')
const addBtn = document.querySelector('.inputField button')
const todoList = document.querySelector('.todoList')
const deleteAllBtn = document.querySelector('.footer button')

inputBox.onkeyup = _ => {
    let userData = inputBox.value //Esta variável pega o valor de entrada do usuário
    if (userData.trim() != 0){    //se os valores do usuário não forem apenas espaços
        addBtn.classList.add('active')
    }else{
        addBtn.classList.remove('active')

    }

}

addBtn.onclick = _ => {
    let userData = inputBox.value
    let getLocalStorage = localStorage.getItem ('New Todo') // esta variável pega o armazenamento local
    if (getLocalStorage == null){  //vamos verificar se o armazenamento local for nulo
        listArr = [] //vamos criar um array em branco

    }else{
        listArr = JSON.parse(getLocalStorage) //estamos empurrando ou add dados deo usuário à nossa lista
    }
    listArr.push(userData) // empurrando para dentro do array os dados do usuário
    localStorage.setItem('New Todo', JSON.stringify (listArr)) // estamos transformando um ob js em um fragmento js
}


//função para adicionar tarefas dentro da lista
function showTasks(){
    let getLocalStorage = localStorage.getItem('New Todo')// esta variável pega o armazenamento local
    if(getLocalStorage == null){
        listArr = []
    }else{
        listArr = JSON.parse(getLocalStorage)
    }
    const pendingNum = document.querySelector('.pendingNum')
    pendingNum.textContent = listArr.length

    if(listArr.length > 0){ //se o tamanho do array for maior que 0
        deleteAllBtn.classList.add('active')//ativa a classe active
    }else{
        deleteAllBtn.classList.remove('active')//desativa a classe active
    }

    let newLiTag = ''
    addBtn.classList.remove('active')
    listArr.forEach((element, index) => {
        newLiTag += `
        <li> ${element} <span onclick = "deleteTask()"></span></li>
        ` 
        
    })
    todoList.innerHTML = newLitag // add uma nova li dentro da nossa lista no HTML
    inputBox.value = '' //uma vez adicionada a tarefa deixe o campo entrada em branco
}
