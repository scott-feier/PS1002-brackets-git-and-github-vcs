/* PRACTICALSERIES (c) 2016

*******************************************************************************
Title :          LOCAL SCROLL - JQUERY                          06-07-SCROLL.JS
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

31 Jul 2018   d-R01-00-02  M. Gledhill    Scroll section added

23 Sep 2017   R01          M. Gledhill    First formal release

19 Aug 2017   P10          M. Gledhill    Published

18 Aug 2017   d-P09.06.02  M. Gledhill    Page created
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
          $('.js--sc-060700').click(function () {
           $('html, body').animate({scrollTop: $('#js--060700').offset().top -20}, 1000);
          });

          $('.js--sc-060701').click(function () {
           $('html, body').animate({scrollTop: $('#js--060701').offset().top -20}, 1000);
          });

          $('.js--sc-060702').click(function () {
           $('html, body').animate({scrollTop: $('#js--060702').offset().top -20}, 1000);
          });

          $('.js--sc-060703').click(function () {
           $('html, body').animate({scrollTop: $('#js--060703').offset().top -20}, 1000);
          });

          $('.js--sc-060704').click(function () {
           $('html, body').animate({scrollTop: $('#js--060704').offset().top -20}, 1000);
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

          $('.js--sc-f06-56').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-56').offset().top -80}, 1000);
          });
          $('.js--sc-f06-57').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-57').offset().top -80}, 1000);
          });
          $('.js--sc-f06-58').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-58').offset().top -80}, 1000);
          });
          $('.js--sc-f06-59').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-59').offset().top -80}, 1000);
          });

          $('.js--sc-f06-60').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-60').offset().top -80}, 1000);
          });
          $('.js--sc-f06-61').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-61').offset().top -80}, 1000);
          });
          $('.js--sc-f06-62').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-62').offset().top -80}, 1000);
          });
          $('.js--sc-f06-63').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-63').offset().top -80}, 1000);
          });
          $('.js--sc-f06-64').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-64').offset().top -80}, 1000);
          });
          $('.js--sc-f06-65').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-65').offset().top -80}, 1000);
          });
          $('.js--sc-f06-66').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-66').offset().top -80}, 1000);
          });
          $('.js--sc-f06-67').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-67').offset().top -80}, 1000);
          });
          $('.js--sc-f06-68').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-68').offset().top -80}, 1000);
          });
          $('.js--sc-f06-69').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-69').offset().top -80}, 1000);
          });

          $('.js--sc-f06-70').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-70').offset().top -80}, 1000);
          });
          $('.js--sc-f06-71').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-71').offset().top -80}, 1000);
          });
          $('.js--sc-f06-72').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-72').offset().top -80}, 1000);
          });
          $('.js--sc-f06-73').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-73').offset().top -80}, 1000);
          });
          $('.js--sc-f06-74').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-74').offset().top -80}, 1000);
          });
          $('.js--sc-f06-75').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-75').offset().top -80}, 1000);
          });
          $('.js--sc-f06-76').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-76').offset().top -80}, 1000);
          });
          $('.js--sc-f06-77').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-77').offset().top -80}, 1000);
          });
          $('.js--sc-f06-78').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-78').offset().top -80}, 1000);
          });
          $('.js--sc-f06-79').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-79').offset().top -80}, 1000);
          });

          $('.js--sc-f06-80').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-80').offset().top -80}, 1000);
          });
          $('.js--sc-f06-81').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-81').offset().top -80}, 1000);
          });
          $('.js--sc-f06-82').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-82').offset().top -80}, 1000);
          });




});                                             /* END OF PAGE READY FUNCTION */
