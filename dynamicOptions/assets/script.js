const acuraModels = [
    'ILX', 'MDX', 'RDX', 'RL',
];

const alfaModels = [
    147, 156, 159, 166,
];

const astonModels = [
    'DB11', 'DB9', 'DBS', 'DBX',
];

const audiModels = [
    'A1', 'A2', 'A3', 'A4',
];


const marksSelect = document.querySelector('#marks');

marksSelect.addEventListener('change', fillModelsOptions);

function fillModelsOptions(event) {
    const mark = event.target.value;
    const modelsSelect = document.querySelector('#models');

    if (mark) {
        modelsSelect.classList.add('d-block');
        modelsSelect.classList.remove('d-none');
    } else {
        modelsSelect.classList.add('d-none');
        modelsSelect.classList.remove('d-block');
    }


    let options = '';

    let models = []; 

    switch (mark) {
        case 'acura': {
            models = acuraModels;
            break;
        }
        case 'alfa': {
            models = alfaModels;
            break;
        }
        case 'aston': {
            models = astonModels;
            break;
        }
        case 'audi': {
            models = audiModels;
            break;
        }
    }

    for (let model of models) {
        options += `<option value="${model}">${model}</option>`;
    }

    modelsSelect.innerHTML = options;
}