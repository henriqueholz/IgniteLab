import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CoursesService } from '../http/graphql/services/courses.service';
import { EnrollmentsService } from '../http/graphql/services/enrollments.service';
import { StudentsService } from '../http/graphql/services/students.service';
import { PurchaseController } from './controllers/purchases.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PurchaseController],
  providers: [StudentsService, CoursesService, EnrollmentsService],
})
export class MessagingModule {}
