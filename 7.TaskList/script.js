const input = document.getElementById('input')
const inProgress = document.querySelector('#inProgress')
const button = document.querySelector('#addtache')
const finish = document.querySelector('#finish')
const defined = document.getElementById('defined')
const date = document.getElementById('date')
const error = document.getElementById('error')

// 
const currentDate = new Date()
const year = currentDate.getFullYear()
const month = currentDate.getMonth()+1
const day = currentDate.getDate()
let compareDate = year + "-" + month + "-" + day

//FONCTION AU CLIC DE AJOUTER
button.addEventListener('click', function () {
    //CREATION DU CONTAINER
    const tacheContain = document.createElement('div')
    tacheContain.classList.add('tache')
    tacheContain.style.display = 'flex'
    inProgress.appendChild(tacheContain)

    //NON ITERATION D'UNE MEME TACHE
    const allTacheInProgress = document.getElementsByClassName('tacheInProgress')

    for (let i = 0; i < allTacheInProgress.length; i++) {
        if (allTacheInProgress[i].textContent == input.value) {
            tacheContain.remove()
            defined.style.display = 'block'
            setTimeout(function() {
                defined.style.display = 'none'
            }, 4000);
        }
    }

    //CREATION DU P QUI CONTIENDRA LA VALEUR DE L'INPUT DATE
    const choiceDate = document.createElement('p')
    choiceDate.classList.add('choiceDate')
    choiceDate.textContent = date.value
    tacheContain.appendChild(choiceDate)

    //COMPARAISON DES DATES
    const dateValue = date.value
    const dateToArr = dateValue.split('-')
    
    if (year == dateToArr[0] && month == dateToArr[1] && day == dateToArr[2]) {
        choiceDate.style.color = 'orange'
    } else if (year > dateToArr[0] || year == dateToArr[0] && month > dateToArr[1] || year == dateToArr[0] && month == dateToArr[1] && day > dateToArr[2]) {
        choiceDate.style.color = 'red'
    } else if (year < dateToArr[0] || year == dateToArr[0] && month < dateToArr[1] || year == dateToArr[0] && month == dateToArr[1] && day < dateToArr[2]) {
        choiceDate.style.color = 'green'
    }



    //CREATION DU P QUI CONTIENDRA LA VALEUR DE L'INPUT TACHE
    const tache = document.createElement('p')
    tache.classList.add('tacheInProgress')
    tache.textContent = input.value
    tacheContain.appendChild(tache)

    //CREATION DES BOUTONS
    //MODIFIER
    const modifier = document.createElement('button')
    modifier.classList.add('btn', 'bg-blue', 'edit-btn')
    modifier.textContent = 'Modifier'
    tacheContain.appendChild(modifier)

    //TERMINER
    const terminer = document.createElement('button')
    terminer.classList.add('btn', 'bg-green', 'done-btn')
    terminer.textContent = 'Terminer'
    tacheContain.appendChild(terminer)

    //SUPPRIMER
    const supprimer = document.createElement('button')
    supprimer.classList.add('btn', 'bg-red', 'delete-btn')
    supprimer.textContent = 'Supprimer'
    tacheContain.appendChild(supprimer)

    supprimer.addEventListener('click', function () {
        tacheContain.remove()
    })

    //ACTION DU BOUTON TEMINER AU PASSAGE DES TACHES COMPLETEES
    //ET PASSAGE DU CONTAINER DANS LES TACHES COMPLETEES
    terminer.addEventListener('click', function (){
        finish.appendChild(tacheContain)
        terminer.style.background = 'yellow'
        terminer.style.color = 'black'
        terminer.textContent = 'En cours'
    })

    //ACTION DU BOUTON MODIFIER ET SUPRESSION DE SON INPUT
    modifier.addEventListener('click', function (){

        if ( modifier.textContent === 'Modifier' ) {
            const addInput = document.createElement('input')
            addInput.setAttribute('placeholder', tache.textContent)
            tacheContain.prepend(addInput)
            tache.textContent = ""
            modifier.textContent = "Valider"
        } else if (modifier.textContent === 'Valider') {
            let selectInput = tacheContain.querySelector('input')

            for (let i = 0; i < allTacheInProgress.length; i++) {
                if (allTacheInProgress[i].textContent == selectInput.value ) {


                    tacheContain.prepend(selectInput)
                    error.style.display = 'block'
                    setTimeout(function() {
                        error.style.display = 'none'
                    }, 4000);
                    return
                }
            }

            tache.textContent = selectInput.value
            modifier.textContent = 'Modifier'
            selectInput.remove()
        }
    })
})


