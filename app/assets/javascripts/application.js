// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery2
//= require jquery_ujs
//= require jquery-ui
//= require twitter/bootstrap
//= require templates/show
//= require turbolinks
//= require_tree .

// $(function() {
//   console.log('find all show buttons #', $('a[class^=show]').length);
//
//   $('a[class^=show]').bind('ajax:success', function(event, data, status, xhr) {
//     console.log('show button clicked');
//     console.log(data);
//   });
// });

$(function() {
  $('a[class^=show]').bind('ajax:success', function(event, data, status, xhr) {
    $('body').append(JST["templates/show"]({
      modal: 'fortune-modal',  // jakiś unikalny identyfikator
      id: data.id,
      quotation: data.quotation,
      source: data.source }));
    $('#fortune-modal').on('hidden.bs.modal', function() {
      $('.modal').remove();  // usuń wszystkie modals z DOM
    });
    $('#fortune-modal').modal('show');
    // $('#fortune-modal').modal({backdrop: "static", keyboard: true, show: true});
  });

  // $('a[class^=destroy]').bind('ajax:success', function(event, data, status, xhr) {
  //   $(this).closest('article').effect('explode');
  // });
});

// $(function() {
//   $('a[data-type=\"json\"]').on('ajax:success',
//      function(event, data, status, xhr) {
//        $(this).closest('tr').effect('explode', 1000);
//      }
//   );
// });

// $(function() {
//   console.log("wire up the buttons to dismiss the modal when shown");
//
//   $("#myModal").bind("show.bs.modal", function() {
//     console.log("#myModal was shown");
//     $("#myModal button").click(function(e) {
//       // do something whenever one of the buttons is clicked
//       // for demo purposes write to console the content of h4 element
//       console.log("h4 content: " + $(this).html());
//       // and hide the modal window
//       $("#myModal").modal('hide');
//     });
//   });
//
//   // remove the event listeners when the modal window is hidden
//   $("#myModal").bind("hide.bs.modal", function() {
//     console.log("remove event listeners on the buttons");
//     $("#myModal button").unbind();
//   });
//
//   // finally, wire up the actual modal functionality and show the modal window
//   // see also http://getbootstrap.com/javascript/#modals
//   // $("#myModal").modal({
//   //   "backdrop" : "static",
//   //   "keyboard" : true,
//   //   "show" : true // this parameter ensures the modal is shown immediately
//   // });
// });
