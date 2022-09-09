const { MongoClient } = require('mongodb')

const uri = 'mongodb://localhost:27017'

const client = new MongoClient(uri)

async function main() {
    try {
        await client.connect()
        await getData(client, 'cocktail 1')
    } catch (e) {
        console.error(e)
    } finally {
        await client.close()
    }
}

main().catch(console.error)

async function getData(client, cocktailName) {
    const search = await client.db('cocktailApp').collection('rating').findOne({name: cocktailName})
    console.log(search.name)
    await updateData(client, cocktailName, search.average_note, search.nb_vote, 3)
} 


async function updateData(client, cocktailName, avgRating, nbRating, rating) {
    const newAvgRating = ((avgRating*nbRating) + rating) / (nbRating + 1)
    const newNbVote = nbRating + 1
    await client.db('cocktailApp').collection('rating').updateOne({name: 'cocktail 1'}, {$set: {average_note: newAvgRating, nb_vote: newNbVote}})
    const datas = await client.db('cocktailApp').collection('rating').findOne({name: cocktailName})
    console.log(datas)
}

// Caaaaaaa maaaaaaaaaarche !!!! 
