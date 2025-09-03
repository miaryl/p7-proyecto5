import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Header from './Header';


describe('Header: botón de info', () => {
  test('abre el modal y navega a /info; cierra con Escape volviendo a /', async () => {
    const user = userEvent.setup();
    const history = createMemoryHistory({ initialEntries: ['/'] });

    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

  
    const infoBtn = screen.getByRole('button', { name: /información de la web/i });
    await user.click(infoBtn);

   
    expect(history.location.pathname).toBe('/info');
    expect(await screen.findByRole('dialog')).toBeInTheDocument();

  
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(history.location.pathname).toBe('/'); 
  });

  test('cierra el modal con el botón "Cerrar"', async () => {
    const user = userEvent.setup();
    const history = createMemoryHistory({ initialEntries: ['/'] });

    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    await user.click(screen.getByRole('button', { name: /información de la web/i }));
    const close = await screen.findByRole('button', { name: /cerrar/i });
    await user.click(close);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(history.location.pathname).toBe('/');
  });
});
