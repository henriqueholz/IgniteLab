import { Module } from '@nestjs/common';
import { PurchaseController } from './controllers/purchases.controller';

@Module({})
export class MessagingModule {
  constrollers: [PurchaseController];
}
