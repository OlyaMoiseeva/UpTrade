$(document).ready(() => {

  const tab = '.tabs-box__link';
  const accordion = '.tabs__accordion';
  const active = 'tabs__active-arr';

  const showTabs = () => {
    if (window.matchMedia('(min-width: 481px)').matches) {
      $('.tabs__tab-content:first').show();
      $('.list__but').val('Продолжить');
    } else {
      $('.tabs__tab-content').hide();
      $(accordion).removeClass(active);
      $('.tabs').removeClass('tabs_bg');
      $('.choose').removeClass('choose_bg');
      $('.list__but').val('Открыть отчет');
    }
  }

  window.matchMedia('(min-width: 481px)').addListener(showTabs);

  showTabs();
//tabs
  $(`${tab}, .choose__circle`).on('click', function () {
    const idx = $(this).index();
    $('.tabs__tab-content').hide();
    const activeTab = $(this).attr('rel');
    $(`#${activeTab}`).fadeIn(0);
    $(tab)
      .removeClass('tabs-box__link_active')
      .eq(idx)
      .addClass('tabs-box__link_active');
    $(accordion).removeClass(active);
    $(`${accordion}[rel^='${activeTab}']`).addClass(active);
  });
//accordion
  $(accordion).on('click', function () {
    const activeTab = $(this).attr('rel');
    $('.tabs__tab-content').not('#' + activeTab).hide();
    $(`#${activeTab}`).fadeToggle(0);

    if ($(`#${activeTab}`).is(':visible')) {
      $('.tabs').addClass('tabs_bg');
      $('.choose').addClass('choose_bg');
    } else {
      $('.tabs').removeClass('tabs_bg');
      $('.choose').removeClass('choose_bg');
    }

    $(accordion).not(this).removeClass(active);
    $(this).toggleClass(active);
    $(tab).removeClass('tabs-box__link_active');
    $(`${tab}[rel^='${activeTab}']`).addClass('tabs-box__link_active');
  });
});