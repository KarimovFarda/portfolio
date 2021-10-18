import html from '../assets/svg/skills/html.svg'
import docker from '../assets/svg/skills/docker.svg'
import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import react from '../assets/svg/skills/react.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import bulma from '../assets/svg/skills/bulma.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import git from '../assets/svg/skills/git.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import tensorflow from '../assets/svg/skills/tensorflow.svg'

import figma from '../assets/svg/skills/figma.svg'
import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'
import sass from '../assets/svg/skills/1280px-Sass_Logo_Color.svg.png'
import github from '../assets/svg/skills/YwWlK401.svg'
import redux from '../assets/svg/skills/download-removebg-preview.png'
import canva from '../assets/svg/skills/canva.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {

        case 'html':
            return html;
      
        case 'docker':
            return docker;

        case 'css':
            return css;

        case 'javascript':
            return javascript;
            case 'react':
            return react;

        case 'typescript':
            return typescript;
    
        case 'bootstrap':
            return bootstrap;
        case 'bulma':
            return bulma;
        case 'sass':
            return sass;
        case 'github':
            return github;
  
        case 'redux' : 
         return redux
        case 'mongodb':
            return mongoDB;
 
        case 'tailwind':
            return tailwind;
 

        case 'firebase':
            return firebase;
  
        case 'git':
            return git;

        case 'materialui':
            return materialui;

        case 'tensorflow':
            return tensorflow;

        case 'figma':
            return figma;

        case 'microsoft office':
            return microsoftoffice;
        case 'canva':
            return canva;
        default:
            break;
    }
}
