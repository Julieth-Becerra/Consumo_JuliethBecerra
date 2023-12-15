function loadData() {
    return new Promise((resolve, reject) => {
        fetch('https://api-dishes.vercel.app/') 
            .then(result => result.json())
            .then(result => {
                resolve(result);
            })
            .catch(err => reject(err));
    });
}

const loadFields = () => {

    const nameValue = document.getElementById('name').value;
    const caloriesValue = parseFloat(document.getElementById('calories').value);
    const isVegetarianValue = document.getElementById('isVegetarian').checked;
    const valueValue = parseFloat(document.getElementById('value').value);
    const commentsValue = document.getElementById('comments').value;
    
    const data = {
        
        "name": nameValue,
        "calories": caloriesValue,
        "isVegetarian": isVegetarianValue,
        "value": valueValue,
        "comments": commentsValue
    };

    return JSON.stringify(data);
}

document.getElementById('addPlatoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const calories = parseInt(document.getElementById('calories').value);
    const isVegetarian = document.getElementById('isVegetarian').value === 'true';
    const value = parseFloat(document.getElementById('value').value);
    const comments = document.getElementById('comments').value;

    const newPlato = {
        name,
        calories,
        isVegetarian,
        value,
        comments
    };

    fetch('https://api-dishes.vercel.app/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPlato)
    })
    .then(response => response.json())
    .then(result => {
        if (result.state) {
            alert('Plato agregado exitosamente');
        } else {
            if (result.status === 208) {
                alert('El ID del plato ya existe');
            } else {
                alert('Error al agregar el plato');
            }
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al enviar la solicitud');
    });
});









