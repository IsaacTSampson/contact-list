import { palette } from './constants';

export const getRandomColour = () => {
    return palette[Math.floor(Math.random() * palette.length)];
}