const fs = require('fs');

// reading files
// fs.readFile('./docs/blog.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// writing files
// fs.writeFile('./docs/blog.txt', 'Hello World', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// })
// fs.writeFile('./docs/blog2.txt', 'Hello World', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// })

// directories
// if (!fs.existsSync('./assets')) {


//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder created')
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('folder deleted')
//     })
// }

// deleting files