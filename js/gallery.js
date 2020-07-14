 // We will extend this list later.
 const imgList = [1019, 1065, 1051, 1049, 1035]; 

 // Variable where we will store our img tags
 let imgTemplate = ''; 
 
 // Flex container for images
 const gallery = document.querySelector('.gallery'); 

 console.log(gallery);

 // Let's run the loop!
 // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code

 for (let i = 0; i < imgList.length; i++) {
   // This loop will run for every image in the list.

   // imgTemplate gradually grows as each HTML img is added to the existing string

   // imgTemplate = imgTemplate + `<img src="https://picsum.photos/id/${imgList[i]}/250/250" alt="Random Lorem Picsum">`;

   // This is the same as the line above except using addition assignment operator
   imgTemplate += `<img src="https://picsum.photos/id/${imgList[i]}/250/250" alt="Random Lorem Picsum">`;
 }
