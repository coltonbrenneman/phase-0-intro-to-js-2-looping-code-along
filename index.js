// Code your solutions in this file

const names = ['Guadalupe', 'Ollie', 'Aki']
function writeCards(names, event){
    const messages = []
    for (let i = 0; i < names.length; i++){
        messages.push( `Thank you, ${names[i]}, for the wodnerful ${event} gift!`)
    }

    return messages
}

writeCards(names, 'surprise')

function countDown(num){
    do {
        console.log(num)
        num--
    }while (num >= 0)
}

countDown(4)