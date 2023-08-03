function smoothScroll(event, targetId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("help").onclick = function() {
    alert("Tips dentro de las secciones: \n" +
            "-Si queres ver una imagen con mayor detalle, o hacerle zoom, podes hacerle click derecho a la imagen y" +
            " pones abrir imagen en nueva pestaña, ahi le vas a poder hacer zoom  \n" +
            "-Si queres imprimir alguna de las secciones de la pagina, dale click derecho en el navegador, " +
            "y selecciona imprimir. Tene en cuenta que tambien podes guardar cualquier seccion en formato PDF " +
            "seleccionando la opcion imprimir PDF en vez de tu impresora (En el navegador MS-Edge) \n" + "\n" +
            " Informacion adicional: \n"+ 
            "Esta es una guia de ayuda general para el uso de esta web: \n"+ 
            "1- Este sitio tiene una finalidad academica, de soporte para los interesados en estos temas.\n"+ 
            "2- Si te interesa contribuir con nosotros con conocimientos, experiencias, informacion, documentos, " + 
            "libros, criticas constructivas, o sugerencias de cualquier tipo, aca arriba en el menu, tenes un " + 
            "boton con el Email de contacto de los desarrolladores. \n" + 
            "3- Cualquier problema, o peticion relacionada con el sitio y su contenido, seran evaluados " + 
            " y tenidos en cuenta en pos de la mejora continua.\n" + 
            "4- Si te gusta el material que suministramos, comparte el material con quien lo necesiten, y si " +
            "queres apoyarnos economicamente, cualquier donacion o aporte nos motiva a seguir " +
            "compartiendo conocimiento de calidad. Tenes un boton aca arriba donde que te explica como colaborar.\n"
        
    );
}

if (document.getElementById("mail")) {
    document.getElementById("mail").onclick = function() {
        /*alert("Mail de contacto: \n" + "iglvnl.mnj@gmail.com");*/
    }
}

document.getElementById("donaciones").onclick = function() {
    var cuadro = document.getElementById("CuadroDonacion");
    cuadro.style.display = 'flex';
};

document.body.onclick = function (event) {
    var cuadro = document.getElementById("CuadroDonacion");
    var cerrar = document.getElementById("cerrar");

    // Si el clic se realiza fuera del cuadro de donación y del botón de donaciones, ocultar el cuadro
    if (event.target == cerrar) {
        cuadro.style.display = 'none';
    }
};

if (document.getElementById("imprimir")) {
    document.getElementById("imprimir").onclick = function() {
        var elements = document.querySelectorAll("p , h2 , a , h1");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.color = '#000000';
        }
        window.print();
        window.location.reload();
    };
}





