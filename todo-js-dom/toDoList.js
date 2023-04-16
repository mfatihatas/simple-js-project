const form = document.querySelector('#my-form');
const input = document.querySelector('#item-input');
const list = document.querySelector('.todo-list');
const ul = document.createElement('ul')
list.appendChild(ul);

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting and reloading the page

    if (input.value === '') {
        return $(".error").toast('show')
    }

    const newListItem = document.createElement('li');
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove"; // Set button text
    removeButton.style.borderRadius = "5px";
    removeButton.style.backgroundColor = "#0a2ea4";
    removeButton.style.color = "#ffffff";
    removeButton.style.border = "none";
    removeButton.style.width = "65px";
    removeButton.style.height= "100%"
    removeButton.style.outline= "none"
    removeButton.style.cursor= "pointer"
    

    newListItem.textContent = input.value;
    removeButton.textContent = 'X';

    ul.appendChild(newListItem);
    newListItem.appendChild(removeButton);

    // Add event listener to remove button
    removeButton.addEventListener('click', () => {
        removeItem(newListItem);
    });

    function removeItem(item) {
        item.parentNode.removeChild(item);
    }

    // Add event listener to list item
    newListItem.addEventListener('click', () => {
        newListItem.classList.toggle('checked');
    });

    $(".success").toast('show')
    
    input.value = ''; // Clear input field

});
