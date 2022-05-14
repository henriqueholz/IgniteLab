import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { CoursesResolver } from './graphql/resolvers/courses.resolver';
import { StudentsResolver } from './graphql/resolvers/students.resolver';
import { CoursesService } from './graphql/services/courses.service';
import { EnrollmentsService } from './graphql/services/enrollments.service';
import { StudentsService } from './graphql/services/students.service';
import { EnrollmentsResolver } from './graphql/resolvers/enrollments.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    // Resolvers
    CoursesResolver,
    EnrollmentsResolver,
    StudentsResolver,

    // Services
    CoursesService,
    EnrollmentsService,
    StudentsService,
  ],
})
export class HttpModule {}
