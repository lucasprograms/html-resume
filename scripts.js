$('.email-address-container').on('click', function () {
  $('.email-address').focus()
  $('.email-address').select()
})

$('#edu-click-target').click(function (evt) {
  moveUnderlineZone($(evt.currentTarget))
})

$('#info-click-target').click(function (evt) {
  moveUnderlineZone($(evt.currentTarget))
})

$('#biz-click-target').click(function (evt) {
  moveUnderlineZone($(evt.currentTarget))
})

function moveUnderlineZone (target) {
  $('.underline-zone').css('left', target.offset().left - $('.container').offset().left - 15 + 'px')  
}