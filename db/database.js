const fs = require('fs');

module.exports = {
    getDb: JSON.parse(fs.readFileSync('./db/database.json', "utf-8"))
}