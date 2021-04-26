/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

var pJS = function(tag_id, params){

    var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');
  
    /* particles.js variables with default values */
    this.pJS = {
      canvas: {
        el: canvas_el,
        w: canvas_el.offsetWidth,
        h: canvas_el.offsetHeight
      },
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#fff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#ff0000'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: '',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 1,
          random: false,
          anim: {
            enable: false,
            speed: 2,
            opacity_min: 0,
            sync: false
          }
        },
        size: {
          value: 20,
          random: false,
          anim: {
            enable: false,
            speed: 20,
            size_min: 0,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 100,
          color: '#fff',
          opacity: 1,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 3000,
            rotateY: 3000
          }
        },
        array: []
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab:{
            distance: 100,
            line_linked:{
              opacity: 1
            }
          },
          bubble:{
            distance: 200,
            size: 80,
            duration: 0.4
          },
          repulse:{
            distance: 200,
            duration: 0.4
          },
          push:{
            particles_nb: 4
          },
          remove:{
            particles_nb: 2
          }
        },
        mouse:{}
      },
      retina_detect: false,
      fn: {
        interact: {},
        modes: {},
        vendors:{}
      },
      tmp: {}
    };
  
    var pJS = this.pJS;
  
    /* params settings */
    if(params){
      Object.deepExtend(pJS, params);
    }
  
    pJS.tmp.obj = {
      size_value: pJS.particles.size.value,
      size_anim_speed: pJS.particles.size.anim.speed,
      move_speed: pJS.particles.move.speed,
      line_linked_distance: pJS.particles.line_linked.distance,
      line_linked_width: pJS.particles.line_linked.width,
      mode_grab_distance: pJS.interactivity.modes.grab.distance,
      mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
      mode_bubble_size: pJS.interactivity.modes.bubble.size,
      mode_repulse_distance: pJS.interactivity.modes.repulse.distance
    };
  
  
    pJS.fn.retinaInit = function(){
  
      if(pJS.retina_detect && window.devicePixelRatio > 1){
        pJS.canvas.pxratio = window.devicePixelRatio; 
        pJS.tmp.retina = true;
      } 
      else{
        pJS.canvas.pxratio = 1;
        pJS.tmp.retina = false;
      }
  
      pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
      pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;
  
      pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
      pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
      pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
      pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
      pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
      pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
      pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
      pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
      pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;
  
    };
  
  