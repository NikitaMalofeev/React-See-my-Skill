import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import '@testing-library/jest-dom';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('with only text', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
    });

    test('test toggle event', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
    });
});
