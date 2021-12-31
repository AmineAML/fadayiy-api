import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

    async setCache(key: string, data: any) {
        return await this.cacheManager.set(key, data)
    }

    async getCache(key: string): Promise<any> {
        return await this.cacheManager.get(key)
    }
}
