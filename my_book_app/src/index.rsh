'reach 0.1'

"##############################################################################"
//publish a book to the blockchain and get paid in tokens
//A library application to store book records and for purchasing books.
//
'##############################################################################'


const published_book = {
    bookname: Fun([Bytes(1024)], Null),
    author: Fun([Bytes(1024)], null),
    aboutbook:Bytes(1024)
    price:UInt

}

export const Main = Reach.App(() =>{

    const publisher = Participant('publisher',{
        ...published_book
    });

    publisher.publish()

    const buyer = Participant('buyer',{
        const name_of_book = declassify(interact.bookname),
        const book_author = declassify(interact.author)
        .pay(declassify(interact.price))
        
    });


    commit()

})