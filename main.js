//огромный шаг для человека, но шаг назад для всего человечества!

const tableBody = document.querySelector('.table-body');
let tableRows = document.querySelectorAll('.table-row');
let elQuantity = document.querySelector('.table-actions__select');
const addBtn = document.querySelector('.table-actions__btn');
const modal = document.querySelector('.modal-alert');
let rowCounter = tableBody.childNodes.length;
let colCounter = tableRows.forEach(row => {
    row.childNodes.length;
})


function addRow() {
    var createdRow = document.createElement('div');
    createdRow.classList.add('table-row');
    tableBody.appendChild(createdRow).style.animation = 'fadein 300ms ease-out';
}

function addCol() {
    let tmpCol = document.createElement('div');
    tmpCol.classList.add('table-row__cell');
    tmpCol.innerText = 'ha-ha!';
    tableBody.lastElementChild.appendChild(tmpCol).style.animation = 'fadein 300ms ease-out';
}

function selectValueSetter() {
    if (elQuantity.value == 0) {
        elQuantity.value = 1;
        modal.classList.add('visible');
    } else {
        modal.classList.remove('visible');
    }
}

function btnTextSwitcher() {
    console.log(rowCounter);
    if (rowCounter === 0)
        addBtn.classList.add('switched')
}
btnTextSwitcher();

addBtn.addEventListener('click', addElem);

function addElem() {
    if (tableBody.childNodes.length == 0) {
        addRow();
        addBtn.classList.remove('switched')
    } else {
        selectValueSetter();
        if (tableBody.lastElementChild.childNodes.length < 3) {
            for (let i = 1; i <= elQuantity.value; i++) {
                addCol();
                if (tableBody.lastElementChild.childNodes.length % 3 === 0) {
                    addBtn.classList.add('switched')
                    break;
                }
            }
        } else if (tableBody.lastElementChild.childNodes.length === 3) {
            addBtn.classList.remove('switched');
            addRow();
        }
    }        
}
//огромный шаг для человека, но шаг назад для всего человечества!



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