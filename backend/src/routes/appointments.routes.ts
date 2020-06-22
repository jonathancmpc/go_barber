import { Router } from 'express';
import { uuid } from 'uuidv4';

const appointmentsRouter = Router();

const appointments = [];

/* Como temos o método use dentro de index.ts que já nos dá a rota com /appointments, não precisamos utiliza-la aqui nessas rotas, por já cai vir automáticamente, bastando passar o próximo item depois da barra */
appointmentsRouter.post('/', (request,response) => {
  /* Pega o prestador de serviço(barbeiro) e a data hora do agendamento */
  const { provider, date } = request.body;

  const appointment = {
    id: uuid(),
    provider,
    date,
  };

  appointments.push(appointment);

  return response.json(appointment);
});


export default appointmentsRouter;
