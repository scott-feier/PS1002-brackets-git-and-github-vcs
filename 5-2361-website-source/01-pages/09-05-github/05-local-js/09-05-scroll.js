/* PRACTICALSERIES (c) 2016

*******************************************************************************
Title :          LOCAL SCROLL - JQUERY                          09-05-SCROLL.JS
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

23 Sep 2017   R01          M. Gledhill    First formal release

07 Sep 2017   P13          M. Gledhill    Published

04 Sep 2017   d-P12.09.01  M. Gledhill    Page created
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
          $('.js--sc-090500').click(function () {
           $('html, body').animate({scrollTop: $('#js--090500').offset().top -20}, 1000);
          });

          $('.js--sc-090501').click(function () {
           $('html, body').animate({scrollTop: $('#js--090501').offset().top -20}, 1000);
          });

          $('.js--sc-090502').click(function () {
           $('html, body').animate({scrollTop: $('#js--090502').offset().top -20}, 1000);
          });

          $('.js--sc-090503').click(function () {
           $('html, body').animate({scrollTop: $('#js--090503').offset().top -20}, 1000);
          });

          $('.js--sc-090504').click(function () {
           $('html, body').animate({scrollTop: $('#js--090504').offset().top -20}, 1000);
          });

          $('.js--sc-090505').click(function () {
           $('html, body').animate({scrollTop: $('#js--090505').offset().top -20}, 1000);
          });

          $('.js--sc-090506').click(function () {
           $('html, body').animate({scrollTop: $('#js--090506').offset().top -20}, 1000);
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

          $('.js--sc-f09-49').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-49').offset().top -80}, 1000);
          });

          $('.js--sc-f09-50').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-50').offset().top -80}, 1000);
          });

          $('.js--sc-f09-51').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-51').offset().top -80}, 1000);
          });

          $('.js--sc-f09-52').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-52').offset().top -80}, 1000);
          });

          $('.js--sc-f09-53').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-53').offset().top -80}, 1000);
          });

          $('.js--sc-f09-54').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-54').offset().top -80}, 1000);
          });

          $('.js--sc-f09-55').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-55').offset().top -80}, 1000);
          });

          $('.js--sc-f09-56').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-56').offset().top -80}, 1000);
          });

          $('.js--sc-f09-57').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-57').offset().top -80}, 1000);
          });

          $('.js--sc-f09-58').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-58').offset().top -80}, 1000);
          });

          $('.js--sc-f09-59').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-59').offset().top -80}, 1000);
          });

          $('.js--sc-f09-60').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-60').offset().top -80}, 1000);
          });

          $('.js--sc-f09-61').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-61').offset().top -80}, 1000);
          });

          $('.js--sc-f09-62').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-62').offset().top -80}, 1000);
          });

          $('.js--sc-f09-63').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-63').offset().top -80}, 1000);
          });

          $('.js--sc-f09-64').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-64').offset().top -80}, 1000);
          });

          $('.js--sc-f09-65').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-65').offset().top -80}, 1000);
          });

          $('.js--sc-f09-66').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-66').offset().top -80}, 1000);
          });

          $('.js--sc-f09-67').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-67').offset().top -80}, 1000);
          });

          $('.js--sc-f09-68').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-68').offset().top -80}, 1000);
          });

          $('.js--sc-f09-69').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-69').offset().top -80}, 1000);
          });

          $('.js--sc-f09-70').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-70').offset().top -80}, 1000);
          });

          $('.js--sc-f09-71').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-71').offset().top -80}, 1000);
          });

          $('.js--sc-f09-72').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-72').offset().top -80}, 1000);
          });

          $('.js--sc-f09-73').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-73').offset().top -80}, 1000);
          });

          $('.js--sc-f09-74').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-74').offset().top -80}, 1000);
          });

          $('.js--sc-f09-75').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-75').offset().top -80}, 1000);
          });

          $('.js--sc-f09-76').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-76').offset().top -80}, 1000);
          });

          $('.js--sc-f09-77').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-77').offset().top -80}, 1000);
          });

          $('.js--sc-f09-78').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-78').offset().top -80}, 1000);
          });

          $('.js--sc-f09-79').click(function () {
           $('html, body').animate({scrollTop: $('#js--f09-79').offset().top -80}, 1000);
          });



});                                             /* END OF PAGE READY FUNCTION */
