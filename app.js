$(document).ready(function() {

  function Contact(firstName, lastName, phone, street, city, state) {
    this.fullName = firstName + ' ' + lastName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.street = street;
    this.city = city;
    this.state = state;
  };
  
  var contactsObj = {
    contacts: [],
    addToList: function(contact) {
      $(".address-list").append(
        '<li class="address-list-item address-link">' + 
        contact.fullName +
        '</li>'
      );
    }
  };

  $('.contact-form').submit(function(event){
    event.preventDefault();
    var newContact = new Contact($('#first-name').val(), $('#last-name').val(), $('#phone').val(), $('#street').val(), $('#city').val(), $('#state').val())
    contactsObj.contacts.push(newContact);
    contactsObj.addToList(newContact);
  });
  $('.address-list').on("click", 'li', function(event){
    var contactIndex = contactsObj.contacts.findIndex(function(element, index, array){
      console.log($(event.target).text());
      if(element.fullName === $(event.target).text()) {
        return true;
      }    
    });
    var contact = contactsObj.contacts[contactIndex];
    console.log(contactIndex);
    $('.contact-header').text(contact.fullName);
    $('.first-name-info').text(contact.firstName);
    $('.last-name-info').text(contact.lastName);
    $('.phone-info').text(contact.phone);
    $('.address-info').text(contact.street + ', ' +
      contact.city + ', ' +
      contact.state).css('list-style', 'disc');
    $('.address').text('Address:')
  });  
});