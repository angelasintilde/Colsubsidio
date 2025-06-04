    $(document).ready(function () {
        $('.metricas-preguntas').on('click', function () {
            var dataId = $(this).attr("data-seccion");
            $(this).attr("data-seccion", document.title);
        });
        $('.metricas-pregvermas').on('click', function () {
            var dataId = $(this).attr("data-seccion");
            $(this).attr("data-seccion", document.title);
        });
    });