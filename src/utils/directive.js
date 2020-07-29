export default {

  install: function(Vue) {

    let text_to_html = function (el, binding) {
      for (let i = el.childNodes.length - 1; i >= 0; i--) {
        el.removeChild(el.childNodes[i])
      }
      let texts = binding.value.split('\n')    
      for (let i = 0; i < texts.length; i++) {    
        let line = document.createElement('div')
        line.appendChild(document.createTextNode(texts[i]))
        if (!texts[i]) line.style.height = '1.1em'
        el.appendChild(line)
      }
    }
    
    Vue.directive('mline-text', {
      bind: text_to_html,
      update: text_to_html
    })
  }
}

