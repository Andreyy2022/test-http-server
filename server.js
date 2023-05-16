export default {
    '/handler/': function({get}) {
        return get.num ** 2;
    }
}