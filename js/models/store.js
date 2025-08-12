import Template from './models/Template.js';

export const Store = {
    state: {
        plantillas: [
            new Template("Promo Verano", "Aprovecha el 50% de descuento", "#verano", "Laura", "2025-08-11"),
            new Template("Recordatorio", "No olvides tu cita mañana", "#recordatorio", "Laura", "2025-08-11")
        ]
    },
    listeners: [],

    subscribe(fn) {
        this.listeners.push(fn);
    },

    notify() {
        this.listeners.forEach(fn => fn());
    },

    addTemplate(template) {
        this.state.plantillas = [...this.state.plantillas, template]; // inmutabilidad
        this.notify();
    },

    removeTemplate(index) {
        this.state.plantillas = this.state.plantillas.filter((_, i) => i !== index);
        this.notify();
    }
};