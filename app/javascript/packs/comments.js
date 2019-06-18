$(document).ready(function () {
    $("input[type=submit]").click(function () {
        if (this.value === "Create Comment") {
            event.preventDefault();

        }
    });
});