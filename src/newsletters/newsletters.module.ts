import { Module } from '@nestjs/common';
import { NewslettersService } from './newsletters.service';
import { NewslettersResolver } from './newsletters.resolver';
import { Newsletter } from './entities/newsletter.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [NewslettersService, NewslettersResolver],
  imports: [
    TypeOrmModule.forFeature([Newsletter])
  ]
})
export class NewslettersModule {}
