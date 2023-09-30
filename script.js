document.getElementById("formulario").addEventListener("submit",  function(event) {
    event.preventDefault(); // Evita que se envíe el formulario por defecto
    
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;

    let data = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log("Respuesta del servidor:", data);
            // Agrega aquí el código para mostrar la respuesta en tu página web
        })
        .catch(error => {
            console.error("Error:", error);
        });
});