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

