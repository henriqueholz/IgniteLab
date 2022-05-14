import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createCourseInput {
  @Field()
  title: string;
}
