import comment from './comment.jst'

$(document).ready(function () {
    $(document)
        .on("ajax:success", "#new_comment", addComment)
        .on("ajax:error", "#new_comment", showError);

    $(document)
        .on("ajax:complete", "a[data-id]", deleteComment);

    function deleteComment(data) {
        $("div[data-id='" + $(this).data("id") + "']").remove()
    }

    function showError(data) {
        let template = jst('error', {data: data['detail'][0]});
        let last_comment = $('.comment-box').last();
        if (last_comment.length === 0) {
            $('.review').after(template)
        } else {
            last_comment.after(template)
        }
    }

    function addComment(data) {
        $(".comment-error").remove();
        let template = jst('comment', {data: data['detail'][0]});
        let last_comment = $('.comment-box').last();
        if (last_comment.length === 0) {
            $('.review').after(template)
        } else {
            last_comment.after(template)
        }
    }
});