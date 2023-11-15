import Eventos from './data.js';


export default class FakeAPI {

    static getEventos() {
        return Eventos;
    }

    static getEvento(id) {
        return Eventos.find(evento => evento.id === id);
    }

    static getTasks(id) {
        return Eventos.find(evento => evento.id === id).tasks;
    }

    

}

    
        
