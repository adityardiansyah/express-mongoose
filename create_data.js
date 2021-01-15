const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db-mongoose', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const buah = new Fruit({
//     name: 'Kates',
//     rating: 2,
//     review: "Mantab Jiwa"
// });

// buah.save(function(error) {
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Berhasil Simpan");
//     }
// })

const kiwi = new Fruit({
    name: 'Kiwi',
    rating: 2,
    review: "Mantab Jiwa"
});
const jeruk = new Fruit({
    name: 'Jeruk',
    rating: 2,
    review: "Mantab Jiwa"
});
const nangka = new Fruit({
    name: 'Nangka',
    rating: 2,
    review: "Mantab Jiwa"
});

Fruit.insertMany([kiwi, jeruk, nangka], function(error){
    if(error){
        console.log(error);
    }else{
        mongoose.connection.close();
    }
})