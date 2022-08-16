//Variables

const dark_mode = document.querySelector('.to_dark');
const light_mode = document.querySelector('.to_light');
const main = document.querySelector('body');
const boxes = document.querySelectorAll('.box');
const properties = document.querySelectorAll('.properties');
const values = document.querySelectorAll('.values');
const props = document.querySelectorAll('.prop2_light');
const val = document.querySelectorAll('.val2_light');
const head_a = document.querySelector('.light_a');
const head_b = document.querySelector('.light_b');
const head_c = document.querySelector('.light_c');
const nathan = document.querySelectorAll('.nathan');
const modes = document.querySelector('.modes');



//Theme change functions

dark_mode.addEventListener('click', ()=> {

    light_mode.classList.remove('hidden');

    main.classList.add('body_dark');
    head_a.classList.add('dark_a');
    head_b.classList.add('dark_b');
    head_c.classList.add('dark_c');
    modes.classList.add('modes_dark');

    modes.textContent = 'Light Mode';

    for (i=0; i < boxes.length; i++) {
        boxes[i].classList.add('box_dark');
    }
    for (i=0; i < properties.length; i++) {
        properties[i].classList.add('properties_dark');
    }
    for (i=0; i < values.length; i++) {
        values[i].classList.add('values_dark');
    }
    for (i=0; i < props.length; i++) {
        props[i].classList.add('prop2_dark');
    }
    for (i=0; i < val.length; i++) {
        val[i].classList.add('val2_dark');
    }
    for (i=0; i < nathan.length; i++) {
        nathan[i].classList.add('nathan_dark');
    }
});



light_mode.addEventListener('click', ()=> {

    light_mode.classList.add('hidden');

    main.classList.remove('body_dark');
    head_a.classList.remove('dark_a');
    head_b.classList.remove('dark_b');
    head_c.classList.remove('dark_c');
    modes.classList.remove('modes_dark');

    modes.textContent = 'Dark Mode';

    for (i=0; i < boxes.length; i++) {
        boxes[i].classList.remove('box_dark');
    }
    for (i=0; i < properties.length; i++) {
        properties[i].classList.remove('properties_dark');
    }
    for (i=0; i < values.length; i++) {
        values[i].classList.remove('values_dark');
    }
    for (i=0; i < props.length; i++) {
        props[i].classList.remove('prop2_dark');
    }
    for (i=0; i < val.length; i++) {
        val[i].classList.remove('val2_dark');
    }
    for (i=0; i < nathan.length; i++) {
        nathan[i].classList.remove('nathan_dark');
    }
});