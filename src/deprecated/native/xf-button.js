import {html, PolymerElement} from '../../../assets/@polymer/polymer';


/**
 * `xf-button`
 * a button triggering Fore actions
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
export class XfButton extends PolymerElement {
    static get template() {
        return html`
      <style>
        :host {
          display: inline-block;
        }
        .label{
            display:inline-block;
            padding:4px;
        }
        button{
          background:inherit;
        }
      </style>
      <button id="button" on-click="performActions">
        <span class="label">[[label]]</span>
        <slot></slot>
      </button>
    `;
    }

    static get properties() {
        return {
            label: {
                type: String
            }
        };
    }

    connectedCallback() {
        super.connectedCallback();
        // console.log('xf-button attached');

    }


    performActions(e) {
        console.log('performActions ', this.children);

        const repeatedItem = this.closest('xf-repeat-item');
        if(repeatedItem){
            console.log('repeated click');
            repeatedItem.click();
        }
        for (let i = 0; i < this.children.length; i++) {
            // console.log('child ', this.children[i]);
            const child = this.children[i];

            if(typeof child.execute === 'function' ){
                child.execute();
            }else{
                console.warn('child has no "execute" function ', child);
                return false;
            }
        }

        // ### signal to form that action-block is complete and changes should be send
        this.dispatchEvent(new CustomEvent(
            'actions-performed',
            {
                composed: true,
                bubbles: true,
                detail: {}
            }));

        return true;
    }


}

window.customElements.define('xf-button', XfButton);
