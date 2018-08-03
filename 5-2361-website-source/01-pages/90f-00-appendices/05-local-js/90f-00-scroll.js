/* PRACTICALSERIES (c) 2016

*******************************************************************************
Title :          LOCAL SCROLL - JQUERY                         90e-00-SCROLL.JS
*******************************************************************************

PRACTICALSERIES: Practical Series of Publications by Michael Gledhill
                 Published in the United Kingdom

                 Email: mg@practicalseries.com
                 Web:   www.practicalseries.com

-------------------------------------------------------------------------------
DETAILS         LOCAL SCROLL FUNCTIONS

jQuery is using version 3.1.0 from the GoogleAPIs library.

This script applies the scroll to a point within the page (srollTop)
functionality for the current page.

-------------------------------------------------------------------------------
NAMING CONVENTIONS

Each <section> of the site has a waypoint (WP) reference number that identifies
the start of each section. These are id attributes and have the format:

        #js--ccssii

    where:  cc - chapter number
            ss - subsection number
            ii - inline section number

The six digit number is unique to each section, i.e. section 2.1.3
would have waypoint reference js--020103

The trigger class used in the <a> element to trigger the scroll to the waypoint
has the name .js-sc-000000 where the six digit number matches the waypoint
number of the section that is to be scrolled to.

The scrolltop function has an offset of -60px to ensure the title is visible
below the fixed navigation bar.

-------------------------------------------------------------------------------
MODIFICATION HISTORY:

This is a complete summary of all software modifications.

Date          Issue        Author         Reason for Modification
-------------------------------------------------------------------------------
02 Aug 2018   R02          M. Gledhill    Second formal release

31 Jul 2018   d-R01-00-03  M. Gledhill    Page created
---------------------------------------------------------------------------- */


/* ****************************************************************************
   WAIT FOR PAGE TO LOAD
   ****************************************************************************
   No jQuery actions take place until the webpage has loaded, all JQuery code
   is contained within the .ready(function()).
   ************************************************************************* */


$(document).ready(function() {                  /* START OF PAGE READY FUNCTION */

/* ****************************************************************************
   REVISION
   **************************************************************************** */

    $('.aside-right-rev').append (
        "<p>scroll.js&nbsp;&mdash;&nbsp;R02</p>" /* LOCAL JS REVISION NUMBER */
    );


/* ****************************************************************************
   SCROLL TO SECTION
   ****************************************************************************
   This holds several scrollTop functions that scroll from the TOC to the
   specified section. There is one click function per <a> within the TOC.
   ************************************************************************* */


 /* ---------------------------------------------------------------------------
   SCROLL TO TOP
   The offset is set to .to -80 - e.g.

          $('.js--sc-000000').click(function () {
           $('html, body').animate({scrollTop: $('#js--000000').offset().top -80}, 1000);
          });
   ------------------------------------------------------------------------- */
   $('.js--sc-000000').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--000000').offset().top -80}, 1000);
    });                                         /* END of scroll function */


 /* ---------------------------------------------------------------------------
   SCROLL TO CHAPTER (Non heading level after TOC)
   The offset is set to .to -10 - e.g.

          $('.js--sc-nn0000').click(function () {
           $('html, body').animate({scrollTop: $('#js--nn0000').offset().top -10}, 1000);
          });
   ------------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------
   SCROLL TO -  SECTIONS & SUBSECTIONS
   The offset is set to .to -20 - e.g.

          $('.js--sc-nn0100').click(function () {
           $('html, body').animate({scrollTop: $('#js--nn0100').offset().top -20}, 1000);
          });
   ------------------------------------------------------------------------- */
          $('.js--sc-90f0000').click(function () {
           $('html, body').animate({scrollTop: $('#js--90f0000').offset().top -20}, 1000);
          });

          $('.js--sc-90f0100').click(function () {
           $('html, body').animate({scrollTop: $('#js--90f0100').offset().top -20}, 1000);
          });

          $('.js--sc-90f0101').click(function () {
           $('html, body').animate({scrollTop: $('#js--90f0101').offset().top -20}, 1000);
          });

          $('.js--sc-90f0102').click(function () {
           $('html, body').animate({scrollTop: $('#js--90f0102').offset().top -20}, 1000);
          });

          $('.js--sc-90f0103').click(function () {
           $('html, body').animate({scrollTop: $('#js--90f0103').offset().top -20}, 1000);
          });

          $('.js--sc-90f0200').click(function () {
           $('html, body').animate({scrollTop: $('#js--90f0200').offset().top -20}, 1000);
          });

          $('.js--sc-90f0201').click(function () {
           $('html, body').animate({scrollTop: $('#js--90f0201').offset().top -20}, 1000);
          });

          $('.js--sc-90f0202').click(function () {
           $('html, body').animate({scrollTop: $('#js--90f0202').offset().top -20}, 1000);
          });



/* ---------------------------------------------------------------------------
   SCROLL TO -  NON-STANDARD (INLINE) SECTIONS
   The offset is set to .to -120 - e.g.

          $('.js--sc-nn0101a').click(function () {
           $('html, body').animate({scrollTop: $('#js--nn0101a').offset().top -120}, 1000);
          });
   ------------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------
   SCROLL TO -  CROSS REFERENCES
   For figures, the offset is set to .to -80 - e.g.

          $('.js--sc-fnn-01').click(function () {
           $('html, body').animate({scrollTop: $('#js--fnn-01').offset().top -80}, 1000);
          });

   For tables, the offset is set to .to -60 - e.g.

          $('.js--sc-tnn-01').click(function () {
           $('html, body').animate({scrollTop: $('#js--tnn-01').offset().top -60}, 1000);
          });
   ------------------------------------------------------------------------- */
          $('.js--sc-f90f-01').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-01').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-02').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-02').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-03').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-03').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-04').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-04').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-05').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-05 ').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-06').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-06').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-07').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-07').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-08').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-08').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-09').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-09').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-10').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-10').offset().top -80}, 1000);
          });
          $('.js--sc-f90f-11').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-11').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-12').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-12').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-13').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-13').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-14').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-14').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-15').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-15 ').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-16').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-16').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-17').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-17').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-18').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-18').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-19').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-19').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-20').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-20').offset().top -80}, 1000);
          });
          $('.js--sc-f90f-21').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-21').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-22').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-22').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-23').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-23').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-24').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-24').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-25').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-25 ').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-26').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-26').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-27').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-27').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-28').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-28').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-29').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-29').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-30').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-30').offset().top -80}, 1000);
          });
          $('.js--sc-f90f-31').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-31').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-32').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-32').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-33').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-33').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-34').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-34').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-35').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-35 ').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-36').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-36').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-37').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-37').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-38').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-38').offset().top -80}, 1000);
          });

          $('.js--sc-f90f-39').click(function () {
           $('html, body').animate({scrollTop: $('#js--f90f-39').offset().top -80}, 1000);
          });

          $('.js--sc-c90f-06').click(function () {
           $('html, body').animate({scrollTop: $('#js--c90f-06').offset().top -120}, 1000);
          });

          $('.js--sc-c90f-07').click(function () {
           $('html, body').animate({scrollTop: $('#js--c90f-07').offset().top -120}, 1000);
          });

          $('.js--sc-c90f-08').click(function () {
           $('html, body').animate({scrollTop: $('#js--c90f-08').offset().top -120}, 1000);
          });

          $('.js--sc-c90f-09').click(function () {
           $('html, body').animate({scrollTop: $('#js--c90f-09').offset().top -120}, 1000);
          });

          $('.js--sc-c90f-10').click(function () {
           $('html, body').animate({scrollTop: $('#js--c90f-10').offset().top -120}, 1000);
          });





});                                             /* END OF PAGE READY FUNCTION */
