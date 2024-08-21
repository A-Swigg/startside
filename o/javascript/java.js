//bilde
document.getElementById('image').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    audio.play();
});
//bilde slutt

//språkchange
document.getElementById("språk").addEventListener("change", function() {
    var selectedValue = this.value;
    switch(selectedValue) {
        case 'Eng':
            window.location.href = 'index.html';
            break;
        case 'spansk':
            window.location.href = 'spansk.html';
            break;
        case 'oppned':
            window.location.href = 'oppned.html';
            break;
        case 'china':
            window.location.href = 'kina.html';
            break
        case 'arabisk':
            window.location.href = 'arabisk.html';
            break;
        default:
            break;
    }
});
//språkchange slutt

//notat
document.addEventListener('DOMContentLoaded', function() {
    loadItems();
});

function addItem() {
    const itemInput = document.getElementById('item');
    const itemName = itemInput.value.trim();

    if (itemName !== '') {
        const shoppingList = document.getElementById('shopping-list');
        const listItem = document.createElement('div');
        const itemIndex = (JSON.parse(localStorage.getItem('shoppingItems')) || []).length;

        listItem.classList.add("list-item");
        listItem.textContent = itemName;
        console.log((JSON.parse(localStorage.getItem('shoppingItems')) || []).length)
        
        listItem.dataset.id = itemIndex;
        listItem.onclick = () => removeItem(listItem.dataset.id);
        shoppingList.appendChild(listItem);

        saveItems();
        
        itemInput.value = '';
    }
}

function clearList() {
    const shoppingList = document.getElementById('shopping-list');
    shoppingList.innerHTML = '';
    
    saveItems();
}

function loadItems() {
    const shoppingList = document.getElementById('shopping-list');
    const savedItems = JSON.parse(localStorage.getItem('shoppingItems')) || [];
    
    savedItems.forEach(function(item, index) {
        const listItem = document.createElement('div');

        listItem.classList.add("list-item");
        listItem.innerHTML = item;
        listItem.dataset.id = index;
        listItem.onclick = () => removeItem(listItem.dataset.id);

        shoppingList.appendChild(listItem);
    });
}

function saveItems() {
    const shoppingList = document.getElementById('shopping-list');
    const items = Array.from(shoppingList.children).map(function(item) {
        return item.textContent;
    });
    localStorage.setItem('shoppingItems', JSON.stringify(items));
}

function removeItem(id) {
    const shoppingList = document.getElementById('shopping-list');

    Array.from(shoppingList.children).map(function(item) {
        const itemId = item.dataset.id;

        if (itemId == id) {
            item.remove();
            const savedItems = JSON.parse(localStorage.getItem('shoppingItems')) || [];

            savedItems.slice(id, 1);
            saveItems();
        }
    });
}

var input = document.getElementById("item");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("ferdig").click();
  }
});

//notat slutt

// timer
const countDownDate = new Date("December 20, 2024 00:00:01").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Countdown expired";
    }
}, 1000);

//Timer slutt
