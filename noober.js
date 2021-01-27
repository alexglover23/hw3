function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // the 'ride' variable contains data about a random ride (i.e. when the page)
  // is refreshed or reloaded, the 'ride' variable will contain something different
  // to get started, try to write other parts of 'ride' to the JavaScript console in Chrome
  // e.g. ask 'ride' for its length or only grab the first member of the Array
  
  console.log(ride)

  
  
  let numberOfLegs = ride.length

  console.log(numberOfLegs)

  // only single riders are eligible for Noober Pool


  if (numberOfLegs == '1') {
    
    
    passenger1Name = ride[0].passengerDetails.first + ' ' + ride[0].passengerDetails.last
    
    passenger1Phone = ride[0].passengerDetails.phoneNumber

    passenger1NumberOfPassengers = ride[0].numberOfPassengers

    passenger1PickupAddressLine1 = ride[0].pickupLocation.address

    passenger1PickupAddressLine2 = ride[0].pickupLocation.city + ', ' + ride[0].pickupLocation.state + ' ' + ride[0].pickupLocation.zip

    passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address 

    passenger1DropoffAddressLine2 = ride[0].dropoffLocation.city + ', ' + ride[0].dropoffLocation.state + ' ' + ride[0].dropoffLocation.zip

    console.log(passenger1Name)
    console.log(passenger1Phone)
    console.log(passenger1NumberOfPassengers)

    passenger1PurpleRequested = ride[0].purpleRequested

    if (passenger1PurpleRequested == Boolean(true)) {
      levelOfService = 'Purple'
    } else if (passenger1NumberOfPassengers > '3') {
      levelOfService = 'Noober XL'
    } else {
      levelOfService = 'Noober X'
    } 
    
    console.log(passenger1PurpleRequested)

  } else if (numberOfLegs == '2') {
    
    levelOfService = 'Noober Pool'

    passenger1Name = ride[0].passengerDetails.first + ' ' + ride[0].passengerDetails.last
    passenger2Name = ride[1].passengerDetails.first + ' ' + ride[1].passengerDetails.last
    
    passenger1Phone = ride[0].passengerDetails.phoneNumber
    passenger2Phone = ride[1].passengerDetails.phoneNumber

    passenger1NumberOfPassengers = ride[0].numberOfPassengers
    passenger2NumberOfPassengers = ride[1].numberOfPassengers

    passenger1PickupAddressLine1 = ride[0].pickupLocation.address
    passenger2PickupAddressLine1 = ride[1].pickupLocation.address

    passenger1PickupAddressLine2 = ride[0].pickupLocation.city + ', ' + ride[0].pickupLocation.state + ' ' + ride[0].pickupLocation.zip
    passenger2PickupAddressLine2 = ride[1].pickupLocation.city + ', ' + ride[1].pickupLocation.state + ' ' + ride[1].pickupLocation.zip
    
    passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address 
    passenger2DropoffAddressLine1 = ride[1].dropoffLocation.address 

    passenger1DropoffAddressLine2 = ride[0].dropoffLocation.city + ', ' + ride[0].dropoffLocation.state + ' ' + ride[0].dropoffLocation.zip
    passenger2DropoffAddressLine2 = ride[1].dropoffLocation.city + ', ' + ride[1].dropoffLocation.state + ' ' + ride[1].dropoffLocation.zip

    console.log(passenger1Name)
    console.log(passenger2Name)
    console.log(passenger1Phone)
    console.log(passenger1NumberOfPassengers)

  } else {
    
    levelOfService = 'Noober Pool'

    passenger1Name = ride[0].passengerDetails.first + ' ' + ride[0].passengerDetails.last
    passenger2Name = ride[1].passengerDetails.first + ' ' + ride[1].passengerDetails.last
    passenger3Name = ride[2].passengerDetails.first + ' ' + ride[2].passengerDetails.last

    passenger1Phone = ride[0].passengerDetails.phoneNumber
    passenger2Phone = ride[1].passengerDetails.phoneNumber
    passenger3Phone = ride[2].passengerDetails.phoneNumber

    passenger1NumberOfPassengers = ride[0].numberOfPassengers
    passenger2NumberOfPassengers = ride[1].numberOfPassengers
    passenger3NumberOfPassengers = ride[2].numberOfPassengers

    passenger1PickupAddressLine1 = ride[0].pickupLocation.address
    passenger2PickupAddressLine1 = ride[1].pickupLocation.address
    passenger3PickupAddressLine1 = ride[2].pickupLocation.address

    passenger1PickupAddressLine2 = ride[0].pickupLocation.city + ', ' + ride[0].pickupLocation.state + ' ' + ride[0].pickupLocation.zip
    passenger2PickupAddressLine2 = ride[1].pickupLocation.city + ', ' + ride[1].pickupLocation.state + ' ' + ride[1].pickupLocation.zip
    passenger3PickupAddressLine2 = ride[2].pickupLocation.city + ', ' + ride[2].pickupLocation.state + ' ' + ride[2].pickupLocation.zip
    
    passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address 
    passenger2DropoffAddressLine1 = ride[1].dropoffLocation.address 
    passenger3DropoffAddressLine1 = ride[2].dropoffLocation.address 

    passenger1DropoffAddressLine2 = ride[0].dropoffLocation.city + ', ' + ride[0].dropoffLocation.state + ' ' + ride[0].dropoffLocation.zip
    passenger2DropoffAddressLine2 = ride[1].dropoffLocation.city + ', ' + ride[1].dropoffLocation.state + ' ' + ride[1].dropoffLocation.zip
    passenger3DropoffAddressLine2 = ride[2].dropoffLocation.city + ', ' + ride[2].dropoffLocation.state + ' ' + ride[2].dropoffLocation.zip
    
    console.log(passenger1Name)
    console.log(passenger2Name)
    console.log(passenger3Name)
    console.log(passenger1Phone)
    console.log(passenger1NumberOfPassengers)

   /*  if (passenger1NumberOfPassengers == '1' && passenger2NumberOfPassengers == '1' && passenger3NumberOfPassengers ==) {
      levelOfService = 'Noober Pool'
    } else {
      levelOfService = 'Noober X'
    } */
  }

  // these variables map to the elements on the finished page;
  // assign the proper value to each variable

  // levelOfService
  // passenger1Name, passenger1Phone, passenger1NumberOfPassengers
  // passenger1PickupAddressLine1, passenger1PickupAddressLine2
  // passenger1DropoffAddressLine1, passenger1DropoffAddressLine2
  // passenger2Name, passenger2Phone, passenger2NumberOfPassengers
  // passenger2PickupAddressLine1, passenger2PickupAddressLine2
  // passenger2DropoffAddressLine1, passenger2DropoffAddressLine2
  // passenger3Name, passenger3Phone, passenger3NumberOfPassengers
  // passenger3PickupAddressLine1, passenger3PickupAddressLine2
  // passenger3DropoffAddressLine1, passenger3DropoffAddressLine2
  
  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}