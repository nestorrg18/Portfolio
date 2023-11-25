export class MenuMobile extends HTMLElement {
    constructor() {
        super();
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <div class="menu z__3" id="MobileMenu">
                <nav class="navBar navBar--mobile">
                    <figure class="navBar__logo navBar__logo--mobile svg__logo">
                        <img src="./src/assets/logos/logo_full.svg" alt="Logo">
                    </figure>
                    <a class="navBar__item navBar__item--mobile" href="#About">About me</a>
                    <a class="navBar__item navBar__item--mobile" href="#Skills">Skills</a>
                    <a class="navBar__item navBar__item--mobile" href="#Projects">Projects</a>
                    <a class="navBar__item navBar__item--mobile" href="#Contact">Contact</a>
                    <a class="navBar__item containCV" href="./src/assets/docs/Nesto_Rios_Garcia-CV.pdf">
                        <p>CV</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="none" stroke="#fcfcfc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17h6M12 6v7m0 0l3.5-3.5M12 13L8.5 9.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></path>
                        </svg>
                    </a>
                </nav>
                <theme-switcher
                    device="mobile"
                ></theme-switcher>
            </div>
        `;
        return template;
    }
    render() {
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define("menu-mobile", MenuMobile);