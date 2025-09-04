import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Header from './Header';



beforeEach(() => {
  localStorage.clear();
});

describe('Header - Logo', () => {
  test('renderiza el logo con el alt correcto y está dentro del botón "Ir al inicio"', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });

    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    const logoImg = screen.getByRole('img', { name: /las venus del tarot/i });
    expect(logoImg).toBeInTheDocument();
    expect(logoImg.closest('button')).toHaveAccessibleName(/ir al inicio/i);
  });

  test('al hacer click en el logo navega a "/" aunque estés en "/info"', async () => {
    const user = userEvent.setup();
    const history = createMemoryHistory({ initialEntries: ['/info'] });

    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    const logoImg = screen.getByRole('img', { name: /las venus del tarot/i });
    await user.click(logoImg);

    expect(history.location.pathname).toBe('/');
  });

  test('muestra el nombre de usuario almacenado en localStorage', () => {
    localStorage.setItem('currentUserName', 'Ángela');
    const history = createMemoryHistory({ initialEntries: ['/cualquier'] });

    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    expect(screen.getByText('Ángela')).toBeInTheDocument();
  });
});
