
$(document).ready(ready);

function ready() {
    $('#company_state').change(function() {
        console.log($(this).val());
    });
}