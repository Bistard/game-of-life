import { invoke } from "@tauri-apps/api/tauri";
import { SideBar } from "ui/sideBar";
import { GameWindow } from "ui/window";

const MAIN = new (class Main {
	
	// [field]

	private readonly element: HTMLElement;
	private readonly sideBar: SideBar;
	private readonly gameWindow: GameWindow;

	// [constructor]

	constructor() {
		this.element = document.createElement('div');
		this.element.className = 'container';
		
		this.sideBar = new SideBar(this.element);
		this.gameWindow = new GameWindow(this.element);

		document.body.appendChild(this.element);
	}

	// [public methods]

});


// let greetInputEl: HTMLInputElement | null;
// let greetMsgEl: HTMLElement | null;
// 
// async function greet() {
// 	if (greetMsgEl && greetInputEl) {
// 		// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// 		greetMsgEl.textContent = await invoke("greet", {
// 			name: greetInputEl.value,
// 		});
// 	}
// }
// 
// window.addEventListener("DOMContentLoaded", () => {
// 	greetInputEl = document.querySelector("#greet-input");
// 	greetMsgEl = document.querySelector("#greet-msg");
// 	document
// 		.querySelector("#greet-button")
// 		?.addEventListener("click", () => greet());
// });
