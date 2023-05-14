export default {
    '/test/': function() {
        let str = '<ul>';

        for (let i = 1; i < 10; i++) {
            str += '<li>' + i + '</li>';
        }

        str += '</ul>';

        return  str;
    }
}