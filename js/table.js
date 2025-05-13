let rowPerPage = 10;
let rows = document.querySelectorAll('table tbody tr');
let rowCount = rows.length;
let pagaCount = Math.ceil(rowCount/rowPerPage);
let numbers = document.querySelector('#numbers');

for(let i = 1; i <= pagaCount; i++){
  numbers.innerHTML += `<li><a href="">${i}</a></li>`
};

let numberBtn = numbers.querySelectorAll('a');
numberBtn.forEach((item, idx)=>{
  item.addEventListener('click', function(e){
    e.preventDefault();
    displayRow(idx)
  })
});
function displayRow(idx){
  let start = idx * rowPerPage;
  let end = start + rowPerPage;
  let rowsArray = Array.from(rows)
  console.log(rowsArray)
  for(let ra of rowsArray){
    ra.style.display = 'none'
  };
  let newRows = rowsArray.slice(start, end);
  for(let nr of newRows){nr.style.display = ''}
  for(let nb of numberBtn){
    nb.classList.remove('active')
  };
  numberBtn[idx].classList.add('active');
};
displayRow(0);