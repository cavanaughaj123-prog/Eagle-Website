<script src="assets/js/main.js">

/* NAV SHRINK */

window.addEventListener('scroll',()=>{

    const nav=document.getElementById('navbar');

    if(window.scrollY > 40){
        nav.classList.add('scrolled');
    }else{
        nav.classList.remove('scrolled');
    }

});

/* MOBILE MENU */

const hamburger=document.getElementById('hamburger');
const mobileMenu=document.getElementById('mobileMenu');

hamburger.addEventListener('click',()=>{

    mobileMenu.classList.toggle('active');

});

/* REVEAL ANIMATIONS */

const reveals=document.querySelectorAll('.reveal');

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('visible');

        }

    });

},{threshold:0.1});

reveals.forEach(el=>observer.observe(el));


/* NAV SHRINK */

window.addEventListener('scroll',()=>{

    const nav=document.getElementById('navbar');

    if(window.scrollY > 40){
        nav.classList.add('scrolled');
    }else{
        nav.classList.remove('scrolled');
    }

});

/* MOBILE MENU */

const hamburger=document.getElementById('hamburger');
const mobileMenu=document.getElementById('mobileMenu');

hamburger.addEventListener('click',()=>{

    mobileMenu.classList.toggle('active');

});

/* REVEAL ANIMATIONS */

const reveals=document.querySelectorAll('.reveal');

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('visible');

        }

    });

},{threshold:0.1});

reveals.forEach(el=>observer.observe(el));

</script>
