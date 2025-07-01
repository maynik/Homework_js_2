
//фарбуємо параграф
const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
  paragraph.style.backgroundColor = 'yellow';
});

//лічильник
const button = document.getElementById("button");
const counter = document.getElementById("counter");

button.addEventListener("click", function() {
counter.textContent = Number(counter.textContent) + 1;
});

//видалення елементів li

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-li')) {
    const listItem = event.target.closest('li');
    listItem.remove();
  }
});

document.getElementById('addLi').addEventListener('click', function () {
  const input = document.getElementById('itemInput');
  const value = input.value.trim();
  
  if (value) {
    const li = document.createElement('li');
    li.innerHTML = `${value} <button class="delete-li">x</button>`;
    document.getElementById('list').appendChild(li);
    input.value = '';
  }
});

//динамічні вкладки

  const tabs = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      tabs.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      tab.classList.add('active');
      
      const tabId = tab.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });

  //FAQ

    let faqElems = document.querySelectorAll('.question');
    
    faqElems.forEach(elem => {
      elem.addEventListener('click', function() {

        const answer = this.nextElementSibling;
        
        this.classList.toggle('active');
        answer.classList.toggle('active');
      });
    });