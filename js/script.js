let h1 = document.getElementById('headerOne');{
h1.style.color = 'black';
h1.style.backgroundColor = (245, 222, 92);
}

let counter = 10;

function timeout() {
    setTimeout(function(){
        document.getElementById('countDown').textContent = counter;
        counter--;
        if (counter < 0){
            alert('Out of time');
            window.location.replace('page6.html');
        }
     timeout();   
    }, 1000);
}

timeout();


