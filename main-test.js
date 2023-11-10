//Прикольно, но хуйня

// function addCol() {
//     tableRow.forEach(row => {
//         for (let i = 1; i < 4; i++) {
//             if (document.querySelectorAll('.table-row__cell').length <= i) {
//                 var createdCol = document.createElement('div');
//                 createdCol.classList.add('table-row__cell');
//                 createdCol.textContent = 'Рыбные тексты...';
//                 row.appendChild(createdCol);
//                 break;
//             } else {
//                 addRow();
//             }
//         }
//     })
// }

//Прикольно, но хуйня




//Прикольно, но хуйня [2]

// function addCol() {
//     tableRow.forEach(row => {
//         for (i = 1; i <=3; i++) {
//             if (document.querySelectorAll('.table-cell__row').length <= i) {
//                 var createdCol = document.createElement('div');
//                 createdCol.classList.add('table-row__cell');
//                 createdCol.textContent = 'Рыбные тексты...';
//                 row.appendChild(createdCol);
//                 break;
//             } else {
//                 addRow();
//             }
//         }
//     })
// }

//Прикольно, но хуйня [2]




//ПОКА ЧТО ЛУЧШЕ ВСЕГО РАБОТАЕТ!

// function addCol() {
//     tableRow.forEach(row => {
//         if (document.querySelectorAll('.table-row__cell').length < 3) {
//             var createdCol = document.createElement('div');
//             createdCol.classList.add('table-row__cell');
//             createdCol.textContent = 'Рыбные тексты...';
//             row.appendChild(createdCol);

//         } else {
//             addColBtn.classList.add('switched');
//             addRow();
//         }
//     })
// }

//ПОКА ЧТО ЛУЧШЕ ВСЕГО РАБОТАЕТ!

const tableBody = document.querySelector('.table-body');
let tableRows = document.querySelectorAll('.table-row');
let elQuantity = document.querySelector('.table-actions__select');
const addBtn = document.querySelector('.table-actions__btn');
const modal = document.querySelector('.modal-alert');


function addRow() {
    var createdRow = document.createElement('div');
    createdRow.classList.add('table-row');
    tableBody.appendChild(createdRow);
}

function addCol() {
    let tmpCol = document.createElement('div');
    tmpCol.classList.add('table-row__cell');
    tmpCol.innerText = 'ha-ha!';
    tableBody.lastElementChild.appendChild(tmpCol);
}



//огромный шаг для человека, но шаг назад для человечества!

function selectValueSetter() {
    if (elQuantity.value == 0) {
        elQuantity.value = 1;
        modal.classList.add('visible');
    } else {
        modal.classList.remove('visible');
    }
}

// function addCol() {
//     selectValueSetter();
//         tableRows.forEach(row => {
//         for (let i = 1; i <= elQuantity.value; i++) {
//             if (row.childNodes.length < 3) {
//                 var createdCol = document.createElement('div');
//                 createdCol.classList.add('table-row__cell');
//                 createdCol.textContent = 'Рыбные тексты...';
//                 row.appendChild(createdCol);
//             } else {
//             }
//         }
//     })
// }

//огромный шаг для человека, но шаг назад для человечества!

addBtn.addEventListener('click', addElem);

function addElem() {
    selectValueSetter();
    if (tableBody.childNodes.length == 0) {
        addRow();
    } else {
        if (tableBody.lastElementChild.childNodes.length < 3) {
            for (let i = 1; i <= elQuantity.value; i++) {
                // let tmpCol = document.createElement('div');
                // tmpCol.classList.add('table-row__cell');
                // tmpCol.innerText = 'ha-ha!';
                // tableBody.lastElementChild.appendChild(tmpCol);
                addCol();
            }
        } else if (tableBody.lastElementChild.childNodes.length == 3) {
            addRow();
        }
    }        
}

// console.log("Начинаем внешний цикл");
// nextPrime: for (var i = 2; i < 10; i++) {
//   console.log("  Итерация внешнего цикла. i = " + i);
//   if (2 < i)
//     console.log("  Начинаем внутренний цикл");
//   for (var j = 2; j < i; j++) {
//     console.log("    Итерация внутреннего цикла. j = " + j + ", i = " + i);
//     if (i % j === 0) {
//       console.log("    Условие (i % j === 0) выполнено. запускаем новую итерацию внешнего цикла");
//       continue nextPrime;
//     }
//   }
// }