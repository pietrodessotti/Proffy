// Procurar botão

document.querySelector("#add-time")

// Clicar no botão

.addEventListener('click', cloneField)


// Executar uma açãp

function cloneField() {
    // Duplicar os campos

    const newFieldsContainer =  document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campos. Que campos?

    const fields = newFieldsContainer.querySelectorAll('input')

    // forEach = para cada campo, function limpar

    fields.forEach(function(field) {

        //pega o campo e limpa

        field.value = ""
    });

    // Colocar na página. Onde?
    document.querySelector("#schedule-items").appendChild(newFieldsContainer)
}