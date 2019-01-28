$(() => {
  // create new burger
  $('.burger').on('click', event => {
    event.preventDefault();
    const name = $('#burger')
      .val()
      .trim();
    const newBurger = name;
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(() => {
      console.log('created new burger');
      location.reload();
    });
  });

  // update burger
  $('.devour').on('click', function devour(event) {
    // event.preventDefault();
    const id = $(this).attr('data-id');
    const burgerToDevour = {
      id
    };
    console.log(burgerToDevour);
    $.ajax(`/api/burgers/${id}`, {
      type: 'PUT',
      data: `${burgerToDevour}`
    }).then(() => {
      location.reload();
    });
  });
});
