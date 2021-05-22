let list = document.getElementsByClassName("list");
let itemBox = document.querySelectorAll('.itemBox');
for(let i=0; i<list.length; i++){
    list[i].addEventListener('click', function(e){
        for(let j=0; j<list.length; j++){
            list[j].classList.remove('active') 
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter')
        for(let k=0; k<itemBox.length; k++){
            itemBox[k].classList.add('hide');
            itemBox[k].classList.remove('active');

          if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter === "all"){
            itemBox[k].classList.add('active');
            itemBox[k].classList.remove('hide');
          }  
        }
    })
}