import {dedupingMixin} from '../../assets/@polymer/polymer/lib/utils/mixin.js';

/**
 *
 * A bound element is an element having a `bind` attribute. All Controls are bound elements, however not all bound elements
 * are controls (e.g. itemset, repeat, group and actions).
 *
 * @polymer
 * @mixinClass
 * @param superClass
 *
 *
 *
 * @deprecated
 */
let bound = (superClass) =>
    class extends superClass {

        constructor() {
           super();
        }

        static get properties() {
            return {
                bind:{
                    type: String
                },
                ownerForm:{
                    type: Object
                },
                modelItem:{
                    type:Object
                },
                /**
                 * flag signaling wether a bound element is relevant or not.
                 */
                relevant: {
                    type: Boolean,
                    value: true,
                    observer: '_updateRelevant'
                },
                repeated:{
                    type: Boolean,
                    value:false
                }
            };
        }

        connectedCallback(){
            super.connectedCallback();
            this.ownerForm = this.closest('xf-form');
        }

        init(){
            this.modelItem = this.ownerForm.findById(this.ownerForm.modelData, this.bind);
            if(this.closest('xf-repeat')){
                this.repeated = true;
            }
        }

        _updateRelevant() {
            if(this.relevant){
                this.hidden = false;
            }else{
                this.hidden = true;
            }
        }



    };

export const BoundElementMixin = dedupingMixin(bound);