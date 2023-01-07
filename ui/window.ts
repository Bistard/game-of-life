

export class GameWindow {

    // [field]

    private readonly _element: HTMLElement;

    // [constructor]

    constructor(
        parent: HTMLElement,
    ) {
        this._element = document.createElement('div');
        this._element.className = 'game-window';
        

        parent.appendChild(this._element);
    }

    // [public methods]

}