
const add = document.getElementById('add-work');
const inputAdd = document.getElementById('input-add');
const description = document.getElementById('add-desc');

works = [];



const addWork = () => {
    const titleValue = inputAdd.value;
    const descValue = description.value;

    if(titleValue.trim() === "" || descValue.trim() === ""){
        alert('Please Enter Something for all Parts!');
    }


    const newWork = {
        title : titleValue,
        desctiption : descValue
    };

    works.push(newWork);
    clearInputs();
    newWorkDetail(newWork.title, newWork.desctiption);
}

const newWorkDetail = (title, description) => {
    const newWorkElement = document.createElement('tr');
    newWorkElement.innerHTML = `
        <td>${title}</td>
        <td>${description}</td>
        <td>
            <button>Edit</button>
            <button>Delete</button>
            <input type="checkbox" name="" id="">
        </td>
    `;
    const items = document.getElementById('table');
    items.append(newWorkElement);
};




const clearInputs = () =>{
    inputAdd.value = "";
    description.value = "";
};



add.addEventListener('click', addWork);