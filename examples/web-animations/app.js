/**
 * 
 * Source code from 
 * https://zhuanlan.zhihu.com/p/27867539
 * 
 * 
 */
var element = document.getElementById('bigball');
var keyframes = [
  { 
    transform: 'translateY(-1000px) scaleY(2.5) scaleX(.2)', 
    transformOrigin: '50% 0',
    filter: 'blur(40px)',
    opacity: 0 
  },
  { 
    transform: 'translateY(0) scaleY(1) scaleX(1)',
    transformOrigin: '50% 50%',
    filter: 'blur(0)',
    opacity: 1 
  }
];
var options = {
  iterations: Infinity,
  iterationStart: 0,
  delay: 0,
  endDelay: 0,
  direction: 'alternate',
  duration: 700,
  fill: 'forwards',
  easing: 'ease-out',
}
element.animate(keyframes, options);