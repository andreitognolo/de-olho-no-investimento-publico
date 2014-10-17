dev = {}

dev.fill = function() {
    if (location.href.contains('companies/new')) {
        $('#company_name').val('Empresa teste');
        $('#company_cnpj').val('0000');
        $('#company_state').val('PE');
        $('#company_state').change();
        $('#company_city').waitUntilExists(function() {
            $(this).val('Petrolina');
        });
    }
}

$(document).ready(function() {
    $(document).dblclick(dev.fill);
});