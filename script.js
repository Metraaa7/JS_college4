const btnChange = document.querySelector(".change");
const changeSex = document.querySelector(".changeSex");

btnChange.addEventListener("click", () => {
    if (document.test.ch.checked) {
        document.test.ch.click();
    } else {
        document.test.ch.click();
    }
})

changeSex.addEventListener("click", function() {
    if (document.test1.sex[0].checked) {
        document.test1.sex[1].click();
    } else {
        document.test1.sex[0].click();
    }
})

function btnClick2() {
    let sI = document.test2.item.selectedIndex;
    console.log(sI);
    let txt = "";
    txt = "Запропоновано " + document.test2.item.length + " напоїв" + 
    " \n Вибраний " + document.test2.item.options[sI].text +
    " (value = " + document.test2.item.options[sI].value + 
    ", index = " + document.test2.item.options[sI].index + ")";
    if (document.test2.item.options[sI].defaultSelected) {
        txt += " \n Цей напій вибирається за замовчуванням"
        alert(txt);
    } else {
        txt += " \n Цей напій вибирається за номером " + document.test2.item.options[sI].index;
        alert(txt);
    }
}

for (let i = 0; i < document.links.length; i++) {
    document.sel.listOfLinks.options[i] = new Option(
        document.links[i],
        i,
        false,
        false
    );
}
document.sel.listOfLinks.selectedIndex = 0;



function CheckAge() {
    let minAge = 18;
    if (document.sel1.age.value < minAge) {
        return document.sel1.age.value = minAge;
    } else {
        return document.sel1.age.value;
    }

}

function Complete() {
    let elem =
    `Прізвище: ${document.sel1.family.value} \n
    Ім'я: ${document.sel1.name.value} \n
    Рік: ${CheckAge()} \n
    Телефон: ${document.sel1.phone.value} \n
    `;

    alert(elem);
}