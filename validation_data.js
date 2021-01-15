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

const buah = new Fruit({
    name: 'Anggur',
    rating: 10,
    review: "Mantab Jiwa"
});

buah.save(function(error) {
    if(error){
        console.log(error);
        mongoose.connection.close();
    }else{
        mongoose.connection.close();
        console.log("Berhasil Simpan");
    }
})