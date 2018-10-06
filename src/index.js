import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/scrollspy';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/util';
import 'ekko-lightbox';
import * as cloudinary from 'cloudinary-core/cloudinary-core-shrinkwrap';

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$(document).ready(function() {
  const cl = cloudinary.Cloudinary.new({cloud_name: "execool"}); 
  cl.responsive();
});
