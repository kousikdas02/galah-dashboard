$(document).ready(function() {


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

    // open menu for mobile
    $(".dashboardTogglerBtn").click(function(){
        $('body,html' ).toggleClass("openSidebar");
    });
    $(".sidebarOverlay, .sidebarCloseBtn").click(function(){
        $('body,html' ).removeClass("openSidebar");
    });

});