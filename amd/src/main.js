import $ from 'jquery';
// import Str from 'core/str';
// import Ajax from 'core/ajax';

export const init = (name) => {

    $(function () {

        $(".block_superframe_heading").click(function() {
            alert("Hello " + name + " you clicked");
        });
        
    })
};