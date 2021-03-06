import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StationsModule } from './stations/stations.module';
import { NewslettersModule } from './newsletters/newsletters.module';
import { AstronautsModule } from './astronauts/astronauts.module';
import { AgencyModule } from './agency/agency.module';
import { LaunchModule } from './launch/launch.module';
import { ApodModule } from './apod/apod.module';
import { EpicModule } from './epic/epic.module';
import { BingImageSearchModule } from './bing-image-search/bing-image-search.module';

@Module({
  imports: [
    StationsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get<string>('NODE_ENV') == 'development' ? 'localhost' : 'fadayiy_postgres',
      port: configService.get<number>('POSTGRES_HOST_PORT'),
      username: configService.get<string>('POSTGRES_USER'),
      password: configService.get<string>('POSTGRES_PASSWORD'),
      database: configService.get<string>('POSTGRES_DB'),
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: configService.get<string>('NODE_ENV') == 'development' ? true : false,
    }),
    inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    NewslettersModule,
    AstronautsModule,
    AgencyModule,
    LaunchModule,
    ApodModule,
    EpicModule,
    BingImageSearchModule,
    CacheModule.register({
      isGlobal: true,
      // cache for a week to save on build time
      ttl: 604800
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
