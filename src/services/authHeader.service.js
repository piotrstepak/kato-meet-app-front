export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    // if (user && user.accessToken) {
    //     return { Authorization: 'Bearer ' + user.accessToken };
    if (user) {
        console.log(`Bearer ${user}`)//helper print
        return { Authorization: `Bearer ${user}`};
    } else {
        console.log("ERROR")
        return {};
    }
};
