function phoneBook(input) {
    let phonebook = {}
for (let info of input) {
let [name, number] = info.split(` `)
phonebook[name]=number
    
}
for (let name in phonebook) {
    console.log(`${name} -> ${phonebook[name]}`);
}
    
}
phoneBook(['Dragane 0894123456',
'Peter 0894100100',
'Daniel 0895050305',
'Lidiq 0894200200']);