const inProgressSelect = document.querySelector('#inProgress');
const finishSelect = document.querySelector('#finish');


window.addEventListener('DOMContentLoaded', () => {
  const savedContent = localStorage.getItem('inProgressContent');
  const savedFinish = localStorage.getItem('finishContent');

    if (savedContent) {
        inProgressSelect.innerHTML = savedContent;
    }

      if(savedFinish) {
        finishSelect.innerHTML = savedFinish 
    }

    //BOUTON AJOUTER
    const addButtons = document.querySelector('#addtache')
    addButtons.addEventListener('click', () => {
            localStorage.setItem('inProgressContent', inProgressSelect.innerHTML);
            localStorage.setItem('finishContent', finishSelect.innerHTML);
    })


    //BOUTON SUPPRIMER
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tache = btn.closest('.tache');

            tache.remove();

            localStorage.setItem('inProgressContent', inProgressSelect.innerHTML);
            localStorage.setItem('finishContent', finishSelect.innerHTML);
        })
    })

    //BOUTON TERMINER
    const finishButtons = document.querySelectorAll('.done-btn')
    finishButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tache = btn.closest('.tache');

                  finishSelect.appendChild(tache);
                  btn.textContent = 'En cours';
                  btn.style.background = 'yellow';
                  btn.style.color = 'black';
               
            localStorage.setItem('inProgressContent', inProgressSelect.innerHTML);
            localStorage.setItem('finishContent', finishSelect.innerHTML);
        })
    })

    // BOUTON MODIFIER
    const modifButtons = document.querySelectorAll('.edit-btn');
    modifButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tache = btn.closest('.tache');
        const label = tache.querySelector('.tacheInProgress');

        if (btn.textContent === 'Modifier') {
            const input = document.createElement('input');
            input.placeholder = label.textContent;
            tache.prepend(input);
            label.textContent = '';
            btn.textContent = 'Valider';
        } else if (btn.textContent === 'Valider') {
            const input = tache.querySelector('input');
            label.textContent = input.value;
            input.remove();
            btn.textContent = 'Modifier';
        }

        localStorage.setItem('inProgressContent', inProgressSelect.innerHTML);
        localStorage.setItem('finishContent', finishSelect.innerHTML);
    });
    });
});




