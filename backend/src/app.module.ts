import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { PdfController } from './pdf/pdf.controller';
import { PdfService } from './pdf/pdf.service';

@Module({
    imports: [UsersModule, PrismaModule],
    controllers: [AppController, PdfController],
    providers: [AppService, PdfService],
})
export class AppModule {}
