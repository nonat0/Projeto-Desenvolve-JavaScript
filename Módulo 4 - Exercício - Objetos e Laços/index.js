const estante = [
    {id: 1, titulo: '1984', autor: 'George Orwell', quantidade: 1},
    {id: 2, titulo: 'What Has The Government Done To Your Money', autor: 'Ludwig Von Mises', quantidade: 1},
    {id: 3, titulo:'Human Action', autor: 'Ludwig Von Mises', quantidade: 2},
    {id: 4, titulo: 'Anatomy Of The State', autor: 'Ludwig Von Mises', quantidade:2},
]

function addBook (id, titulo, autor, quantidade){
    estante.push({
        id,
        titulo,
        autor,
        quantidade
    })
}

addBook(5, 'Anatomy Of The Bear', 'Russel Napier', 1);

console.log(estante);

function removeBook(bookId){

    const idCheck = !!estante.find(book => book.id === bookId) 

    if(idCheck){
        for(let i = 0; i < estante.length; i++){
            if (estante[i].id === bookId){
                console.log(`Livro de ID ${bookId} Foi Removido.`)
                estante.splice(i, 1)
                break;
            }
        }
    } else { 
        console.log(`ID: ${bookId} Não encontrado`);
    }
}

removeBook(8);
console.log(estante);

function AttBookAmount (bookId, newAmount){

    const idCheck = !!estante.find(book => book.id === bookId);

    if(idCheck){
        for(let i = 0; i < estante.length; i++){
            if(estante[i].id === bookId){
                estante[i].quantidade = newAmount;
                console.log(`Quantidade do Livro ${estante[i].titulo} de ${estante[i].autor} Atualizada Para: ${newAmount} livros`);
                break;
            }
        }
    }else{
    console.log(`O id: ${bookId} não foi encontrado.`);
    }
}

AttBookAmount(2, 5)
console.log(estante);

function bookList (){
    if (estante.length===0){
        console.log('O estoque de livros está vazio.')
    } else {
        console.log(`O estoque possui ${estante.length} títulos:`)
        for(let i = 0; i<estante.length; i++){
            console.log(`
                ID: ${estante[i].id}
                Livro: ${estante[i].titulo}
                Autor: ${estante[i].autor}
                Quantidade: ${estante[i].quantidade}`)
        }
    }
}

bookList();
