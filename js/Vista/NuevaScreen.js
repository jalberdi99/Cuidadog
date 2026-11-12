export class NuevaScreen {
    render() {
        return `
            <div class="nueva-screen">
                <header class="app-header">
                    <h1>Cuidadog</h1>
                </header>

                <main class="app-content">
                    <p>Soy la tercera pantalla</p>

                    <p>Haz clic en el botón para reproducir el sonido local:</p>

                    <button id="btnReproducir" class="btn-audio">
                        🔊 Reproducir Sonido
                    </button>
                </main>
            </div>
        `;
    }
}

