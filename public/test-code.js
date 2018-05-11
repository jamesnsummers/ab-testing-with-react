// this will persist through all state changes
console.log('TEST-CODE CONNECTED');
window.clearheadHook = function() {
  let headerElem = document.querySelector('h1');
  // this will persist through all state changes
  headerElem.style.color = '#fff';
};
