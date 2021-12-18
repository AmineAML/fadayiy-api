import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        baseURL: `${configService.get('NASA_APOD')}`,
        params: {
          api_key: configService.get('NASA_DEVELOPER_KEY')
        }
      }),
      inject: [ConfigService]
    }),
  ],
  providers: [
    {
      provide: 'HttpServiceApod', // this can also be a symbol. It should be made a constant
      useExisting: HttpService
    }
  ],
  exports: ['HttpServiceApod']
})
export class HttpApod {}