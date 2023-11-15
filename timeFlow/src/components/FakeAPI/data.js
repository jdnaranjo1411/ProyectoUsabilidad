const Eventos = [
    {
        id: 1,
        title: 'Evento 1',
        start: new Date(2021, 5, 1, 10, 0, 0),
        end: new Date(2021, 5, 1, 11, 0, 0),
        description: 'Descripción del evento 1',
        tasks: [
            {
                id: 1,
                title: 'Tarea 1',
                start: new Date(2021, 5, 1, 10, 0, 0),
                end: new Date(2021, 5, 1, 10, 30, 0),
            }, 
            {
                id: 2,
                title: 'Tarea 2',
                start: new Date(2021, 5, 1, 10, 30, 0),
                end: new Date(2021, 5, 1, 11, 0, 0),
            }
        ]
    }
];

export default (Eventos);