const numUniqueEmails = function (emails) {
    let unique = {};

    emails.forEach(email => {
        const split = email.split('@');
        let local = split[0].split('+')[0].replace(/./g, '');
        unique[`${local}@${split[1]}`] = 1;
    });

    return Object.keys(unique).length;
};