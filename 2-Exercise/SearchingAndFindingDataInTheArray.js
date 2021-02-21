/*
    Buscando e contando dados em Arrays

    Baseado no Array de livros por categoria abaixo, faça os seguinetes desafios

        -Contar o numero de categorias e o numero de livros em cada categoria
        -Contar o numero de autores
        -Mostrar livros do autor Augusto Cury
        -Transformar a funcao acima em uma funcao que ira receber o nome do autor e
        devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books:[
            {
                title:"Os segredos de uma mente milionaria",
                author:"T. Harv Eker",
            },
            {
                title:"O homem mais rico da Babilonia",
                author:"George S. Clason",
            },
            {
                title:"Pai rico, pai pobre",
                author:"Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligencia Emocional",
        books:[
            {
                title:"Você é Insubstituível",
                author:"Augusto Cury",
            },
            {
                title:"Ansiedade - Como enfrentar o mal do século",
                author:"Augusto Cury",
            },
            {
                title:"Os 7 hábitos das pessoas altamente eficazes",
                author:"Stephen R. Covey",
            },
        ],
    },

];

console.log(booksByCategory)