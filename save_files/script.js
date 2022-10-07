const textarea = document.querySelector("textarea");
const fileNameInput = document.querySelector(".file-name input")
const selectMenu = document.querySelector(".save-as select")
const saveBtn  = document.querySelector(".save-btn")

selectMenu.addEventListener("change", () => {
    //getting selected option text
    let selectedOPtion = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = `Save as ${selectedOPtion.split(" ")[0]} file.`;
    console.log(selectedOPtion.split(" ")[0]);
})

saveBtn.addEventListener("click",() => {
    const blob = new Blob([textarea.value], {type: selectMenu.value});

    //URL.createOjectURL creates a URL that represents passed objects
    const fileURL = URL.createObjectURL(blob);
    const link = document.createElement("a"); //creating <a> tag
    link.download = fileNameInput.value; //passing filename as download
    link.href = fileURL; //passing fileURL as href value of link
    link.click(); // clicking link so the file downloads
})

