import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateSubscriberInput } from './dto/create-subscriber.input';
import { Newsletter } from './entities/newsletter.entity';
import { NewslettersService } from './newsletters.service';

@Resolver(of => Newsletter)
export class NewslettersResolver {
    constructor(private newslettersService: NewslettersService) {}

    @Query(returns => [Newsletter], { name: 'newslettersSubscribers' })
    findAll(): Promise<Newsletter[]> {
        return this.newslettersService.findAllSubscribers();
    }

    @Mutation(returns => Newsletter, { name: 'createSubscriber' })
    addNew(@Args('createSubscriberInput') createSubscriberInput: CreateSubscriberInput): Promise<Newsletter> {
        return this.newslettersService.createSubscriber(createSubscriberInput);
    }

    @Query(returns => Newsletter, { name: 'newslettersSubscriber' })
    findOne(@Args('id', { type: () => Int}) id: number): Promise<Newsletter> {
        return this.newslettersService.findOne(id);
    }
}
