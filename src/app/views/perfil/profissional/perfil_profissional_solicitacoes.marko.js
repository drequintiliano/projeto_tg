// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/startbootstrap-freelancer$5.1.3/src/app/views/perfil/profissional/perfil_profissional_solicitacoes.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html lang=pt-br><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><meta name=description content><meta name=author content><title>Perfil Profissional - Solicitações</title><link href=vendor/fontawesome-free/css/all.min.css rel=stylesheet type=text/css><link href=https://fonts.googleapis.com/css?family=Montserrat:400,700 rel=stylesheet type=text/css><link href=https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic rel=stylesheet type=text/css><link href=css/freelancer.min.css rel=stylesheet></head><body id=page-top><nav class=\"navbar navbar-expand-lg text-uppercase fixed-top\" id=mainNav style=\"background-color: #707070\"><div class=container><button class=\"navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded\" type=button data-toggle=collapse data-target=#navbarResponsive aria-controls=navbarResponsive aria-expanded=false aria-label=\"Toggle navigation\"><i class=\"fas fa-bars\"></i></button><a class=\"navbar-brand js-scroll-trigger\" href=#page-top>Portal Serv</a><div class=\"collapse navbar-collapse\" id=navbarResponsive><ul class=navbar-nav><li class=\"nav-item mx-0 mx-lg-1\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=index.html>Serviços</a></li><li class=\"nav-item mx-0 mx-lg-1\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=about.html>Sobre</a></li><li class=\"nav-item mx-0 mx-lg-1\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=contact.html>Ajuda</a></li><li class=\"nav-item mx-0 mx-lg-3\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=login>Entrar</a></li></ul></div><button type=button class=\"btn btn-light\"><a href=perfil_profissional.html>Perfil</a></button></div></nav><section class=page-section id=contact><div class=container><br><br><h2 class=\"page-section-heading text-center mb-0\">Perfil Profissional</h2><br><br><nav aria-label=breadcrumb><ol class=breadcrumb><li class=breadcrumb-item><a href=perfil_profissional.html>Perfil</a></li><li class=breadcrumb-item><a href=perfil_profissional_servicos.html>Serviços</a></li><li class=\"breadcrumb-item active\" aria-current=page>Solicitações</li></ol></nav><div class=container-fluid><div class=container><div class=\"row py-2\"><div class=\"col-12 col-sm-10 mx-auto py-2\"><div class=table-responsive-sm><table class=\"table table-hover\"><thead><tr><th scope=col-2>Data e Hora</th><th scope=col-1>Cliente</th><th scope=col-1>Endereço</th><th scope=col-3>Celular</th><th scope=col-3>E-mail</th><th scope=col-2>Confirmar</th></tr></thead><tbody>");

  var $for$0 = 0;

  marko_forOf(data.solicitacoes, function(solicitacao) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(solicitacao.horaSolicitacao) +
      "</td><td>" +
      marko_escapeXml(solicitacao.cliente) +
      "</td><td>" +
      marko_escapeXml(solicitacao.endereco) +
      "</td><td>" +
      marko_escapeXml(solicitacao.celular) +
      "</td><td>" +
      marko_escapeXml(solicitacao.email) +
      "</td><td><div class=row><div class=\"col-6 col-sm-4\"><button type=button class=\"btn btn-success btn-sm\" data-toggle=modal data-target=#confirmarSolicitacao>Sim</button></div><div class=\"col-6 col-sm-4\"><button type=button class=\"btn btn-danger btn-sm\" data-toggle=modal data-target=#cancelarSolicitacao>Não</button></div></div></td></tr>");
  });

  out.w("</tbody></table></div></div></div></div></div></div></section><div class=\"modal fade\" id=cancelarSolicitacao tabindex=-1 aria-labelledby=exampleModalLabel aria-hidden=true><div class=modal-dialog><div class=modal-content><div class=modal-header><h5 class=modal-title id=exampleModalLabel>Cancelar Solicitação</h5><button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>&times;</span></button></div><div class=modal-body><p>Deseja realmente cancelar a solicitação selecionada?</p></div><div class=modal-footer><button type=button class=\"btn btn-secondary\" data-dismiss=modal>Não</button><button type=button class=\"btn btn-primary\">Sim</button></div></div></div></div><div class=\"modal fade\" id=confirmarSolicitacao tabindex=-1 aria-labelledby=exampleModalLabel aria-hidden=true><div class=modal-dialog><div class=modal-content><div class=modal-header><h5 class=modal-title id=exampleModalLabel>Confirmar Solicitação</h5><button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>&times;</span></button></div><div class=modal-body><p>Deseja realmente confirmar a solicitação selecionada?</p></div><div class=modal-footer><button type=button class=\"btn btn-secondary\" data-dismiss=modal>Não</button><button type=button class=\"btn btn-primary\">Sim</button></div></div></div></div><footer class=\"footer text-center\"><div class=container><div class=row><div class=col-lg-2><p class=\"lead mt-3\">Sorocaba - SP</p></div><div class=col-lg-8></div><div class=col-lg-2><a class=\"btn btn-outline-light btn-social mx-2\" href=#><i class=\"fab fa-fw fa-whatsapp\"></i></a><a class=\"btn btn-outline-light btn-social mx-2\" href=#><i class=\"fab fa-fw fa-facebook-f\"></i></a></div></div></div></footer><div class=\"scroll-to-top d-lg-none position-fixed \"><a class=\"js-scroll-trigger d-block text-center text-white rounded\" href=#page-top><i class=\"fa fa-chevron-up\"></i></a></div><script src=vendor/jquery/jquery.min.js></script><script src=vendor/bootstrap/js/bootstrap.bundle.min.js></script><script src=vendor/jquery-easing/jquery.easing.min.js></script><script src=js/jqBootstrapValidation.js></script><script src=js/contact_me.js></script><script src=js/freelancer.min.js></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "108");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/startbootstrap-freelancer$5.1.3/src/app/views/perfil/profissional/perfil_profissional_solicitacoes.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
