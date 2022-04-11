const input_data = document.querySelector('#nascimento')

input_data.addEventListener('blur' , (evento) =>{
    valida_data(evento.target)
})

function valida_data(input){
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if (!maior_18(dataRecebida)){
        mensagem = 'Você deve ser ser maior que 18 anos para se cadastrar'
    }

    input.setCustomValidity(mensagem)
}
function maior_18(data){
    const data_atual = new Date()
    const datamais18 = Date(data.getUTCFullYear() + 18, data.getUTCMonth(),data.getUTCDate())

    return datamais18 <= data_atual
}