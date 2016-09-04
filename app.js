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
          street: "123",
          city: "Small Town",
          state: "Wisconson",
        }
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        phone: "456-456-1234",
        address: {
          street: "456",
          city: "Small Town",
          state: "Wisconson",
        }
      },
      {
        firstName: "Jon",
        lastName: "Doe",
        phone: "789-789-7897",
        address: {
          street: "789",
          city: "Small Town",
          state: "Wisconson",
        }
      }
    ],
    // $('.address.link').click(function(){
    //     $('.contact-header').text(this)
    //   })    
  };
  var AddContact = {
    addToList: function() {
      for(var i = 0; i < ContactsObj.contacts.length; i++) {
        $(".address-list").append(
            '<li class="address-list-item"><a href="#" class="address-link ' +
            ContactsObj.contacts[i].firstName +
            ContactsObj.contacts[i].lastName +
            '">' + 
            ContactsObj.contacts[i].firstName + ' ' + ContactsObj.contacts[i].lastName +
            '</a></li>'
        ).data(ContactsObj.contacts[i].firstName+ContactsObj.contacts[i].lastName,ContactsObj.contacts[i]);
      };
    },
    addSingle: function() {
      var i = ContactsObj.contacts.length - 1;
      $(".address-list").append(
            '<li class="address-list-item"><a href="#" class="address-link ' +
            ContactsObj.contacts[i].firstName +
            ContactsObj.contacts[i].lastName +
            '">' + 
            ContactsObj.contacts[i].firstName + ' ' + ContactsObj.contacts[i].lastName +
            '</a></li>'
        );
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

  AddContact.addToList();
  // console.log($('.NextdoorNeighbor').data('NextdoorNeighbor').firstName);
  console.log(ContactsObj.contacts)
});