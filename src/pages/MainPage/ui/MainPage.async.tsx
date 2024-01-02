import { lazy } from 'react';

export const MainPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            // FIXME убрать сет таймаут
            setTimeout(() => resolve(import('./MainPage')), 1500);
        })
);
