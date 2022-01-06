import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        baseURL: configService.get('BING_IMAGE_SEARCH_API_URL'),
        headers: {
          'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com',
          'x-rapidapi-key': configService.get('BING_IMAGE_SEARCH_API_KEY')
        }
      }),
      inject: [ConfigService]
    }),
  ],
  providers: [
    {
      provide: 'HttpServiceBingImageSearch', // this can also be a symbol. It should be made a constant
      useExisting: HttpService
    }
  ],
  exports: ['HttpServiceBingImageSearch']
})
export class HttpBingImageSearch {}