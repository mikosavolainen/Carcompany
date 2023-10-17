function switchTab(tabName) {
    let tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabName).style.display = 'block';

    let buttons = document.querySelectorAll('.tab-button');


    if(tabName === 'info') {
        document.querySelector('.tab-button:nth-child(1)').classList.add('active');
    } else {
        document.querySelector('.tab-button:nth-child(2)').classList.add('active');
    }
}

// Simple function to switch image as an example
function changeimage(src) {
    document.querySelector('.main-img').src = src
}
