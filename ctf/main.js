function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
function checkValue(event) {
    event.preventDefault()
    var inputValue = document.getElementById('Submit').value;
    var hashvalue = CryptoJS.MD5(inputValue).toString();
    const matchValue = '6fdf526bf0d3fe1205d8019eece8e831';

    if (hashvalue === matchValue) {
        var results = document.getElementById('results');
        results.innerHTML = 'The value matches!';
    } else {
        var results = document.getElementById('results');
        results.innerHTML = 'The value does not match!';
    }
    
    document.getElementById('Submit').value = '';
}

var plaintext = "CTF{7H15_15_345Y_r16H7_Vh6BWlXNKLD9HpiBkUWk}"
