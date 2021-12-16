import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubscriberInput } from './dto/create-subscriber.input';
import { Newsletter } from './entities/newsletter.entity';

@Injectable()
export class NewslettersService {
    constructor(@InjectRepository(Newsletter) private newslettersRepository: Repository<Newsletter>) {}

    async findAllSubscribers(): Promise<Newsletter[]> {
        return this.newslettersRepository.find();
    }

    createSubscriber(createSubscriberInput: CreateSubscriberInput): Promise<Newsletter> {
        const newSubscriber = this.newslettersRepository.create(createSubscriberInput)

        return this.newslettersRepository.save(newSubscriber);
    }

    findOne(id: number): Promise<Newsletter> {
        return this.newslettersRepository.findOneOrFail(id);
    }
}
