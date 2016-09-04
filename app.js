$(document).ready(function() {

  // function Contact(firstName, lastName, phone, street, city, state) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.phone = phone;
  //   this.street = street;
  //   this.city = city;
  //   this.state = state;
  // };
  // console.log(Object.create('Nextdoor', 'Neighbor', '123-123-1234', '123 Fake Street', 'Town', 'State'))
  var ContactsObj = {
    contacts: [

      {
        firstName: "Nextdoor",
        lastName: "Neighbor",
        phone: "123-123-1234",
        address: {
          street: "123 Fake Street",
          city: "Small Town",
          state: "Wisconsin",
        }
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        phone: "456-456-1234",
        address: {
          street: "456 Fake Street",
          city: "Small Town",
          state: "Wisconsin",
        }
      },
      {
        firstName: "Jon",
        lastName: "Doe",
        phone: "789-789-7897",
        address: {
          street: "789 Fake Street",
          city: "Small Town",
          state: "Wisconsin",
        }
      }
    ]
   
  };
  var AddContact = {
    addToList: function() {
      for(var i = 0; i < ContactsObj.contacts.length; i++) {
        var fullName = ContactsObj.contacts[i].firstName + ContactsObj.contacts[i].lastName;
        $(".address-list").append(
            '<li class="address-list-item address-link ' +
            ContactsObj.contacts[i].firstName +
            ContactsObj.contacts[i].lastName +
            '">' + 
            ContactsObj.contacts[i].firstName + ' ' + ContactsObj.contacts[i].lastName +
            '</li>'
        );

        $('.' + fullName).data('contact-info',ContactsObj.contacts[i]);
      };
    },
    addSingle: function() {
      var i = ContactsObj.contacts.length - 1;
      var fullName = ContactsObj.contacts[i].firstName + ContactsObj.contacts[i].lastName;
      $(".address-list").append(
            '<li class="address-list-item address-link ' +
            ContactsObj.contacts[i].firstName +
            ContactsObj.contacts[i].lastName +
            '">' + 
            ContactsObj.contacts[i].firstName + ' ' + ContactsObj.contacts[i].lastName +
            '</li>'
        );
      $('.' + fullName).data('contact-info',ContactsObj.contacts[i]);
    },
    addFromSubmit: $('.contact-form').submit(function(event){
      event.preventDefault();
      ContactsObj.contacts.push({
        firstName: $('#first-name').val(),
        lastName: $('#last-name').val(),
        phone: $('#phone').val(),
        address: {
          street: $('#street').val(),
          city: $('#city').val(),
          state: $('#state').val()
        }
      })
      console.log(ContactsObj.contacts)
      AddContact.addSingle();
    })
  };

  $('.address-list').on("click", 'li', function(){    
    $('.contact-header').text($(this).data('contact-info').firstName + 
      ' ' + $(this).data('contact-info').lastName);
    $('.first-name-info').text($(this).data('contact-info').firstName);
    $('.last-name-info').text($(this).data('contact-info').lastName);
    $('.phone-info').text($(this).data('contact-info').phone);
    $('.address-info').text($(this).data('contact-info').address.street + ', ' +
      $(this).data('contact-info').address.city + ', ' +
      $(this).data('contact-info').address.state);
  });   

  AddContact.addToList();
  console.log($('.NextdoorNeighbor').data('contact-info').firstName);
  // console.log(ContactsObj.contacts)
});