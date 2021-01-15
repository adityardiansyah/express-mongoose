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

// Fruit.updateOne({_id: '6000e7124467100a8cc8a930'}, {name: 'Pisang'}, function(error){
//     if(error){
//         console.log(error);
//     }else{
//         mongoose.connection.close();
//         console.log("Berhasil di update");
//     }
// })

Fruit.deleteOne({_id: '6000e675262b010508528089'}, function(error){
    if(error){
        console.log(error);
    }else{
        mongoose.connection.close();
        console.log("Berhasil di hapus");
    }
})

Fruit.find(function(error, fruits){
    if(error){
        console.log(error);
    }else{
        mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        })
    }
})