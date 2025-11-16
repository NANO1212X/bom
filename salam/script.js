let boton = document.getElementById('botona')


window.onscroll = function (){


   if(scrollY >= 400){

   boton.style.display = 'block'
   }else{

     boton.style.display = 'none'
   }



}


function scroll1() {

    scroll({
        left: 0,
        top: 0, 
        behavior: 'smooth'

    })
}
