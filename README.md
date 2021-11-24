# sunnyside-agency-card-capstone-project-2

This is a solution to the [Sunnyside agency landing page challenge ]

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for a

### Screenshot

![Annotation 2021-11-24 182453](https://user-images.githubusercontent.com/68693000/143306093-13578e5f-ca78-4944-996b-805918c99c03.jpg)
![Annotation 2021-11-24 182505](https://user-images.githubusercontent.com/68693000/143306099-2d144b05-823c-46ed-98d7-da04cd277784.jpg)
![Annotation 2021-11-24 182516](https://user-images.githubusercontent.com/68693000/143306100-ca376e49-e371-4bd6-8779-cb732acd0f65.jpg)
![Annotation 2021-11-24 182524](https://user-images.githubusercontent.com/68693000/143306104-2f115607-bcdb-4482-aa0c-b35d678804b0.jpg)
![Annotation 2021-11-24 182532](https://user-images.githubusercontent.com/68693000/143306107-1b51114c-b1f5-422f-96dc-ca9922fbf9d0.jpg)
![Annotation 2021-11-24 182539](https://user-images.githubusercontent.com/68693000/143306110-50111280-3d8b-4f96-9a5f-55ed1e5501eb.jpg)


### Links

- Solution URL: https://github.com/Nnenna-udefi/sunnyside-agency-card-capstone-project-2.git
- Live Site URL: https://sunnyside-agency-capstone-project.vercel.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- tailwindcss

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.
Styling html with tailwindcss has been superfun and complicated at the same time. the tailwind config.js feature which allows you to create your own styles was quite intesting to use. 
Here are my favorite codes because of how dificult they were to achieve;

THE LEARN MORE BUTTON
<div class="md:px-12">
<div class="w-36 object-center mx-auto h-3 opacity-30 rounded-full bg-primary-button1 relative -bottom-7 z-10">
 </div>
<button class="btn hover:bg-primary-button1 text-sm md:text-lg relative z-20">Learn more</button>
</div>

MOBILE MENU
<div class="absolute top-12 -right-8 w-16 h-16 bg-white transform rotate-45"></div>
  <div class="absolute top-20 left-0 w-full ml-6 bg-white text-center">
<a>.......</a
     </div>
     
JAVASCRIPT
const icon = document.querySelector('#icon');
const menu = document.querySelector('#menu');
icon.addEventListener('click' , () =>{
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden')
    }

})
