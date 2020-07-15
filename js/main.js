const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please Enter a Valid Email Address");
  } else {
    email.setCustomValidity("");
  }
});

document.getElementsByName('email')[0].setAttribute("placeholder", "example@example.com");
document.getElementsByName('password')[0].setAttribute("placeholder", "8 Character Min");
document.getElementsByName('confirmPassword')[0].setAttribute("placeholder", "8 Character Min");
document.getElementsByName('fullName')[0].setAttribute("placeholder", "First Last");


    // We will extend this list later.
    const imgList = [1019, 1065, 1051, 1049, 1035]; 

    // Variable where we will store our img tags
    let imgTemplate = ''; 

    // Flex container for images
    const gallery = document.querySelector('.gallery'); 

    // Loop through items using forEach (available on every array)
    imgList.forEach(function(item){
      console.log(item);
      // Our output variable (imgTemplate) contains a gradually growing list of animal images using the addition assignment operator
      imgTemplate += `<img src="https://picsum.photos/id/${item}/250/250" alt="Random Lorem Picsum">`;
    });

    // Add HTML img string to gallery container
    gallery.innerHTML = imgTemplate;
