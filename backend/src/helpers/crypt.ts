import { SHA512 } from 'crypto-js';

export const encript = (content: string) => {
    return SHA512(content).toString();
}

