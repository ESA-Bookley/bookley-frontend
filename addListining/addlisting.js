$(document).ready(function () {
    $('#photo').change(function (e) {
        e.preventDefault();
        const file = this.files[0];
        console.log(file);
        if (file) {
            let reader = new FileReader();
            console.log(reader);
            reader.onload = function (event) {
                $('#image').attr('src', event.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
});