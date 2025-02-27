const arr = [{
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    },
];

let emailMask = /^\w+(\.\w+)?@(?:gmail\.com|yahoo\.com)$/;

let trustedEmails = [];

for (let i = 0; i < arr.length; i++) {
    if (emailMask.test(arr[i].email)) {
        trustedEmails.push(arr[i].email);
    }
}

console.log(trustedEmails);