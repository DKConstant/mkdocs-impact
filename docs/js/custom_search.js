$(document).ready(function(){
  const $searchOutput = $('.custom-search .md-search__output');
  const $customSearchInput = $('.custom-search .md-search__form .md-search__input');
  const $searchInner = $('.md-search__inner');

  // $headerSearch.remove();

  $customSearchInput.focusin(function(){
    $searchOutput.addClass('focus');
  });
  $customSearchInput.click(function(){
    $searchOutput.addClass('focus');
  });

  $('body').click(function(e){
    const $clickObject = $(e.target);
    if ($searchInner.find($clickObject).length < 1) {
      $searchOutput.removeClass('focus');
    }
  });
});
