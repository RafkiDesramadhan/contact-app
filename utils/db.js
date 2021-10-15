const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/wpu', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// menambahkan satu data
// const contact1 = new Contact({
//     nama: 'Doddy Ferdiansyah',
//     nohp: '087889001111',
//     email: 'doddy@gmail.com'
// })

// simpan ke collection
// contact1.save().then((resolve) => console.log(resolve))