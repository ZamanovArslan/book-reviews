import comment from './comment.jst'

$(document).ready(function () {
    $(".new_comment")
        .on("ajax:success", addComment)
        .on("ajax:error", showError);

    $('a[data-method="delete"]')
        .on("ajax:success", deleteComment);

    function deleteComment(data) {
        $("div[data-id='"+ $(this).data("id") + "']").remove()
    }

    function showError(data){
        let template = jst('error', {data: data['detail'][0]});
        let last_comment = $('.comment-box').last();
        if(last_comment.length === 0){
            $('.review').after(template)
        }else{
            last_comment.after(template)
        }
    }
    function addComment(data){
        $(".comment-error").remove();
        let template = jst('comment', {data: data['detail'][0]});
        let last_comment = $('.comment-box').last();
        if(last_comment.length === 0){
            $('.review').after(template)
        }else{
            last_comment.after(template)
        }
    }
});