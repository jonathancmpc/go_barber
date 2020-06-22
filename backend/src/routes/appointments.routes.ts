import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

const appointmentsRouter = Router();

const appointments: Appointment[] = [];

/* Como temos o método use dentro de index.ts que já nos dá a rota com /appointments, não precisamos utiliza-la aqui nessas rotas, por já cai vir automáticamente, bastando passar o próximo item depois da barra */
appointmentsRouter.post('/', (request,response) => {
  /* Pega o prestador de serviço(barbeiro) e a data hora do agendamento */
  const { provider, date } = request.body;

  /* Converte primeitamente em data, e depois zera os minutos e segundos, passando somente a hora inicial da data informada */
  const parsedDate = startOfHour(parseISO(date));

  /* Verifica se existe alguma data igual dentro do nosso banco de dados ficticio, se tiver, ele retorna essa data dentro da variável findAppointmentInSameDate, e se não encontrar nenhuma, retorna false */
  const findAppointmentInSameDate = appointments.find(appointment =>
    isEqual(parsedDate, appointment.date)
  );

  if (findAppointmentInSameDate) {
    return response.status(400).json({ message: 'This appointment is already booked' });
  }

  const appointment = new Appointment(provider, parsedDate);

  appointments.push(appointment);

  return response.json(appointment);
});

export default appointmentsRouter;
