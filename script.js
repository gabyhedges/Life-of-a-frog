// required to function correctly when the page loads. it ensures the annoymous function runs
window.onload = function() {
  //calls the fundction so that it intitally shows up on the page load
  callDateTime(); 
  document.getElementsByClassName("info")[0].style.height = "0vh";

};
//this is the function called callDateTime. its purpose is to find the current time and date and display it
function callDateTime() {
  //this line gets the current date and changes it into a string so it is human readable
  var currentDate = (new Date()).toDateString(); 
  //this line gets the current time and changes it into a string so humans can read it and it makes sense
  var currentTime = (new Date()).toLocaleTimeString(); 
  //this line looks at the document and finds the ID of date and changes the html to display the date and time
  document.querySelector("#date").innerHTML = `${currentDate} - ${currentTime}`; 

  // this creates a variable to ensure that there is no overlap of intervals. it is an annoymous function 
  var intervalId = setInterval(function() {
    //this calls the function and gives a one second interval so the time updates
    callDateTime();
  }, 1000); 
}


//creates a constant variable and assigns it to the title_box class using querySelector 
const title = document.querySelector('#title');
// creates a constant variable and assigns it to the greensock gsap library then says to location and has one argument the title previously assigned. then we set the yPerecent which is the vertical axis to -50% and repeat it 10 times with no ease
const tween =gsap.to(title, {
  yPercent: -50, 
  repeat: 20, 
  ease: "none"});
//creates a constant variable and assigns it to the greensock library and again do to location and have the previous tween as an argument. we change the total progress to 1 and a duration of 4 seconds with the power4 ease
const eased =gsap.to(tween, {
  totalProgress: 1, 
  duration: 4, 
  ease:"power4.inOut"});

// first we create a constant called cycle and set it to the class of life cycle on our image in the html
const cycle = document.querySelector('.life_cycle');

// the we use GSAP to create the animation
//we create a simple to function that is set to repeat once 
gsap.to(cycle, { repeat: 1,
    //we rotate the image 360 degrees
  rotation:360,
  //we set the duration of the animation to 2 seconds
  duration: 2,  
  //we use the power2 ease or type of motion for a smooth rotation 
  ease: "power2.inOut" 
});

var navbar = gsap.timeline();

navbar.from(".navbar_container", {
  x: -400,
  opacity: 0,
  duration: 1.2
});
// Wait for the DOM content to be loaded before executing the script and run a function

document.addEventListener("DOMContentLoaded", function() {
  // Get all elements with the class "egg_text" and assign it with a constant variable
  const eggText = document.querySelectorAll('.egg_text');

  // Loop through each element and animate it using GSAP
  

      // Use GSAP to animate each element
      gsap.from(eggText, {
          opacity: 0, // Start with opacity 0 which is hidden to start
          y: -500, //move the text on the y axis vertically 
          duration: 1.5, // Duration of the animation which is 1.5 seconds
          ease: "power4.out", // Easing or type of maotion function for smooth animation
           
      });
  });

// Wait for the DOM content to be loaded before executing the script then run a function
document.addEventListener("DOMContentLoaded", function() {
  // Get all <p> tags inside the .egg_text div
  const paragraphs = document.querySelectorAll('.egg_text p');

  // Loop through each <p> tag and animate it seperately using GSAP
  paragraphs.forEach((paragraph, index) => {
      // Use GSAP to animate each paragraph tag
      gsap.from(paragraph, {
          opacity: 0, // Start with opacity 0 which is hidden to start
          x: -1000, // Move each paragraph from the left 1000 pixels on the x axis or horizontally
          duration: 8, // Duration of the animation in this case 5 seconds
          ease: "power2.out", // Easing or type of movement function for smooth animation
          delay: index * 0.2 // Add delay to each paragraph to create a staggered effect so they come in at different times
      });
  });
});

// Wait for the DOM content to be loaded before executing the script and run a function
document.addEventListener("DOMContentLoaded", function() {
  // Get all elements with the class "egg_image" so it moves independantly and assign it to a constant varaibale
  const eggImage = document.querySelectorAll('.egg_image');

  // Loop through each element and animate it using GSAP
  

      // Use GSAP to animate each element
      gsap.from(eggImage, {
          opacity: 0, // Start with opacity 0 which is hidden
          y: 500, // Move each element on the y axis or vertical axis
          duration: 10, // Duration of the animation in this case conds
          ease: "power4.out", // Easing or type of movement function for smooth animation
      });
  });
// Wait for the DOM content to be loaded before executing the script and run a function  
document.addEventListener("DOMContentLoaded", function() {
  // Get all <p> tags inside the .egg_with tadpole text div and assign it to a constant variable
  const paragraphs2 = document.querySelectorAll('.egg_with_tadpole_text p');

  // Loop through each <p> tag and animate them individually using GSAP using a forEach loop
  paragraphs2.forEach((paragraph2, index) => {
      // Use GSAP to animate each paragraph
      gsap.from(paragraph2, {
          opacity: 0, // Start with opacity 0 or hidden
          x: 100, // Move each paragraph from the left on the horizontal axis
          duration: 0.3, // Duration of the animation in this case 7 seconds
          ease: "power2.out", // Easing or type of mevement function for smooth animation
          delay: index * 0.2 // Add delay to each paragraph to create a staggered effect so they move independantly one after the other
      }, "-=0.5");
  });
});



// Wait for the DOM content to be loaded before executing the script then run a function
document.addEventListener("DOMContentLoaded", function() {
    // Get the egg with tadpole image element
    const eggWithTadpoleImage = document.querySelector('.egg_with_tadpole_image');

    // Use GSAP to animate the image from a location
    gsap.from(eggWithTadpoleImage, {
        opacity: 0, // Start with opacity 0 which is hidden
        
        duration: 25, // Duration of the animation in this case 20 seconds
        y: 200,
        
        ease: "power2.out", // Easing or type of mevement function for smooth animation
        
    });
});




// Wait for the DOM content to be loaded before executing the script then run a function
document.addEventListener("DOMContentLoaded", function() {
    // Get the elements with the class "tadpole_text" and "tadpole_image_container" and "tadpole with legs image container"
    const tadpoleText = document.querySelector('.tadpole_text');
    const tadpoleImageContainer = document.querySelector('.tadpole_image_container');
    const tadpoleWithLegsImageContainer = document.querySelector('.tadpole_with_legs_image_container');

    // Register ScrollTrigger so it will work on scrollable elements
    gsap.registerPlugin(ScrollTrigger);

    // Animate content_3 container
    gsap.from(tadpoleText, {
        opacity: 0, // Start with opacity 0 which is hidden to start
        x: -100, // Move from far left on the horizontal or x axis
        duration: 1.5, // Duration of the animation inh this case 1..5 seconds
        ease: "power4.out", // Easing or type of movement function for smooth animation
        scrollTrigger: { //so that the animation moves only when the user scrolls to a particular part of the page
            trigger: tadpoleText, // Element to trigger animation. when tadpole text comes into view
            start: "top 80%", // Start animation when the top of the element is 80% in view
            end: "bottom 20%", // End animation when the bottom of the element is 20% in view
            scrub: true // Smoothly scrub the animation as the user scrolls which allows for the user to move backwards and forwards with the scroll button
        }
    });

    // Animate content_4 div
    gsap.from(tadpoleImageContainer, {
        opacity: 0, // Start with opacity 0 which is hidden
        y: 300, // Move from bottom up on the vertical or y axis 
        duration: 1.5, // Duration of the animation which in this case is 1.5 seconds
        ease: "power4.out", // Easing or type of movement function for smooth animation
        scrollTrigger: { //allows for the animation to only move when the user gets to that part of the screen
            trigger: tadpoleImageContainer, // Element to trigger animation in this case the tadpole image container
            start: "top 80%", // Start animation when the top of the element is 80% in view
            end: "bottom 20%", // End animation when the bottom of the element is 20% in view
            scrub: true // Smoothly scrub the animation as the user scrolls so the user can scroll backwards and forwards with the scroll wheel
        }
    });


// create a constant variable and assign it to the text box for tadopole with legs using query selector
const textBox = document.querySelector('.tadpole_with_legs_text');

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate the element to come in from the right side when scrolled into view
gsap.from(textBox, {
  x: 100, // position it starts at which in this case is the far right
  duration: 2, // Animation duration in this case 2 seconds
  opacity: 1, // becomes visibile when scrolled
  scrollTrigger: {//this is the scrollTrigger so that when the user reaches that part of the page the following is triggered
    trigger: textBox, // this is the element to trigger the animation
    start: "top 80%", // Start animation when element is 80% from the top of the viewport
    end: "bottom 20%", // End animation when element is 20% from the bottom of the viewport
    scrub: true // Smoothly scrub the animation as the user scrolls so the user can scroll backwards and forwards with the scroll wheel
  }
});

   
   
    // Animate tadpole_with_legs_image_container
    gsap.from(tadpoleWithLegsImageContainer, {
        opacity: 0, // Start with opacity 0 which is hidden to start
        x: -100, // Move from far left on the horizontal or x axis
        duration: 1.5, // Duration of the animation in this case 1.5 seconds
        ease: "power4.out", // Easing or type of mevemtn function for smooth animation
        scrollTrigger: { //this allows for the animation to occur when the user scrolls to the right part of the page
            trigger: tadpoleWithLegsImageContainer, // Element to trigger animation in this case the image container
            start: "top 80%", // Start animation when the top of the element is 80% in view
            end: "bottom 20%", // End animation when the bottom of the element is 20% in view
            scrub: true // Smoothly scrub the animation as the user scrolls which means the user can scroll backwards and forwards and the animation follows
        }
    });
});


// Animate froglet_image 
gsap.from('.froglet_image', {
    opacity: 0, // Start with opacity 0 which is hideen
    y: 100, // Move from bottom up 100 pixels
    scale: 1.3, //scale slightly larger
    duration: 5, // Duration of the animation in this case 5 seconds
    ease: "circ.out", // Easing function for smooth animation
    scrollTrigger: { //allows for the animation to move when the user moves to a particular part of the page
      trigger: ".content_5", // Element to trigger animation in this case content 5 container div
      start: "top 80%", // Start animation when the top of the element is 80% in view
      end: "bottom 20%", // End animation when the bottom of the element is 20% in view
      scrub: true // Smoothly scrub the animation as the user scrolls which means the user can scroll backwards and forwards and the animation follows
    }
  });
  
 // Get all <p> tags inside the .froglet_text div
const paragraphs4 = document.querySelectorAll('.froglet_text p');

// Loop through each <p> tag and animate it using GSAP
paragraphs4.forEach((paragraph4, index) => {
    // Use GSAP to animate each paragraph
    gsap.from(paragraph4, {
        opacity: 0, // Start with opacity 0 which is hidden
        x: -100, // Move each on the horizontal or x axis
        duration: 20, 
      // Duration of the animation in this case 20 seconds
        ease: "power2.out", // Easing function for smooth animation
        delay: index * 0.2, // Add delay to each paragraph to create a staggered effect
        scrollTrigger: { //so the animation occurs when a particular part of the screen comes into view
            trigger: ".content_5", // Element to trigger animation in this case content 5 div
            start: "top 80%", // Start animation when the top of the element is 80% in view
            end: "bottom 20%", // End animation when the bottom of the element is 20% in view
            scrub: true // Smoothly scrub the animation as the user scrolls which means the user can scroll backwards and forwards and the animation follows
        }
    });
});
//create a gsap function on the frog image
gsap.fromTo('.frog_image', 
  { // this is the from part
    opacity: 0, //starts as hidden with opacity of 0
    x: -100, //comes onto the screen in the horizontal or x axis
    rotation: -90, // Initial rotation for a hop effect so it looks like a backwards hop
  },
  { // this is the to state transition
    opacity: 1, //become visible from a hidden state
    x: 0, //go to a zero on the horizontal axis
    rotation: 10, //stop the rotation of the transition
    duration: 10, // the duration of the transition in this case 10 seconds
    ease: "bounce.out", // a bounce ease or type of movement so it looks like its hopped
    scrollTrigger: { //allows for the animation to occur when the user scrolls to a particular part of the screen
        trigger: ".content_6", //this is the part of the page that must be showing for the animation to occur
      start: "top 80%", // Start animation when the top of the element is 80% in view
      end: "bottom 20%", // End animation when the bottom of the element is 20% in view
      scrub: true // Smoothly scrub the animation as the user scrolls which means the user can scroll backwards and forwards and the animation follows
    }
  }
);

// Wait for the DOM content to be loaded before executing the script and run a function
window.addEventListener("click", function() {
  // Get all <p> tags inside the .egg_with_tadpole_text div and assign it to a constant variable
  const paragraphs5 = document.querySelectorAll('.frog_text p');

  // Loop through each <p> tag and animate them individually using GSAP using a forEach loop
  paragraphs5.forEach((paragraph5, index) => {
      // Use GSAP to animate each paragraph
      gsap.from(paragraph5, {
          opacity: 0, // Start with opacity 0 or hidden
          x: 100, // Move each paragraph from the left on the horizontal axis
          duration: 7, // Duration of the animation in this case 7 seconds
          ease: "power2.out", // Easing or type of movement function for smooth animation
          delay: index * 0.2 // Add delay to each paragraph to create a staggered effect so they move independently one after the other
      });
  });
});


// Wait for the DOM content to be loaded before executing the script then run a function
document.addEventListener("DOMContentLoaded", function() { //create a draggable element 
    Draggable.create("#draggable_egg_with_tadpole", {
        throwProps: true, //allows for natural movement in this case not bound by a direction
        bounds: (".draggable_cycle_container"), //keep the draggable object within the bounds of the content box
        edgeResistance: 0.7 //keep it away from the edges
    });
//create a draggable element
    Draggable.create("#draggable_frog", {
        throwProps: true, //allows for natural movement in this case not bound by a direction
        bounds: (".draggable_cycle_container"), //keep the draggable object within the bounds of the content box
        edgeResistance: 0.7 //keep it away from the edges
    });
//create a draggable element
    Draggable.create("#draggable_tadpole", {
        throwProps: true, //allows for natural movement in this case not bound by a direction
        bounds: (".draggable_cycle_container"), //keep the draggable object within the bounds of the content box
        edgeResistance: 0.7 //keep it away from the edges
    });
//create a draggable element
    Draggable.create("#draggable_froglet", {
        throwProps: true, //allows for natural movement in this case not bound by a direction
        bounds: (".draggable_cycle_container"), //keep the draggable object within the bounds of the content box
        edgeResistance: 0.7 //keep it away from the edges
    });
//create a draggable element
    Draggable.create("#draggable_eggs", {
        throwProps: true, //allows for natural movement in this case not bound by a direction 
        bounds: (".draggable_cycle_container"), //keep the draggable object within the bounds of the content box
        edgeResistance: 0.7 //keep it away from the edges
    });
//create a draggable element
    Draggable.create("#draggable_tadpole_with_legs", {
        throwProps: true, //allows for natural movement in this case not bound by a direction
        bounds: (".draggable_cycle_container"), //keep the draggable object within the bounds of the content box
        edgeResistance: 0.7 //keep it away from the edges
    });
});


    // Initialize ScrollTrigger
 
// Wait for the DOM content to be loaded before executing the script then run a function
  document.addEventListener('DOMContentLoaded', function() { //create a constant variable and assign it to the frog 2 image using query selector
    const frogImage = document.querySelector('.frog_2_image');
    //add an event listener so when the user clicks on it the action will occur and the function will run
    frogImage.addEventListener('click', jumpFrog);
  });
  
  
// Wait for the DOM content to be loaded before executing the script then run a function
  document.addEventListener('DOMContentLoaded', function() {
    //assign the constant variable to the image using query selector
    const frogImage = document.querySelector('.frog_2_image');
    let isJumping = false; // Flag to track if the frog is currently jumping
    let hopCount = 0; // Track the number of hops that the frog has done
  //add an event listener so when the user clicks on the frog a second or subsequeent time the frog will move again
    frogImage.addEventListener('click', function() {
      if (!isJumping) { // Check if the frog is not currently jumping so it doesn't stall the program
        hopCount++; // Increment the hop count by 1
        jumpFrog(); // Start the jump animation function
      }
    });
  //this is the jumpFrog animation function defined
    function jumpFrog() {
      isJumping = true; // Set the flag to indicate that the frog is jumping so that the animation doesn't stall
  
      const hopDistance = hopCount * 50; // Calculate the distance to hop based on the hop count so it increases each time the animation is run
  
      gsap.to('.frog_2_image', {
        x: `+=${hopDistance}%`, // Move the frog to the right edge of the window
        ease: 'power4.out', // Set the ease or type of movement for the jump motion
        duration: 0.5, // Duration of the jump animation this time 0.5 seconds so its a quick jump
        onComplete: function() {
          isJumping = false; // Reset the flag after the jump is completed so that the frog can jump again if still on the screen
        }
      });
    }
  });
  ;
  
  
  
//define a variable to target the strip which houses the slides using query selector
var slideStrip = document.querySelector("#strip");

//define a variable that gets all the slides with the class slide using query selector all so we get as many slides as there is available
var slides = slideStrip.querySelectorAll(".slide");

// create a varaible and assign it to the width of the slides. offsetwidth returns the layout width of any element in this case slides in pixels including padding border and if present the scrollbar. it does not include margin. we will use the variable later for smooth transition
var slideWidth = slides[0].offsetWidth;

// create a variable that stores the length or number of slides in the deck
var totalSlides = slides.length;

// create a varaible to hold the duplicated slide and then duplicate it so that the deck returns smoothly to the first image
var firstSlide = slides[0].outerHTML;

//add the cloned slide to the end on the deck to allow for amooth transitions
slideStrip.innerHTML += firstSlide;


// create a variable called index and assign it to zero to intilialise it
var index = 0;

//this is the function that will move the slide. we create a functon called slideForward which will advance the slide

function slideForward() {
   // add one to the slide index so it is always going forwards. totalSlides + 1 represents the total number of slides plus the one we added to the end when we cloned the first slide. the modulo operator which is the percentage sign returns the remainder of dividing the left operand by the right operand. It ensures that the index wraps around to 0 once it reaches the total number of slides plus 1 
   index = (index + 1) % (totalSlides + 1);
   
   
   
   // reveals the next slide horizontally using gsap. it targets the slideStrip variable we defined earlier then it changes x or horizontal axis accross the width of the slide we set earlier over a duration of half a  second. when its completed its animation it runs the reset function
   gsap.to(slideStrip, { x: -slideWidth * index, duration: 0.5, onComplete: reset });
}
//this is the reset function. it resets the slides. it is only called after the animation is completeed. the function checks if the index which is representing the current slide is equal to the total number of slides and if it is it sets the x position of the slide show to zero which will reveal the first slide again 
function reset() {
   if (index === totalSlides) {
      gsap.set(slideStrip, { x: 0 });
      index = 0;
   }
}
//this instructs javascript to execute the slideForward function once every 1000 miliseconds so the carousel perpetually runs
setInterval(slideForward, 1000);



 // Creates a constant variable and assigns it to the test your knowledge boxx class using querySelector
const test = document.querySelector('#test_your_knowledge');

// Creates a constant variable and assigns it to the greensock gsap library then says to  and has one argument the test previously assigned. Then we set the yPercent which is the vertical axis to -50% and repeat it 15 times with no ease.
const tween2 = gsap.to(test, { 
  yPercent: -50, 
  repeat: 5, 
  ease: "none" });

// Creates a constant variable and assigns it to the greensock library and again do to location and have the previous tween as an argument. We change the total progress to 1 and a duration of 4 seconds with the circ ease.
const eased2 = gsap.to(tween2, { 
  totalProgress: 1, 
  duration: 4, 
  ease: "circ.inOut" });

// Function to trigger animation on scroll
function animateOnScroll() {
    // Check if the element is in the viewport. it does so by checking the bounding of the element. a different way of checking if the element is in viewport
    const isInViewport = (element) => {
        const bounding = element.getBoundingClientRect();//a function to check the bounding of the elemenet to make sure it is in the viewport
        return (
          //these are all the bounding elemenets that it checks 
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // If element is in viewport, play the animation which is both tween2 and eased2
    if (isInViewport(test)) {
        tween2.play();
        eased2.play();
    } else {//if its not in the viewort then pause the animation
        tween2.pause();
        eased2.pause();
    }
}

// Event listener for scroll event so that the function occurs when the scroll happens
window.addEventListener('scroll', animateOnScroll);

// Initial trigger in case the element is already in the viewport. it runs the animation function
animateOnScroll();
 

//find the element by its ID in this case the thumbs up and add an event listenere which waits for the user to click on the item and then run a function
document.getElementById('thumbs_up').addEventListener('click', function() {
  gsap.to(this, { //use the gsap library to function on the element. we specifiy this elemenet
    scale: 2.5, //we scale the item by 2.5 times so it becomes bigger
    rotation: 360, //then rotate it 360 degrees a total circle
    duration: 2, //the duration when the animation occurs in this case 2 seconds
    onComplete: function() { //once the above function has been run the below code will run. the target is the this element it will scale up by 1 times with no rotation and no duration of time
      gsap.to(this.target, { scale: 1, rotation: 0, duration: 0 });
    }
  });
});
  
 gsap.from(".scene_image", {scrollTrigger: {
  trigger: ".frog_2_image", // Element to trigger animation we use the frog image as it doesn't have to be the same as the gsap element and we want it when the frog comes into view
  start: "top 80%", // Start animation when element is 80% from the top of the viewport
  end: "bottom 20%", // End animation when element is 20% from the bottom of the viewport
  scrub: true // Smoothly scrub the animation as the user scrolls which means that the user can scroll backwards and forwards and the animations follow
}, x: -1000, duration: 5}) ;

//register the scroll trigger
gsap.registerPlugin(ScrollTrigger);

//create the scroll trigger
ScrollTrigger.create({
  trigger: "#thumbs_up_text", // Element to trigger animation is the id of thumbs_up_text
  start: "top 80%", // Start animation when element is 80% from the top of the viewport
  end: "bottom 20%", // End animation when element is 20% from the bottom of the viewport
  scrub: true, // Smoothly scrub the animation as the user scrolls so it can go backwards and forwards

  //when the user enters the viewport the id of thumbs up text will be replaced with the text line over 2 seconds with no ease
  onEnter: () => {
    gsap.to("#thumbs_up_text", {
      text: "If you've enjoyed learning about the life cycle of the frog",
      duration: 2,
      delay: 1,
      ease: "none",
      //once the first text is written the second text will be written in the id of the thumbs up text 2 box over 2 seconds with no ease
      onComplete: () => {
        gsap.to("#thumbs_up_text2", {
          text: "Give us a thumbs up by clicking on the thumb",
          duration: 2,
          ease: "none"
        });
      }
    });
  },
  //when the user leaves the viewport the id of thumbs up text will be replaced with the empty text line over 2 seconds with no ease so it resets the text when the viewport is left
  onLeaveBack: () => {
    gsap.to("#thumbs_up_text", {
      text: "", 
      duration: 0, //this occurs over no duration as we want it to immediately take effect
    });
    gsap.to("#thumbs_up_text2", {
      text: "",   //when the user leaves the viewport the id of thumbs up text 2 will be replaced with the empty text line over 2 seconds with no ease so it resets the text when the viewport is left
      duration: 0 //this occurs over no duration as we want it to immediately take effect
    });
  }
});


//create two constant variables and assign them to all the elements with a class of cls-9 and cls-1 of the svg
const pads = document.querySelectorAll(".cls-9");
const frogs = document.querySelectorAll(".cls-1");

//create a timeline
const tl = gsap.timeline();
//the timeline will move the light reeds a little so they wiggle on permanant loop
tl.from("#light_reeds", { 
  x: 5, 
  duration: 0.3,
   repeat: -1, 
   ease: "none"}, 0.5)
//the timeline will make the dark reeds wiggle by moving slightly on a permanant loop
  .from("#dark_reeds", { 
    x: -5, 
    duration: 0.7, 
    repeat: -1, 
    ease: "none" }, 0.5)
  //the timeline continues and moves the pads up and right slightly so they look like they are moving on the water. they are on permanant loop to repeat
  .from(pads, { 
    stagger: 0.5, 
    x: 5, 
    y: 5, 
    duration: 1, 
    repeat: -1 }, 0.3)
  //the timeline continues to move the frogs so they look like they are alive on a permanant loop of repetitiion
  .to(frogs, { 
    stagger: 0.5,
     x: -10, 
     ease: "bounce.out", 
     repeat: -1 }),
//we create an array of objects
  frog_info = {
    eggs: {
      heading: "Egg Stage",
      week: "Less than 7 days",
      interesting_info: "Start as a yolk and split until 4 then 8 cells then 16 and so on"
    },
    eggs_with_tadpoles: {
      heading: "Egg with Tadpole Stage",
      week: "6-21 days (average!)",
      interesting_info: "The egg masses form large cocoon-like foamy masses. The foam sometimes cakes dry in the sun, protecting the inside moisture."
    },
    tadpole: {
      heading: "Tadpole Stage",
      week: "7 to 10 days after hatched",
      interesting_info: "The tadpole at this point consists of poorly developed gills, a mouth, and a tail. After about 4 weeks, the gills start getting grown over by skin, until they eventually disappear."
    },
    tadpole_with_legs: {
      heading: "Tadpole with Legs Stage",
      week: "about 6 to 9 weeks",
      interesting_info: "Little tiny legs start to sprout. The head becomes more distinct and the body elongates. By now the diet may grow to include larger items like dead insects and even plants."
    },
    froglet: {
      heading: "Froglet Stage",
      week: "by 12 weeks",
      interesting_info: "The tadpole has only a teeny tail stub and looks like a miniature version of the adult frog. Soon, it will leave the water, only to return again to laymore eggs and start the process all over again!"
    },
    frog: {
      heading: "Frog Stage",
      week: "between 12 to 16 weeks",
      interesting_info: "Depending on water and food supply, the frog has completed the full growth cycle."
    }
  };
  //we target the stagz_image and on click it finds the id of this keyword with the attribute of id
  $(".stagez_image").on("click", function() {
    var id = $(this).attr('id');
    document.getElementsByClassName("info")[0].style.height = "100vh";
    //it calls the function and changes the id of using a function
    changeText(id);
    //it restarts the function
    stagestl.restart(); // Restart the timeline to its initial state
  });
  //we create a variable and assign it to a timeline and have it paused as default. this will close the box that pops up
  var closetl = gsap.timeline({ paused: true });
  //this is the timeline to close the box by removing it from the screen
  closetl.to(".info", {
    x: -500,
    duration: 1,
    ease: "Power4.out",
    opacity: 0
  })
 
    // this.progress(0); 
  
  //we find the close button and on click run the function that plays the close
  $(".close").on("click", function() {
    closetl.play(); 
    //restarts the animation for the close timeline
    closetl.restart();
    // document.getElementsByClassName("info")[0].style.height ="0vh";
    
  });
  
  //this is the function that changes the html text within the box that pops up.first we create a variable that targets the information in the array we previously outlined
  function changeText(stage) {
    var heading = frog_info[stage].heading;
    var week_info = frog_info[stage].week;
    var fact_info = frog_info[stage].interesting_info;
  //the we alter the html from each part based on the information from the array object we made earlier
    $(".heading").html(heading);
    $(".stat_week").html(week_info);
    $(".stat_fact").html(fact_info);
  }
  //we ceate a timeline that starts as paused true so we can activate it ourselves
  var stagestl = gsap.timeline({ paused: true });
//the timeline has a from to a to for the class info which is thee box of information
stagestl
  .fromTo(".info", {
    //it starts on the horizontal axis at 500 pixels to the right and is hidden with zero opacity
    x: 500,
    opacity: 0
  }, {
    //it moves to its set location over the horizontal axis over 1 second duration with a power eaase or type of movement and opacity becomes 1 or visible
    x: 0,
    duration: 1,
    ease: "Power4.out",
    opacity: 1
  })
  //we continue the timeline so that each of the headings and subheadings and text etc move on the horizontal axis with a quick duration that start as hidden na dmove staggered so they appear one after the other with a power4 ease of movement
  .from(".heading, .subheading, .stat, .close", {
    x: 500,
    duration: 0.8,
    opacity: 0,
    ease: "Power4.out",
    stagger: 0.4 
  });

  

  
  
    
    




   





  