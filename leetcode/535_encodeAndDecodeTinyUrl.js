const urlStore = {
    counter: 0,
};

const encode = function (longUrl) {
    // const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const {
        counter
    } = urlStore;
    urlStore[counter] = longUrl;
    urlStore.counter += 1;
    return `http://tinyurl.com/${counter}`;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = function (shortUrl) {
    return urlStore[shortUrl.replace("http://tinyurl.com/", '')];
};