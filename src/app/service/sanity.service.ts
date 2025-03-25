import { Injectable } from '@angular/core'
import { createClient } from '@sanity/client'
import { Module } from '../module'

@Injectable({ providedIn: 'root' })
export class SanityService {
    constructor() {}

    sanityClientCredentials = {
        option: createClient(
            {
                projectId: "vh55mhjn",
                dataset: "production_private",
                useCdn: true,
            }
        )
    }

    async getModules(): Promise<Module[]> {
        return await this.sanityClientCredentials.option.fetch(
            `*[_type == "module"]`
        );
    }
}