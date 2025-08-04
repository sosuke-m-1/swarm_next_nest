import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { PdfService } from './pdf.service';

@Controller('pdf')
export class PdfController {
    constructor(private readonly pdfService: PdfService) {}

    @Get()
    async getPdf(@Res() res: Response) {
        const pdfBuffer = await this.pdfService.generatePdfBuffer();

        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="sample.pdf"',
            'Content-Length': pdfBuffer.length,
        });

        res.end(pdfBuffer);
    }
}
