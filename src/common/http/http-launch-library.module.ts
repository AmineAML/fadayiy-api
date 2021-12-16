import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        baseURL: configService.get('NODE_ENV') == 'development' ? configService.get('LAUNCH_LIBRARY_V2_API_DEV') : configService.get('LAUNCH_LIBRARY_V2_API_PROD')
      }),
      inject: [ConfigService]
    }),
  ],
  providers: [
    {
      provide: 'HttpServiceLaunchLibrary', // this can also be a symbol. It should be made a constant
      useExisting: HttpService
    }
  ],
  exports: ['HttpServiceLaunchLibrary']
})
export class HttpLaunchLibrary {}