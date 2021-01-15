const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db-mongoose', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name Harus diisi']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name Harus diisi']
    },
    age: {
        type: Number
    },
    favoritFruit: fruitSchema
});

const People = mongoose.model("People", peopleSchema);

const buah = new Fruit({
    name: 'Mangga',
    rating: 10,
    review: "Mantab Jiwa"
});

buah.save(function(error) {
    if(error){
        console.log(error);
    }else{
        console.log("Buah Berhasil Simpan");
    }
})

const people = new People({
    name: "Adit",
    age: 21,
    favoritFruit: buah
})

people.save(function(error) {
    if(error){
        console.log(error);
    }else{
        console.log("People Berhasil Simpan");
    }
})