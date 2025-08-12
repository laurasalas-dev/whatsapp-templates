class Template {
    constructor(titulo, mensaje, hashtag, autor, fecha) {
        this.titulo = titulo;
        this.mensaje = mensaje;
        this.hashtag = hashtag;
        this.autor = autor;
        this.fecha = fecha;
    }

    render() {
        return `
            <div class="template">
                <h3>${this.titulo}</h3>
                <p>${this.mensaje}</p>
                <small>${this.hashtag} - ${this.autor} (${this.fecha})</small>
                <button class="delete-btn">Eliminar</button>
            </div>
        `;
    }
}

export default Template;