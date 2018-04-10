import Component from '@ember/component'
import layout from '../templates/components/my-svg'
import { htmlSafe } from '@ember/string'

const MySvgComponent = Component.extend({
  layout,
  tagName: 'svg',
  attributeBindings: [
    'viewBox'
  ],
  html: htmlSafe('<rect x="10" y="10" width="100" height="100" stroke="blue" fill="purple" fill-opacity="0.5" stroke-opacity="0.8"/>'),
  didReceiveAttrs(){
    this._super(...arguments)

    this.set('viewBox', '0 0 0 0')
  }
})

export default MySvgComponent;
