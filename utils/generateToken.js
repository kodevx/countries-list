import { encrypt } from 'caesar-encrypt';
const SHIFT = 2;

export const generateToken = (input) => {
    return encrypt(input, SHIFT);
}
