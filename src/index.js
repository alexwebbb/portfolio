import './style.scss';
import 'bootstrap';
import 'ekko-lightbox';

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
