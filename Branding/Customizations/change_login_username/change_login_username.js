/**
 * JQuery is the javascript library used in many places across canvas.
 *
 * This script describes how you would change the text in the email box on the Canvas
 * Login page and Self Enrollment screen.  By default, the text in the box is "Email"
 * but this script will allow you to change this.
 *
 * When implementing this script, replace <REPLACEMENT> with the text you want to appear.
 * For example, you may want to have that text be "A-Number" rather than "email".
 *
 **/


$(document).ready(function() {
    // login screen
    if (window.location.pathname.search('login')) {
        if ($('#f1_container').length == 0) { // not a mobile browser
            var sp = $('#login_form label[for=pseudonym_session_unique_id]>span');
            sp.text('<REPLACEMENT>');
        } else { // mobile browser
            $('input[name="pseudonym_session[unique_id]"]').attr("placeholder", "<REPLACEMENT>");
        }
    }
    // self enrollment screen
    if (window.location.pathname.search('enroll')) {
        $('label[for="student_email"]').text("<REPLACEMENT>");
        $('p:contains("Please enter your email and password")').text("Please enter your <REPLACEMENT> and password");
    }
});