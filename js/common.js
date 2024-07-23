$(document).ready(function() {
    $('#eye-btn').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('#password').attr('type', 'text');
            $('#eye-icon').removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            $('#password').attr('type', 'password');
            $('#eye-icon').removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });


    // add new product table
    $('#add-new-product-table').DataTable({
        info: false,
        scrollX: true,
        lengthChange: false,
        searching: false,
        layout: {
            bottomEnd: {
                paging: {
                    firstLast: false
                }
            }
        },
        language: {
            paginate: {
                previous: 'Previous',
                next: 'Next'
            }
        },
        pageLength: 4
        
        // ordering: false,
        // paging: false
    });
});