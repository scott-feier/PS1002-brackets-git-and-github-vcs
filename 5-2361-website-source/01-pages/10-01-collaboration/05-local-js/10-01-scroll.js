/* PRACTICALSERIES (c) 2016

*******************************************************************************
Title :          LOCAL SCROLL - JQUERY                          10-01-SCROLL.JS
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
23 Sep 2017   R01          M. Gledhill    First formal release

08 Sep 2017   P14          M. Gledhill    Published

07 Sep 2017   d-P13.10.01  M. Gledhill    Page created
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
        "<p>scroll.js&nbsp;&mdash;&nbsp;R01</p>" /* LOCAL JS REVISION NUMBER */
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
          $('.js--sc-100100').click(function () {
           $('html, body').animate({scrollTop: $('#js--100100').offset().top -20}, 1000);
          });

          $('.js--sc-100101').click(function () {
           $('html, body').animate({scrollTop: $('#js--100101').offset().top -20}, 1000);
          });

          $('.js--sc-100102').click(function () {
           $('html, body').animate({scrollTop: $('#js--100102').offset().top -20}, 1000);
          });

          $('.js--sc-100103').click(function () {
           $('html, body').animate({scrollTop: $('#js--100103').offset().top -20}, 1000);
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
          $('.js--sc-f10-01').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-01').offset().top -80}, 1000);
          });

          $('.js--sc-f10-02').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-02').offset().top -80}, 1000);
          });

          $('.js--sc-f10-03').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-03').offset().top -80}, 1000);
          });

          $('.js--sc-f10-04').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-04').offset().top -80}, 1000);
          });

          $('.js--sc-f10-05').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-05').offset().top -80}, 1000);
          });

          $('.js--sc-f10-06').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-06').offset().top -80}, 1000);
          });

          $('.js--sc-f10-07').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-07').offset().top -80}, 1000);
          });

          $('.js--sc-f10-08').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-08').offset().top -80}, 1000);
          });

          $('.js--sc-f10-09').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-09').offset().top -80}, 1000);
          });

          $('.js--sc-f10-10').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-10').offset().top -80}, 1000);
          });

          $('.js--sc-f10-11').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-11').offset().top -80}, 1000);
          });

          $('.js--sc-f10-12').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-12').offset().top -80}, 1000);
          });

          $('.js--sc-f10-13').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-13').offset().top -80}, 1000);
          });

          $('.js--sc-f10-14').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-14').offset().top -80}, 1000);
          });

          $('.js--sc-f10-15').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-15').offset().top -80}, 1000);
          });

          $('.js--sc-f10-16').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-16').offset().top -80}, 1000);
          });

          $('.js--sc-f10-17').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-17').offset().top -80}, 1000);
          });

          $('.js--sc-f10-18').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-18').offset().top -80}, 1000);
          });

          $('.js--sc-f10-19').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-19').offset().top -80}, 1000);
          });

          $('.js--sc-f10-20').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-20').offset().top -80}, 1000);
          });

          $('.js--sc-f10-21').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-21').offset().top -80}, 1000);
          });

          $('.js--sc-f10-22').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-22').offset().top -80}, 1000);
          });

          $('.js--sc-f10-23').click(function () {
           $('html, body').animate({scrollTop: $('#js--f10-23').offset().top -80}, 1000);
          });




});                                             /* END OF PAGE READY FUNCTION */
