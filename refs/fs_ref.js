const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if (err) throw new Error(err);

//     console.log('Folder was created');
// });

fs.writeFile(path.join(__dirname, 'notes', 'firstNote.txt'),
    'My first note',
    err => {
        if (err) throw err;
        console.log('File was created');

        fs.appendFile(path.join(__dirname, 'notes', 'firstNote.txt'),
            ' New content',
            err => {
                if (err) throw err;
                console.log('File was edited');
            }
        );

        fs.readFile(path.join(__dirname, 'notes', 'firstNote.txt'),
            'utf-8',
            (err, data) => {
                if (err) throw err;

                console.log(data);
            }
        );
    }
);