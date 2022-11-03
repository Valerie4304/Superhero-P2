let h1 = document.getElementById('headerOne');{
h1.style.color = 'black';
h1.style.backgroundColor = (245, 222, 92);
}

let counter = 5;

function timeout() {
    setTimeout(function(){
        document.getElementById('countDown').textContent = counter;
        counter--;
        if (counter < 0){
            alert('Times run out. You lost.');
            window.location.replace('nextPage.html');
        }
     timeout();   
    }, 1000);
}

timeout();


