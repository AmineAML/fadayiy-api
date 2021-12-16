import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        baseURL: configService.get('LIBRE_TRANSLATE')
      }),
      inject: [ConfigService]
    }),
  ],
  providers: [
    {
      provide: 'HttpServiceLibreTranslate', // this can also be a symbol. It should be made a constant
      useExisting: HttpService
    }
  ],
  exports: ['HttpServiceLibreTranslate']
})
export class HttpLibreTranslate {}