$('.info-info').hide()
$('.edu-info').hide()

$('.email-address-container').on('click', function () {
  $('.email-address').focus()
  $('.email-address').select()
})

$('#edu-click-target').click(function (evt) {
  moveUnderlineZone($(evt.currentTarget))

  setTimeout(function() {
    $('.info-info').hide()
    $('.biz-info').hide()
    $('.edu-info').show()
  }, 200)
})

$('#info-click-target').click(function (evt) {
  moveUnderlineZone($(evt.currentTarget))

  setTimeout(function() {
    $('.info-info').show()
    $('.biz-info').hide()
    $('.edu-info').hide()
  }, 200)
})

$('#biz-click-target').click(function (evt) {
  moveUnderlineZone($(evt.currentTarget))

  setTimeout(function() {
    $('.info-info').hide()
    $('.biz-info').show()
    $('.edu-info').hide()
  }, 200)
})

function moveUnderlineZone (target) {
  $('.underline-zone').css('left', target.offset().left - $('.container').offset().left - 15 + 'px')  
}