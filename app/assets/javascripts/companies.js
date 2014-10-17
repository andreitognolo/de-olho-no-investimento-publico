(function() {
    $(document).ready(ready);

    function ready() {
        bind_state_change();
    }

    function bind_state_change() {
        $('#company_state').change(function() {
            $.ajax({url: '/companies/fill_cities_name.js',
                dataType: 'html',
                data: {state: $(this).val() },
                success: function (result) {
                    $('.company_city_wrapper').html(result);
                }
            });
        });
    }
})();
