// use a  DOMContentLoaded event listener to ensure it runs after the DOM is fully loaded and then run a function
document.addEventListener("DOMContentLoaded", function() {
    // Get odd and even elements as arrays using class query selector all so it targets all of the buttons
    const odd = Array.from(document.querySelectorAll(".odd"));
    const even = Array.from(document.querySelectorAll(".even"));
    //get the title element using id query selector
    const correct_title = document.querySelector("#correct_order_title");
  
    // Create a variable which has the master timeline
    const masterTimeline = gsap.timeline();
  
    // Create variables for the timelines for odd and even elements and the title
    const oddTimeline = gsap.timeline();
    const evenTimeline = gsap.timeline();
    const correctTimeline = gsap.timeline();
  
    // create the timeline for the title so it comes in from the top and there is a color change
    correctTimeline.from(correct_title, { y: -200, color: "rgb(2, 30, 42)", duration: 5 }); 
    //create the odd timeline so it changes color and comes in from the left staggered so each element is seperate
    oddTimeline.from(odd, { x: -1000, backgroundColor: "rgb(112, 196,162)", duration: 3, stagger: 1 }); 
    //create the even timeline so it changes color and comes in from the right staggered so each element is seperate
    evenTimeline.from(even, { x: 1000, backgroundColor: "rgba(12, 124, 215, 0.549)", duration: 3, stagger: 1 }); 
  
    // Add timelines to master timeline
    masterTimeline.add(oddTimeline).add(evenTimeline);
});
