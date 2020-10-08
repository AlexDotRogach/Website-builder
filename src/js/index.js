
"use strict";

import {model} from './model';

document.addEventListener('DOMContentLoaded', () => {

    const site = document.querySelector('#site'),
          appBut = document.querySelectorAll('.sidebarButtons button'),
          listOpen = document.querySelector('.list'),
          listBack = document.querySelector('.back'),
          modalList = document.querySelector('.modalList'),
          contModalList = document.querySelectorAll('.modalList div');

        listOpen.addEventListener('click', () => {
            modalList.style.transform = 'translateX(0)';
            listOpen.style.display = 'none';

            appBut.forEach(item => {
                item.style.display = 'none';
            });
        });

        listBack.addEventListener('click', () => {
            modalList.style.transform = 'translateX(-300px)';
            listOpen.style.display = 'block';

            appBut.forEach(item => {
                item.style.display = 'block';
            });
        });
          
    const buttons = document.querySelectorAll('.sidebarButtons button');

        buttons.forEach(item => {
            item.addEventListener('click', () => {
                generationModel(item.name);
            });
        });

// define name from model 
let container = [];

    function generationModel(name) {
        
        model.forEach(item => {

            if (item.type == name) {
                container.push(item.constructor);  

                buttons.forEach(but => {

                    if (but.name == 'container') {
                        but.disabled = 'disabled';
                    }
                });

                renderContainer();
            }
        });
    }
//rendering model

    function renderContainer() {

        container.forEach(item => {
            site.insertAdjacentHTML('afterbegin', item);
        });

        contModalList.forEach(a => {

            if (a.classList.value == 'cont') {

                for (let i = 0; i < a.children.length; i++) {

                    if (a.children[i].classList == 'dropList') {
                        let newElement = document.createElement('div');
                            newElement.classList.add(`container№${container.length}`);
                            newElement.textContent = `container№${container.length}`;
                            a.children[i].append(newElement);

                        return;
                    }
                }
            }
        });
    }

    function renderHeader () {

    }

// functional of list
    function dropList(list) {
        document.querySelector(`.${list}`).addEventListener('click', (e) => {
           e.target.nextElementSibling.classList.toggle('active');
        });
    }

    dropList('cont');
    dropList('str');
    dropList('colon');
});
