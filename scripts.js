var myBirthday = new Date('September 21, 91 00:20:18 GMT+00:00')
var millisecondsInYearIsh = 31536000000
var probablyMyAge = Math.floor((Date.now() - myBirthday) / millisecondsInYearIsh)

$("#my-current-age").text(probablyMyAge)

$('.info-info').hide()
$('.edu-info').hide()
$('#biz-click-target').css('color', '#66F')

$('.email-address-container').on('click', function () {
  $('.email-address').focus()
  $('.email-address').select()
})

$('.lower-email-address-container').on('click', function () {
  $('.lower-email-address').focus()
  $('.lower-email-address').select()
})

$('#edu-click-target').click(function (evt) {
  updateActiveInfoSection(evt, 'edu')
})

$('#info-click-target').click(function (evt) {
  updateActiveInfoSection(evt, 'info')
})

$('#biz-click-target').click(function (evt) {
  updateActiveInfoSection(evt, 'biz')
})

function moveUnderlineZone (target) {
  $('.underline-zone').css('left', target.offset().left - $('.container').offset().left - 15 + 'px')  
}

function updateActiveInfoSection (evt, activeSection) {
  moveUnderlineZone($(evt.currentTarget))
  var inactiveSections = ['info', 'biz', 'edu'].filter(function(section) {
    return section !== activeSection
  })

  $('#' + activeSection + '-click-target').css('color', '#66F')
  
  setTimeout(function () {
    inactiveSections.forEach(function (section) {
      $('.' + section + '-info').hide()
      $('#' + section + '-click-target').css('color', '#333')
    })

    $('.' + activeSection + '-info').show()
  }, 200)
}