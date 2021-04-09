function scrollUp(top) {
  const vheight = $('.test').height();
  const margin_top = parseInt($('#survey').css('margin-top'), 10);
  $('html, body').animate({
    scrollTop: top - vheight - margin_top
  }, 500);
};

function scrollDown(top) {
  const vheight = $('.test').height();
  const margin_top = parseInt($('#survey').css('margin-top'), 10);
  $('html, body').animate({
    scrollTop: vheight + top - margin_top
  }, 500);
}

$(function () {
  $('.next_btn').click(function (e) {
    let divs = $(this).parent().prev().children();
    let present_top = $(this).parent().parent()[0].offsetTop;
    let inputs = divs.find('input:checked');
    if (inputs.length < 1) {
      alert('문항이 선택되지 않았습니다.');
      return false;
    }
    e.preventDefault();
    scrollDown(present_top);
  });

  $('.prev_btn').click(function (e) {
    let present_top = $(this).parent().parent()[0].offsetTop;
    e.preventDefault();
    scrollUp(present_top);
  });

  $("#form").submit(function () {
    let radios = $('input[type=radio]:checked');
    if (radios.length < 10) {
      alert("문항이 선택되지 않았습니다.");
      return false;
    }
    return true;
  });

  $("html, body").animate({
    scrollTop: 0
  }, 500);
});

$('form').submit(function (e) {
  e.preventDefault()
  const form_data = $('form').serializeArray()

  const counter = Array(6)
  counter.fill(0)

  for (const input of form_data) {
    counter[input.value] += 1
  }

  const best_developer_id = counter.indexOf(Math.max(...counter))

  switch (best_developer_id) {
    case 1: {
      location.href = '/backend.html'
    }
    case 2: {
      location.href = '/frontend.html'
    }
    case 3: {
      location.href = '/data.html'
    }
    case 4: {
      location.href = '/security.html'
    }
    case 5: {
      location.href = '/game.html'
    }
  }
})