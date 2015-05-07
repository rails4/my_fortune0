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

$(function() {
  console.log('try to attach ajax:success event to Show link');
  // use delegated event
  $(document).on('ajax:success', 'a[class^=show]',
        function(event, data, status, xhr) {
    console.log('event ajax:success was fired');

    var template = document.querySelector('#modal-show');

    // get document fragment
    var clone = template.content.cloneNode(true);

    // populate document fragment at runtime
    var p = clone.querySelectorAll('p');
    p[0].textContent = data.quotation;
    p[1].textContent = data.source;
    var h3 = clone.querySelector('h3');
    h3.textContent = 'Fortune ' + data.id;

    var modal_id = 'fortune-modal';

    clone.querySelector('article').id = modal_id;

    // activate the template
    $('body').prepend(clone);

    // remove modal window from DOM
    $('#' + modal_id).on('hidden.bs.modal', function() {
      $('.modal').remove();
    });

    $('#fortune-modal').modal('show');
  });
});
