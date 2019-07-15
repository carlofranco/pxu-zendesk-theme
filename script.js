/*
 * jQuery v1.9.1 included
 */
	var oldIds = ["581-register-your-shopify-theme","https://support.pixelunion.net/category/221-support","300-getting-started","442-getting-started-with-reach","323-getting-started","386-getting-started-with-empire","222-terms-and-conditions","https://support.pixelunion.net/category/239-general","318-products-and-collections","245-getting-started-shopify-basics","592-ultimate-special-offers-and-multi-currency","https://support.pixelunion.net/category/385-empire","412-how-to-set-up-your-stores-navigation","https://support.pixelunion.net/category/28-atlantic","https://support.pixelunion.net/category/253-startup","https://support.pixelunion.net/category/255-grid","https://support.pixelunion.net/category/251-launch","https://support.pixelunion.net/category/441-reach","https://support.pixelunion.net/category/243-vogue","https://support.pixelunion.net/category/354-handy","https://support.pixelunion.net/category/249-editions","https://support.pixelunion.net/category/32-pacific","518-configuring-your-ultimate-special-offers-settings","548-installation-process","https://support.pixelunion.net/article/264-grid-theme-changelog","https://support.pixelunion.net/article/408-empire-release-notes","https://support.pixelunion.net/article/270-startup-release-notes","https://support.pixelunion.net/article/269-atlantic-release-notes","https://support.pixelunion.net/article/268-pacific-release-notes","https://support.pixelunion.net/article/366-handy-release-notes","https://support.pixelunion.net/article/298-release-notes","https://support.pixelunion.net/article/265-editions-release-notes","https://support.pixelunion.net/article/309-launch-release-notes","https://support.pixelunion.net/article/450-reach-release-notes","https://support.pixelunion.net/article/538-feature-additions","https://support.pixelunion.net/category/180-fortune"];
  var newIds = ["/articles/360022055134-Register-your-Shopify-theme","","/articles/360022151894","/articles/360022292513","/articles/360022103034","/articles/360022154334","/articles/360022344073","/categories/360001660793","/articles/360022331133","/articles/360022052054","/articles/360022100674","/sections/360003950493-Empire","/articles/360022052534","/sections/360003907714-Atlantic","/sections/360003909174-Startup","/sections/360003950473-Grid","/sections/360003950513-Launch","/sections/360003909154-Reach","/sections/360003909214-Vogue","/sections/360003952013-Handy","/sections/360003909194-Editions","/sections/360003952033-Pacific","/articles/360021573834-Configuring-Your-Ultimate-Special-Offers-Settings-","/articles/360021574954","/articles/360022331593-Grid-s-Release-Notes","/articles/360022155054-Empire-Release-Notes","/articles/360022140274-Startup-release-notes","/articles/360022296113-Atlantic-s-release-notes","/articles/360022138074-Pacific-Release-Notes","/articles/360022151674-Handy-s-Release-Notes","/articles/360022340033-Vogue-s-Release-Notes","/articles/360022143434-Editions-Release-Notes","/articles/360022153414-Launch-Release-Notes","/articles/360022096394-Reach-release-notes","/articles/360021575054-Feature-Additions","/articles/360022409813-Fortune-release-notes"];

  for (var i = 0; i < oldIds.length; i++){
    if (window.location.href.indexOf(oldIds[i]) > -1) {
      window.location.href = 'https://support.pixelunion.net/hc/en-us' + newIds[i]; 
    }
  }
$(document).ready(function() {
  

document.addEventListener('DOMContentLoaded', function() {
  function closest (element, selector) {
    if (Element.prototype.closest) {
      return element.closest(selector);
    }
    do {
      if (Element.prototype.matches && element.matches(selector)
        || Element.prototype.msMatchesSelector && element.msMatchesSelector(selector)
        || Element.prototype.webkitMatchesSelector && element.webkitMatchesSelector(selector)) {
        return element;
      }
      element = element.parentElement || element.parentNode;
    } while (element !== null && element.nodeType === 1);
    return null;
  }

  // social share popups
  Array.prototype.forEach.call(document.querySelectorAll('.share a'), function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      window.open(this.href, '', 'height = 500, width = 500');
    });
  });

  // show form controls when the textarea receives focus or backbutton is used and value exists
  var commentContainerTextarea = document.querySelector('.comment-container textarea'),
    commentContainerFormControls = document.querySelector('.comment-form-controls, .comment-ccs');

  if (commentContainerTextarea) {
    commentContainerTextarea.addEventListener('focus', function focusCommentContainerTextarea() {
      commentContainerFormControls.style.display = 'block';
      commentContainerTextarea.removeEventListener('focus', focusCommentContainerTextarea);
    });

    if (commentContainerTextarea.value !== '') {
      commentContainerFormControls.style.display = 'block';
    }
  }

  // Expand Request comment form when Add to conversation is clicked
  var showRequestCommentContainerTrigger = document.querySelector('.request-container .comment-container .comment-show-container'),
    requestCommentFields = document.querySelectorAll('.request-container .comment-container .comment-fields'),
    requestCommentSubmit = document.querySelector('.request-container .comment-container .request-submit-comment');

  if (showRequestCommentContainerTrigger) {
    showRequestCommentContainerTrigger.addEventListener('click', function() {
      showRequestCommentContainerTrigger.style.display = 'none';
      Array.prototype.forEach.call(requestCommentFields, function(e) { e.style.display = 'block'; });
      requestCommentSubmit.style.display = 'inline-block';

      if (commentContainerTextarea) {
        commentContainerTextarea.focus();
      }
    });
  }

  // Mark as solved button
  var requestMarkAsSolvedButton = document.querySelector('.request-container .mark-as-solved:not([data-disabled])'),
    requestMarkAsSolvedCheckbox = document.querySelector('.request-container .comment-container input[type=checkbox]'),
    requestCommentSubmitButton = document.querySelector('.request-container .comment-container input[type=submit]');

  if (requestMarkAsSolvedButton) {
    requestMarkAsSolvedButton.addEventListener('click', function () {
      requestMarkAsSolvedCheckbox.setAttribute('checked', true);
      requestCommentSubmitButton.disabled = true;
      this.setAttribute('data-disabled', true);
      // Element.closest is not supported in IE11
      closest(this, 'form').submit();
    });
  }

  // Change Mark as solved text according to whether comment is filled
  var requestCommentTextarea = document.querySelector('.request-container .comment-container textarea');

  if (requestCommentTextarea) {
    requestCommentTextarea.addEventListener('input', function() {
      if (requestCommentTextarea.value === '') {
        if (requestMarkAsSolvedButton) {
          requestMarkAsSolvedButton.innerText = requestMarkAsSolvedButton.getAttribute('data-solve-translation');
        }
        requestCommentSubmitButton.disabled = true;
      } else {
        if (requestMarkAsSolvedButton) {
          requestMarkAsSolvedButton.innerText = requestMarkAsSolvedButton.getAttribute('data-solve-and-submit-translation');
        }
        requestCommentSubmitButton.disabled = false;
      }
    });
  }

  // Disable submit button if textarea is empty
  if (requestCommentTextarea && requestCommentTextarea.value === '') {
    requestCommentSubmitButton.disabled = true;
  }

  // Submit requests filter form in the request list page
  Array.prototype.forEach.call(document.querySelectorAll('#request-status-select, #request-organization-select'), function(el) {
    el.addEventListener('change', function(e) {
      e.stopPropagation();
      closest(this, 'form').submit();
    });
  });

  function toggleNavigation(toggleElement) {
    var menu = document.getElementById('user-nav');
    var isExpanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', !isExpanded);
    toggleElement.setAttribute('aria-expanded', !isExpanded);
  }

  var burgerMenu = document.querySelector('.header .icon-menu');
  var userMenu = document.querySelector('#user-nav');

  burgerMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleNavigation(this);
  });

  burgerMenu.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) { // Enter key
      e.stopPropagation();
      toggleNavigation(this);
    }
  });

  userMenu.addEventListener('keyup', function(e) {
    if (e.keyCode === 27) { // Escape key
      e.stopPropagation();
      this.setAttribute('aria-expanded', false);
      burgerMenu.setAttribute('aria-expanded', false);
    }
  });

  if (userMenu.children.length === 0) {
    burgerMenu.style.display = 'none';
  }

  // Submit organization form in the request page
  var requestOrganisationSelect = document.querySelector('#request-organization select');

  if (requestOrganisationSelect) {
    requestOrganisationSelect.addEventListener('change', function() {
      closest(this, 'form').submit();
    });
  }

  // Toggles expanded aria to collapsible elements
  Array.prototype.forEach.call(document.querySelectorAll('.collapsible-nav, .collapsible-sidebar'), function(el) {
    el.addEventListener('click', function(e) {
      e.stopPropagation();
      var isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
    });
  });

  // If a section has more than 6 subsections, we collapse the list, and show a trigger to display them all
  const seeAllTrigger = document.querySelector("#see-all-sections-trigger");
  const subsectionsList = document.querySelector(".section-list");

  if (subsectionsList && subsectionsList.children.length > 6) {
    seeAllTrigger.setAttribute("aria-hidden", false);

    seeAllTrigger.addEventListener("click", function(e) {
      subsectionsList.classList.remove("section-list--collapsed");
      seeAllTrigger.parentNode.removeChild(seeAllTrigger);
    });
  }
});

// mediaWrapper.js: Simple responsive iframes
// MIT license http://www.opensource.org/licenses/mit-license.php/
// @author Matthew A. K. Smith http://www.akselkreis.com

(function( $ ){

  $.fn.mediaWrapper = function(options) {

    var settings = $.extend( {
      intrinsic   : true,
      baseWidth   : 16,
      baseHeight  : 9
    }, options);

    return this.each(function() {
      var hRatio = '';

      if (settings.intrinsic == true && $(this).attr("width") !== '' && $(this).attr("height") !== ''){
        hRatio = ($(this).attr("height") / $(this).attr("width")) * 100;
      } else {
        hRatio = (settings.baseHeight / settings.baseWidth) * 100;
      }

      $(this).wrap('<div class="mediaWrapper" style="position: relative; width: 100%; height: 0; padding: '+ hRatio +'% 0 0 0; " />').css({"position":"absolute","width":"100%","height":"100%","top":"0","left":"0"});
    });
  };
})( jQuery ); 
  
$('iframe').mediaWrapper({
  intrinsic:	true
});
  
var tabs = $('ul.tabs');
tabs.each(function(i) {
  var tab = $(this).find('> li > a');
  tab.click(function(e) {
    var contentLocation = $(this).attr('href');
    console.log(contentLocation);
    if(contentLocation.charAt(0)=="#") {
      console.log('yes');
      e.preventDefault();
      tab.removeClass('active');
      $(this).addClass('active');
      $(this).parents('ul.tabs').next().find(contentLocation).show().css({'display': 'block'}).addClass('active').siblings().hide().removeClass('active');
    }
  });
});

});