const student = {
    name: 'Md. Shakibur Rahman',
    id: 228011216,
    friends: ['Mahmud', 'Arafat'],
    biye: [{ name: 'umme' }],
    family: function () {
        console.log('RAHMAN');
    },
    education: {
        ssc: 2016,
        profession: 'teacher',
        dpi: {
            department: 'computer'
        }
    }
}
console.log(student.education);
student.family();
//objects er property er man array o hote pare
//objects er property er man objects o hote pare, ei maner moddheo abar object rakha jay
// object er property er man array hote pare abar sei array er moddhe object thakte pare
//

// isArray na holeo array er moto kichuta hobe nicher niyome,, its call array like object
const products = {
    '0': 12,
    '1': 13,
    '2': 16,
}
console.log(products);


// function arguments only only work in indise function
function add(num1, num2) {
    console.log(num1, num2);
    console.log(arguments);
    console.log(arguments[3]);
}
add(12, 21, 23, 34, 50);
