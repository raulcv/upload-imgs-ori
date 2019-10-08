//Ocultando por defecto el cuadro de comentar
$('#publicar-comentario').hide();

$('#btn-mostrar-comentario').click(e => {
    e.preventDefault();
    $('#publicar-comentario').slideToggle();
})

$('#btn-like').click(function(e) {
    e.preventDefault();
    let idimg = $(this).data('id');
    //console.log(idimg);
    $.post('/images/' + idimg + '/like')
        .done(data => {
            console.log(data);
            $('.likes-count').text(data.likes);
        });
});

$('#btn-eliminar').click(function(e) {
    e.preventDefault();
    let $this = $(this);
    const rpta = confirm('¿Estas seguro de eliminar esta imagen?');
    if ( rpta ) {
        let idimg = $this.data('id');
        $.ajax({
            url: '/images/'+ idimg,
            type: 'DELETE'
        })
        .done(function(result) {
            $this.removeClass('btn-danger').addClass('btn-success');
            $this.find('i').removeClass('fa-times').addClass('fa-check');
            $this.append('<spam>Eliminado!</spam>');
        });
    }
});