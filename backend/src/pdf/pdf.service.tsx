import { Injectable } from '@nestjs/common';
import React from 'react';
import { pdf } from '@react-pdf/renderer';
import { MyDocument } from './my-document';

@Injectable()
export class PdfService {
    async generatePdfBuffer(): Promise<Buffer> {
        const stream = await pdf(<MyDocument />).toBuffer();

        const chunks: Uint8Array[] = [];

        return new Promise<Buffer>((resolve, reject) => {
            stream.on('data', (chunk) => chunks.push(chunk));
            stream.on('end', () => resolve(Buffer.concat(chunks)));
            stream.on('error', reject);
        });
    }
}
