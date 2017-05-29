$(document).ready(function () {
	$('.modal').modal();

	$('.datepicker').pickadate({
		selectMonths: true, // Creates a dropdown to control month
		selectYears: 15, // Creates a dropdown of 15 years to control year
		onStart: () => {
			$('.picker').appendTo('body');
		}
	});

	$('[data-publication]').on('click', function (event) {
		let container = document.getElementById('main');
		let type = $(event.currentTarget).data('publication');
		publish(container, type);
	});
}); 


function agregandoEventos(){
    
    var btn_modalChat = document.getElementById("btn_modalChat")
    var btn_nodalImagen = document.getElementById("btn_modalImagen")
    

    btn_modalChat.addEventListener("click", agregarMensaje);
    btn_nodalImagen.addEventListener('click', agregarImagen);
}

agregandoEventos();

function agregarImagen(){
    var blog = document.getElementById("bitacoraContenido")
    var modalImages = document.getElementById("modalImages")
     
     var imgBlog = crearUnElemento("img",
        {className: "",innerText: ""})
     
    blog.appendChild(imgBlog);
    
      var file= document.getElementById("image-file");
      file.addEventListener("change", manejarSubida);
      function manejarSubida() {
        var reader =  new FileReader();
        reader.readAsDataURL(this.files[0])
        reader.onload = function (){
            
        var imgBlog = this.result;
            console.log(imgBlog)
          imgBlog.style.display="block";
          imgBlog.setAttribute("src", imgBlog);
        }
      }
    
    
    modalImages.style.display ="none";
    
    
  }



function agregarMensaje(){
    var blog = document.getElementById("bitacoraContenido")
    var titulo = document.getElementById("tituloChat").value;
    var mensaje = document.getElementById("textarea1").value;
    var modalChat = document.getElementById("modalChat")
    
    var contenedorBlog = crearUnElemento("section",
        {className: "container card",innerText:""})
    var cardBlog = crearUnElemento("div",
        {className: "card-panel ",innerText:""})
    var tituloBlog = crearUnElemento("h4",
        {className: "col s12 text-blue",innerText: titulo})
    var mensajeBlog = crearUnElemento("div",
        {className: "col s12 ",innerText: mensaje})
    
    cardBlog.appendChild(tituloBlog)
    cardBlog.appendChild(mensajeBlog)
    contenedorBlog.appendChild(cardBlog)
    blog.appendChild(contenedorBlog)
    
    
    modalChat.style.display ="none"
}
	

function crearUnElemento(elementoACrear,propiedades) {
  var elementoCreado = document.createElement(elementoACrear);
  elementoCreado.className= propiedades.className;
  elementoCreado.innerText = propiedades.innerText;
  

  return elementoCreado;
}

