export default {
    '/test/': function() {
        let arr = [1, 2, 3, 4, 5];
        let show = '<div>';
        
        for (let elem of arr) {
            show += '<p>' + elem + '</p>';
        }

        show += '</div>';

        return show;
    }
}