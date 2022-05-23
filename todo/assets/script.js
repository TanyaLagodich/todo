document.addEventListener('DOMContentLoaded', () => {

    let tasks = [];

    const actionList = document.querySelector('.action-list');
    const newActionInput = document.querySelector('#new-action');

    const addActionBtn = document.querySelector('#add-action');

    function showTaskListHTML() {
        actionList.innerHTML = '';

        if (!tasks.length) {
            return;
        }

        let html = '';
        tasks.forEach((task, index) => {
            html += `
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="action-${index}">
                    <label class="form-check-label" for="action-${index}">
                        ${task}
                    </label>
                    <button id="delete-btn-${index}" class="delete-btn btn btn-sm" data-index="${index}" onclick="deleteAction">
                        <i class="bi bi-trash3-fill"></i>
                    </button>   
                </div>
            `;
        });

        // Этот цикл можно написать еще вот так
        // проходимся методом map по массивам, преобраузем каждый элемент, затем объединяем в строку с помощью join
        // html = tasks.map((task, index) => {
        //     return `
        //         <div class="form-check">
        //             <input class="form-check-input" type="checkbox" value="" id="action-${index}">
        //             <label class="form-check-label" for="action-${index}">
        //                 ${task}
        //             </label>
        //             <button id="delete-btn-${index}" class="delete-btn btn btn-sm" data-index="${index}">
        //                 <i class="bi bi-trash3-fill"></i>
        //             </button>   
        //         </div>
        //     `;
        // }).join('');

        actionList.innerHTML += html;

        const deleteBtns = document.querySelectorAll('.delete-btn');
        Array.from(deleteBtns).forEach((btn) => {
            btn.addEventListener('click', deleteAction);
        })

        const checkboxInputs = document.querySelectorAll('.form-check-input');
        Array.from(checkboxInputs).forEach((input) => {
            input.addEventListener('change', toggleDisabledInput);
        })
    }

    function addAction(event) {
        if (newActionInput.value === '') {
            return;
        }
        if (event.type === 'keyup' && event.key !== 'Enter') {
            return;
        }
    
        const newAction = newActionInput.value;

        if (newAction) {
            tasks.push(newAction);
            newActionInput.value = '';
            showTaskListHTML();
        }
    }

    function deleteAction(event) {
        const btn = event.target.closest('.delete-btn');
        const index = btn.dataset.index;
        tasks.splice(index, 1);
        showTaskListHTML();
    }

    function toggleDisabledInput(event) {
        const input = event.target;
        if (input.checked) {
            input.disabled = true;
        }
    }

    addActionBtn.addEventListener('click', addAction);
    newActionInput.addEventListener('keyup', addAction);

});

