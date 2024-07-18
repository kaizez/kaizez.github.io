function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function checkValue() {
    const inputValue = document.getElementById('Submit').value;
    const matchValue = 'CTF{FLAG}';

    if (inputValue === matchValue) {
        var results = document.getElementById('results');
        results.innerHTML = 'The value matches!';
    } else {
        document.write('The value does not match.');
    }
}
