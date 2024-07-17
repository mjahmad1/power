if (window.jQuery) {
    (function ($) {
       $(document).ready(function () {
          if (typeof (Page_Validators) == 'undefined') return;
          // Create new validator
          var newValidator = document.createElement('span');
          newValidator.style.display = "none";
          newValidator.id = "phoneValidator";
          newValidator.controltovalidate = "phone";
          newValidator.errormessage = "Phone number is not in valid format.";
          newValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
          newValidator.initialvalue = "";
          newValidator.evaluationfunction = function () {
             // check if phone number is in valid format
             var value = $("#phone").val();
             var phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
             if (value == null || value == "" || !phonePattern.test(value)) {
             return false;
             } else {
                return true;
             }
          };
 
          // Add the new validator to the page validators array:
          Page_Validators.push(newValidator);
 
       });
    }(window.jQuery));
 }