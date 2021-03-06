/// BareSpecifier=polymer-redux/demo/elements/todo-table
import { html, PolymerElement } from '../../../@polymer/polymer/polymer-element.js';
import './todo-input.js';
import './todo-item.js';

export default class TodoTable extends PolymerElement {
	static get template() {
		return html`
			<style>
				div {
					padding: 19px 30px 30px;
				}
			</style>
			<div>
				<template is="dom-repeat" items="[[items]]">
					<todo-item done="[[item.done]]" index="[[index]]">
						[[item.task]]
					</todo-item>
				</template>
				<todo-input />
			</div>
		`;
	}

	static get properties() {
		return {
			items: {
				type: Array
			}
		};
	}
}

customElements.define('todo-table', TodoTable);