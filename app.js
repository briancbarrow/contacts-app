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
    displayContact: $('.address-list').on("click", 'li', function(){    
      $('.contact-header').text()
      $('.first-name-info').text($(this).data('contact-info').firstName);
      $('.last-name-info').text($(this).data('contact-info').lastName);
      $('.phone-info').text($(this).data('contact-info').phone);
      $('.address-info').text($(this).data('contact-info').address.street + ', ' +
        $(this).data('contact-info').address.city + ', ' +
        $(this).data('contact-info').address.state);
     
    }),
    addToList: function(contact) {
      $(".address-list").append(
          '<li class="address-list-item address-link">' + 
          contact.fullName +
          '</li>'
        );
    },
  };

  $('.contact-form').submit(function(event){
    event.preventDefault();
    var newContact = new Contact($('#first-name').val(), $('#last-name').val(), $('#phone').val(), $('#street').val(), $('#city').val(), $('#state').val())
    contactsObj.contacts.push(newContact);
    contactsObj.addToList(newContact);
    console.log(contactsObj.contacts)
    console.log(contactsObj.contacts.findIndex(function(element, index, array){
      if(element.fullName['George Otown']){
        return true;
      }
      
    }))
  })

  // $('.address-list').on("click", 'li', function(){   

  //   var contact = function() {

  //   }
  // });  
  contactsObj.contacts.push(new Contact('Nextdoor', 'Neighbor', '123-123-1234', '123 Fake Street', 'Town', 'State')) 
  console.log(contactsObj.contacts)
  console.log(contactsObj.contacts.findIndex(function(element, index, array){
    console.log(element.fullName);
    if(element.fullName==='Nextdoor Neighbor'){
        return true;
      }
  }))
  // console.log(contactsObj.contacts)
});