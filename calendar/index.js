const curentDate = document.querySelector(".current-date");
daysTag = document.querySelector(".days");
prevNextIcons = document.querySelectorAll(".icons span");


//getting new date, current year, and month
let date = new Date(),
currYear =  date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(date, currYear, currMonth)

const renderCal = () => {
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(); //getDay returns the first day of the month, 0 - 6  
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(); //getting last date of month
    let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

    let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfLastMonth).getDate();
    let liTag = "";

    for (let i = firstDayOfMonth; i > 0; i--){
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }

    for (i = 1; i <= lastDateOfMonth; i++){
        //const element = array[i];
        //console.log(i);
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class = "${isToday}">${i}</li>`;
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;   
    }

    //console.log(lastDateOfMonth)
    curentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}

renderCal();

prevNextIcons.forEach(icon => {
    icon.addEventListener("click", () =>{
        
        currMonth = icon.id === "prev" ? currMonth -1 : currMonth + 1; 
        //console.log(icon);
        if (currMonth || currYear){
            date = new Date(currYear, currMonth)
            currYear =  date.getFullYear();
            currMonth = date.getMonth();
        }
       else{
        date = new Date();
       }
        renderCal();
    });
});