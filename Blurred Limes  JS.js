// MY FIRST EVER SUCCESSFUL FUNCTION!!! ----> Shows/hides form on home page
function displayForm() {
    var myForm = document.getElementById('theForm');

    var displaySetting = myForm.style.display;

    var myButton = document.getElementById('formButton')

    if (displaySetting == 'none') {
        myForm.style.display = 'block';
    }

    else {
        myForm.style.display = 'none'
    }
}


